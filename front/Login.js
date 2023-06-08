import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';
import axios from 'axios';

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [message, setMessage] = useState('');

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

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Connexion</Text>
      <TextInput
        style={styles.input}
        placeholder="Nom d'utilisateur"
        value={username}
        onChangeText={setUsername}
      />
      <TextInput
        style={styles.input}
        placeholder="Mot de passe"
        secureTextEntry
        value={password}
        onChangeText={setPassword}
      />
      <Button title="Se connecter" onPress={handleLogin} />
      {message && <Text style={styles.errorMessage}>{message}</Text>}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 16,
  },
  title: {
    fontSize: 24,
    marginBottom: 16,
  },
  input: {
    width: '100%',
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 12,
    paddingLeft: 8,
  },
  errorMessage: {
    color: 'red',
    marginTop: 12,
  },
});

export default Login;
