import {View, Text, StyleSheet, TouchableOpacity, TextInput, ScrollView} from "react-native";
import axios from "axios";

import {useState, useEffect} from "react";

import { useNavigation } from '@react-navigation/native';

function GetAllHistoire(){
    const navigation = useNavigation();

    const [data, setData] = useState([]);
    const [erreur, setErreur] = useState('');

    useEffect(() => {
        axios.get('https://5467-130-180-217-66.ngrok-free.app/getAllHistoire')
            .then((response) => {
                setData(response.data.results);
            })
            .catch((error) => {
                setErreur(error.message);
            });
    }, []);
    
    const redirectToHistoire = (id) => {
        navigation.navigate('GetHistoire', {_id: id});
    }

    return(
        <View style={styles.GetAllHistoire}>
            <Text style={styles.titreScreen}>Liste des histoires</Text>
            {erreur ? <Text style={{color: 'red'}}>{erreur}</Text> : null}
            <View style={styles.histoire_container}>
                <ScrollView>
                    {data.map((item) => (
                        <TouchableOpacity key={item._id} style={styles.item} onPress={() => redirectToHistoire(item._id)}>
                            <Text style={styles.title}>{item.title}</Text>
                            <Text style={styles.chapitre}>Chapitre : {item.chapitre}</Text>
                        </TouchableOpacity>
                    ))}
                </ScrollView>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    GetAllHistoire: {
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
    histoire_container: {
        flex: 1,
        padding: 20
    },
    item: {
        marginBottom: 20,
        padding: 20,
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