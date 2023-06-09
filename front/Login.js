import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';
import axios from 'axios';

import { useNavigation } from '@react-navigation/native';

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [message, setMessage] = useState('');

  const navigation = useNavigation();

  const handleLogin = async () => {
    try {
      // Envoyer les données de connexion à l'API
      const response = await axios.post('https://5467-130-180-217-66.ngrok-free.app/Login', { username, password });
      const { success, message } = response.data;

      if (success) {
        // Connexion réussie, effectuer les actions nécessaires ici
        // par exemple, naviguer vers la page Home ou afficher un message de connexion réussie
      } else {
        // Afficher le message d'erreur
        setMessage(message);
      }
    } catch (error) {
      console.error(error);
      // Afficher le message d'erreur
      setMessage("Une erreur s'est produite lors de la connexion.");
    }
  };

  const handleRegister = () => {
    navigation.navigate('Inscription');
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Connexion</Text>
      {message && <Text style={styles.errorMessage}>{message}</Text>}
      <TextInput
        style={styles.input}
        placeholder="Nom d'utilisateur"
        value={username}
        onChangeText={setUsername}
      />
      <TextInput
        style={styles.input}
        placeholder="Mot de passe"
        secureTextEntry={true}
        value={password}
        onChangeText={setPassword}
      />
      <TouchableOpacity style={styles.button} onPress={handleLogin}>
        <Text style={styles.login}>Se connecter</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={handleRegister}>
        <Text style={styles.signUp}>S'inscrire</Text>
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
  login: {
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

export default Login;
