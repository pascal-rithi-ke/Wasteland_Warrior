import React, { useState } from 'react';
import { View, Text, StyleSheet, TextInput, TouchableOpacity, FlatList } from 'react-native';
import { useNavigation } from '@react-navigation/native';

import axios from 'axios';

function Add_Histoire() {
    const [titre, setTitre] = useState('');
    const [texte, setTexte] = useState('');
    const [erreur, setErreur] = useState('');

    const navigation = useNavigation();
    
    const handleInsertHistoire = async () => {
        try {
            if(titre == '' || texte == ''){
                setErreur('Veuillez remplir tous les champs !');
                return;
            }
            else if(titre.length < 3){
                setErreur('Le titre doit contenir au moins 3 caractères !');
                return;
            }
            else if(texte.length < 10){
                setErreur('Le texte doit contenir au moins 10 caractères !');
                return;
            }
            else{
            const response = await axios.post('https://5467-130-180-217-66.ngrok-free.app/addHistoire', {
                titre,
                texte
            });
            setTitre('');
            setTexte('');
            setErreur('');
            navigation.navigate('GetAllHistoire');
            }
        } catch (error) {
            setErreur(error.message);
        }
    };

    return (
        <View style={styles.container}>
            <Text style={styles.titre}>Ajouter une histoire</Text>
            <TextInput
                style={styles.input}
                placeholder="Titre"
                value={titre}
                onChangeText={setTitre}
            />
            <TextInput
                style={styles.input}
                placeholder="Texte"
                value={texte}
                onChangeText={setTexte}
            />
            <TouchableOpacity
                style={styles.button}
                onPress={handleInsertHistoire}
            >
                <Text style={styles.buttonText}>Ajouter</Text>
            </TouchableOpacity>
            <Text style={styles.erreur}>{erreur}</Text>
        </View>
    );
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        padding: 20
    },
    titre: {
        fontSize: 20,
        fontWeight: 'bold',
        textAlign: 'center',
        marginBottom: 20
    },
    input: {
        borderColor: '#000',
        borderWidth: 1,
        marginBottom: 20,
        padding: 10
    },
    button: {
        backgroundColor: '#000',
        borderRadius: 30,
        marginBottom: 20,
        padding: 15
    },
    buttonText: {
        color: '#fff',
        fontSize: 20,
        fontWeight: 'bold',
        textAlign: 'center'
    },
    erreur: {
        color: 'red',
        textAlign: 'center',
        marginBottom: 20
    },
    item: {
        borderColor: '#000',
        borderWidth: 1,
        marginBottom: 20,
        padding: 10
    },
    texte: {
        fontSize: 16,
        textAlign: 'center'
    }
});
export default Add_Histoire;