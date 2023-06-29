import React, { useState, useEffect } from "react";
import { View, Text, StyleSheet, TextInput, TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";

import axios from "axios";


function Update_Histoire({ route }) {
    const { _id } = route.params;

    const [title, setTitle] = useState('');
    const [chapitre, setChapitre] = useState('');
    const [erreur, setErreur] = useState('');

    const navigation = useNavigation();

    useEffect(() => {
        axios.get(`http://10.0.0.3/getHistoireById/${_id}`, {
        })
            .then((response) => {
                const { title, chapitre } = response.data.results;
                setTitle(title);
                setChapitre(chapitre.toString());
            })
            .catch((error) => {
                setErreur(error.message);
            });
    }, []);

    const handleUpdateHistoire = async () => {
        try {
            if (title === "") {
                setErreur("Veuillez remplir tous les champs !");
                return;
            } else if (title.length < 3) {
                setErreur("Le titre doit contenir au moins 3 caractères !");
                return;
            } else if (chapitre === "0") {
                setErreur("Le chapitre doit être supérieur à 0 !");
                return;
            } else {
                const response = await axios.put(
                    `http://10.0.0.3/updateHistoireById/${_id}`,
                    {
                        title,
                        chapitre,
                    }
                );
                setTitle("");
                setChapitre("");
                setErreur("");
                navigation.navigate("Toutes les histoires");
            }
        } catch (error) {
            setErreur(error.message);
        }
    };


    return (
        <View style={styles.container}>
            <Text style={styles.title}>Modifier une histoire</Text>
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
                onChangeText={setChapitre}
                keyboardType="numeric"
            />
            <TouchableOpacity
                style={styles.button}
                onPress={handleUpdateHistoire}
            >
                <Text style={styles.buttonText}>Modifier</Text>
            </TouchableOpacity>
            {erreur ? <Text style={styles.erreur}>{erreur}</Text> : null}
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#fff",
        padding: 20,
    },
    title: {
        fontSize: 20,
        fontWeight: "bold",
        marginBottom: 20,
    },
    input: {
        borderWidth: 1,
        borderColor: "#000",
        marginBottom: 20,
        padding: 10,
        fontSize: 15,
        borderRadius: 5,
    },
    button: {
        backgroundColor: "#000",
        padding: 10,
        borderRadius: 5,
    },
    buttonText: {
        color: "#fff",
        textAlign: "center",
        fontSize: 15,
        fontWeight: "bold",
    },
    erreur: {
        color: "red",
        textAlign: "center",
        marginTop: 20,
    },
});
export default Update_Histoire;