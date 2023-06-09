import {View, Text, StyleSheet, TouchableOpacity, ScrollView} from "react-native";
import axios from "axios";

import {useState, useEffect} from "react";

import { useNavigation } from '@react-navigation/native';

function GetAllHistoire(){
    const navigation = useNavigation();

    const [data, setData] = useState([]);
    const [erreur, setErreur] = useState('');

    useEffect(() => {
        axios.get('http://10.0.0.3:80/getAllHistoire')
            .then((response) => {
                setData(response.data.results);
            })
            .catch((error) => {
                setErreur(error.message);
            });
    }, []);
    
    const redirectToHistoire = (id) => {
        navigation.navigate('Histoire', {_id: id});
    }

    return(
        <View style={styles.GetAllHistoire}>
            <Text style={styles.titreScreen}>Liste des histoires</Text>
            {erreur ? <Text style={{color: 'red'}}>{erreur}</Text> : null}

            <View style={styles.histoire_container}>
                <ScrollView>
                    {data.map((item) => (
                        <View key={item._id} style={styles.box_container}>
                            <TouchableOpacity style={styles.item} onPress={() => redirectToHistoire(item._id)}>
                                <Text style={styles.title}>{item.title}</Text>
                                <Text style={styles.chapitre}>Chapitre : {item.chapitre}</Text>
                            </TouchableOpacity>
                        </View>
                    ))}
                </ScrollView>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    GetAllHistoire: {
        flex: 1,
        justifyContent: 'center',
        paddingHorizontal: 20,
        backgroundColor: 'rgba(0, 0, 0, 0.8)'
    },
    titreScreen: {
        fontSize: 30,
        fontWeight: 'bold',
        textAlign: 'center',
        marginBottom: 20,
        marginTop: 20,
        color: '#14f819',
        fontFamily: 'monospace',
    },
    histoire_container: {
        flex: 1,
        padding: 20
    },
    box_container: {
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: 20
    },
    item: {
        marginBottom: 20,
        padding: 20,
        width: '100%',
        borderWidth: 1,
        borderColor: '#ccc',
        borderRadius: 10,
        backgroundColor: '#f8f8f8'
    },
    title: {
        fontSize: 20,
        fontWeight: 'bold',
        marginBottom: 10
    },
    chapitre: {
        fontSize: 15,
        fontWeight: 'bold',
        marginBottom: 10
    }
});
export default GetAllHistoire;