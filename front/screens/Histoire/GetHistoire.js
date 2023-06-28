import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, FlatList, TouchableOpacity, Alert, Button } from 'react-native';
import axios from 'axios';

function GetHistoire({ route, navigation }) {
    const { _id } = route.params;

    const [data, setData] = useState([]);
    const [erreur, setErreur] = useState('');


    useEffect(() => {
        axios.get(`http://192.168.1.25/getHistoireById/${_id}`, {
        })
            .then((response) => {
                setData(response.data.results);
            })
            .catch((error) => {
                setErreur(error.message);
            });
    }, []);

    const handleDelete = () => {
        Alert.alert(
            "Supprimer l'histoire",
            "Êtes-vous sûr de vouloir supprimer cette histoire ?",
            [
                {
                    text: "Supprimer",
                    onPress: () => {
                        axios.delete(`http://192.168.1.25/deleteHistoireById/${_id}`, {
                        })
                            .then((response) => {
                                setData(response.data.results);
                                navigation.navigate('Toutes les histoires');
                            })
                            .catch((error) => {
                                setErreur(error.message);
                            });
                    },
                    style: "destructive"
                },
                {
                    text: "Annuler",
                    onPress: () => console.log("Cancel Pressed"),
                    style: "cancel"
                }
            ]
        );
    }

    const handleUpdate = () => {
        navigation.navigate("Modifier l'histoire", { _id: _id });
    }

    return (
        <View style={styles.GetHistoire}>
            <Text style={styles.titreScreen}>{data.title}</Text>
            <View style={styles.optionContainer}>
                <TouchableOpacity onPress={() => handleUpdate()}>
                    <Text style={styles.updateHistoire}>Modifier l'histoire</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => handleDelete()}>
                    <Text style={styles.deleteHistoire}>Supprimer l'histoire</Text>
                </TouchableOpacity>
            </View>
            {erreur ? <Text style={{ color: 'red' }}>{erreur}</Text> : null}
            <View>
                <FlatList
                    data={data.scenes}
                    keyExtractor={(item, key) => item._id + '-' + key}
                    renderItem={({ item }) => (
                        <View key={item._id}>
                            <Text style={styles.situation}>{item.text}</Text>
                            <View style={styles.choixContainer}>
                                {item.choices.map((contenu, index) => (
                                    <View key={item._id + '-' + index} style={styles.choixBox}>
                                        <Text style={styles.choix}>{contenu.text}</Text>
                                    </View>
                                ))}
                            </View>
                        </View>
                    )}
                />
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    GetHistoire: {
        flex: 1,
        padding: 50,
        marginTop: 20,
        backgroundColor: 'rgba(0, 0, 0, 0.8)'
    },
    index: {
        color: 'white',
        fontSize: 15,
    },
    titreScreen: {
        fontSize: 25,
        fontWeight: 'bold',
        textAlign: 'center',
        marginBottom: 20,
        color: 'white'
    },
    updateHistoire: {
        fontSize: 15,
        backgroundColor: 'green',
        padding: 10,
        borderRadius: 10,
        fontWeight: 'bold',
        textAlign: 'center',
        marginBottom: 20,
        color: 'white'
    },
    deleteHistoire: {
        fontSize: 15,
        backgroundColor: 'red',
        padding: 10,
        borderRadius: 10,
        fontWeight: 'bold',
        textAlign: 'center',
        marginBottom: 20,
        color: 'white'
    },
    situation: {
        fontSize: 15,
        fontWeight: 'bold',
        textAlign: 'center',
        marginBottom: 20
    },
    choixContainer: {
        flex: 1,
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'space-between',
        alignItems: 'center',
        textAlign: 'center',
        marginTop: 20
    },
    choixBox: {
        padding: 20,
        marginTop: 20,
        borderRadius: 10,
        backgroundColor: 'black',
        textAlign: 'center',
        justifyContent: 'center',
        alignItems: 'center',
        width: "45%",
        height: 150,
    },
    choix: {
        color: 'white',
        fontSize: 15,
    }
});
export default GetHistoire;