import React, { useState } from 'react';
import { View, Text, StyleSheet, TextInput, TouchableOpacity, FlatList } from 'react-native';
import { useNavigation } from '@react-navigation/native';

import axios from 'axios';

function Add_Histoire() {
    const [title, setTitle] = useState('');
    const [chapitre, setChapitre] = useState('');
    const [erreur, setErreur] = useState('');

    const navigation = useNavigation();
    
    const handleInsertHistoire = async () => {
        const convertChapitre = parseInt(chapitre);
        try {
            if(title == '' || chapitre == ''){
                setErreur('Veuillez remplir tous les champs !');
                return;
            }
            else if(title.length < 3){
                setErreur('Le title doit contenir au moins 3 caractères !');
                return;
            }
            else if(convertChapitre === 0){
                setErreur('Le chapitre ne peut pas être à zéro');
                return;
            }
            else{
            const response = await axios.post('https://5467-130-180-217-66.ngrok-free.app/addHistoire', {
                title,
                chapitre: convertChapitre
            });
            setTitle('');
            setChapitre('');
            setErreur('');
            navigation.navigate('Toutes les histoires');
            }
        } catch (error) {
            setErreur(error.message);
        }
    };

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Ajouter une histoire</Text>
            <View style={styles.item}>
                <TextInput
                    style={styles.input}
                    placeholder="Titre"
                    value={title}
                    onChangeText={setTitle}
                />
                <TextInput
                    style={styles.input}
                    placeholder="Chapitre"
                    value={chapitre}
                    keyboardType="numeric"
                    onChangeText={setChapitre}
                />
                <TouchableOpacity
                    style={styles.button}
                    onPress={handleInsertHistoire}
                >
                    <Text style={styles.buttonText}>Ajouter</Text>
                </TouchableOpacity>
                <Text style={styles.erreur}>{erreur}</Text>
            </View>
        </View>
    );
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        padding: 20,
        justifyContent: 'center'
    },
    title: {
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
    chapitre: {
        fontSize: 16,
        textAlign: 'center'
    }
});
export default Add_Histoire;