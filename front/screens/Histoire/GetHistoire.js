import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, FlatList } from 'react-native';
import axios from 'axios';

function GetHistoire({ route, navigation }) {
    const { _id } = route.params;

    const [data, setData] = useState([]);
    const [erreur, setErreur] = useState('');


    useEffect(() => {
        axios.get(`https://5467-130-180-217-66.ngrok-free.app/getHistoireById/${_id}`, {
        })
            .then((response) => {
                setData(response.data.results);
            })
            .catch((error) => {
                setErreur(error.message);
            });
    }, []);

    return (
        <View style={styles.GetHistoire}>
            <Text style={styles.titreScreen}>{data.title}</Text>
            {erreur ? <Text style={{ color: 'red' }}>{erreur}</Text> : null}
            <View>
                <FlatList
                    data={data.scenes}
                    keyExtractor={(item) => item._id}
                    renderItem={({ item }) => (
                        <View>
                            <Text style={styles.situation}>{item.text}</Text>
                            <View style={styles.choixContainer}>
                                {item.choices.map((item, index) => (
                                    <View key={index} style={styles.choixBox}>
                                        <Text style={styles.choix}>{item.text}</Text>
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
        padding: 20,
        marginTop: 20
    },
    titreScreen: {
        fontSize: 20,
        fontWeight: 'bold',
        textAlign: 'center',
        marginBottom: 20
    },
    situation: {
        fontSize: 20,
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
        height: 150
    },
    choix: {
        color: 'white',
        fontSize: 15,
    }
});
export default GetHistoire;
