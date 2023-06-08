import React, { useState } from 'react';
import { View, TextInput, TouchableOpacity, Text, StyleSheet } from 'react-native';
import axios from 'axios';
import { useNavigation } from '@react-navigation/native';

const SignupForm = () => {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const [erreur, setErreur] = useState('');

  const navigation = useNavigation();

  const handleSignup = async () => {
    try {
      if(username == '' || email == '' || password == ''){
        setErreur('Veuillez remplir tous les champs !');
        return;
      }
      else if(password.length < 8){
        setErreur('Le mot de passe doit contenir au moins 8 caractères !');
        return;
      }
      else if(!email.includes('@')){
        setErreur('Veuillez entrer une adresse email valide !');
        return;
      }
      else{
        const response = await axios.post('https://5467-130-180-217-66.ngrok-free.app/InsertUser', {
          username,
          email,
          password,
          statut: 'user'
        });
        navigation.navigate('Home');
      }
    } catch (error) {
      setErreur(error.message);
    }
  };

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder="Nom d'utilisateur"
        value={username}
        onChangeText={setUsername}
      />
      <TextInput
        style={styles.input}
        placeholder="Email"
        value={email}
        onChangeText={setEmail}
        keyboardType="email-address"
      />
      <TextInput
        style={styles.input}
        placeholder="Mot de passe"
        value={password}
        onChangeText={setPassword}
        secureTextEntry
      />
      <TouchableOpacity style={styles.button} onPress={handleSignup}>
        <Text style={styles.buttonText}>S'inscrire</Text>
      </TouchableOpacity>
      {erreur ? <Text style={{ color: 'red' }}>{erreur}</Text> : null}
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
});

export default SignupForm;
