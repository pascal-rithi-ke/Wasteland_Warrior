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
            const response = await axios.post('http://10.0.0.3/addHistoire', {
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
                    placeholderTextColor={'white'}
                    value={title}
                    onChangeText={setTitle}
                />
                <TextInput
                    style={styles.input}
                    placeholder="Chapitre"
                    placeholderTextColor={'white'}
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
      color: '#fff',
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
    item: {
        marginBottom: 20,
        padding: 10
    },
    chapitre: {
        fontSize: 16,
        textAlign: 'center'
    }
});
export default Add_Histoire;