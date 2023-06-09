import React, { useState } from 'react';
import { View, TextInput, TouchableOpacity, Text, StyleSheet, Alert } from 'react-native';
import axios from 'axios';
import { useNavigation } from '@react-navigation/native';

const LoginForm = () => {
    const [email, setEmail] = useState('');
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    
    const [erreur, setErreur] = useState('');

    const navigation = useNavigation();

    const handleLogin = async () => {
        try {
            if (email === '' || password === ''|| username === '') {
                setErreur('Veuillez remplir tous les champs !');
                return;
            }
            else if (password.length < 6) {
                setErreur('Le mot de passe doit contenir au moins 6 caractères !');
                return;
            }
            else if (!email.includes('@')) {
                setErreur('Veuillez entrer une adresse email valide !');
                return;
            } else {
                const response = await axios.post(
                    'https://5467-130-180-217-66.ngrok-free.app/InsertUser',
                    {
                        email,
                        username,
                        password,
                        statut: 'player',
                    }
                );
                setEmail('');
                setUsername('');
                setPassword('');
                setErreur('');
                navigation.navigate('Home', {email, username, statut: 'player'});
            }
        } catch (error) {
            setErreur(error.message);
        }
    }

    const signIn = () => {
        navigation.navigate('Connexion');
    }

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Inscription</Text>
            <TextInput
                style={styles.input}
                placeholder="Email"
                placeholderTextColor={'white'}
                value={email}
                onChangeText={(text) => setEmail(text)}
            />
            <TextInput
                style={styles.input}
                placeholder="Nom d'utilisateur"
                placeholderTextColor={'white'}
                value={username}
                onChangeText={(text) => setUsername(text)}
            />
            <TextInput
                style={styles.input}
                placeholderTextColor={'white'}
                secureTextEntry={true}
                placeholder="Mot de passe"
                value={password}
                onChangeText={(text) => setPassword(text)}
            />
            <TouchableOpacity style={styles.button} onPress={handleLogin}>
                <Text style={styles.buttonText}>S'inscrire</Text>
            </TouchableOpacity>
            {erreur ? <Text style={styles.erreur}>{erreur}</Text> : null}
            <TouchableOpacity onPress={signIn}>
                <Text style={styles.signUp}>Déjà un compte ? Se connecter</Text>
            </TouchableOpacity>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        paddingHorizontal: 20,
        backgroundColor: 'rgba(0, 0, 0, 0.8)'
    },
    title: {
        fontSize: 30,
        fontWeight: 'bold',
        textAlign: 'center',
        marginBottom: 20,
        color: '#14f819',
        fontFamily: 'monospace',
    },
    input: {
        height: 40,
        borderWidth: 3,
        backgroundColor: 'rgba(14, 130, 16, 0.2)',
        borderRadius: 30,
        borderColor: '#14f819',
        marginBottom: 10,
        paddingHorizontal: 10,
        color: '#fff'
    },
    button: {
        padding: 10,
        alignItems: 'center',
        borderWidth: 3,
        backgroundColor: '#0e8210',
        borderRadius: 30,
        borderColor: '#14f819',
    },
    buttonText: {
        color: '#FFF',
        fontWeight: 'bold',
    },
    erreur: {
        color: '#F55',
        textAlign: 'center',
        marginTop: 10,
    },
    signUp: {
        color: '#FFF',
        textAlign: 'center',
        marginTop: 10,
        fontWeight: 'bold',
    },
});

export default LoginForm;
