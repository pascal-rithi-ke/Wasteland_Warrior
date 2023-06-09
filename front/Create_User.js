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
                    }
                );
                setEmail('');
                setUsername('');
                setPassword('');
                setErreur('');
                navigation.navigate('Home');
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
                value={email}
                onChangeText={(text) => setEmail(text)}
            />
            <TextInput
                style={styles.input}
                placeholder="Nom d'utilisateur"
                value={username}
                onChangeText={(text) => setUsername(text)}
            />
            <TextInput
                style={styles.input}
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
        backgroundColor: '#fff',
    },
    title: {
        fontSize: 30,
        fontWeight: 'bold',
        textAlign: 'center',
        marginBottom: 20,
    },
    input: {
        height: 40,
        borderWidth: 1,
        borderColor: '#ccc',
        marginBottom: 10,
        paddingHorizontal: 10,
    },
    button: {
        backgroundColor: 'blue',
        padding: 10,
        alignItems: 'center',
    },
    buttonText: {
        color: '#fff',
        fontWeight: 'bold',
    },
    erreur: {
        color: 'red',
        textAlign: 'center',
        marginTop: 10,
    },
    signUp: {
        textAlign: 'center',
        marginTop: 10,
    },
});

export default LoginForm;
