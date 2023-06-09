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
      const response = await axios.post('https://5467-130-180-217-66.ngrok-free.app/login', {
        username,
        password,
      });
      const user = response.data.results;
      if (user) {
        navigation.navigate('Home', { user });
        setMessage('');
      }
    } catch (error) {
      setMessage(error.message);
    }
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Connexion</Text>
      {message !== '' && (
        <Text style={styles.erreur}>{message}</Text>
      )}
      <TextInput
        style={styles.input}
        placeholder="Nom d'utilisateur"
        placeholderTextColor={'white'}
        onChangeText={(value) => setUsername(value)}
        value={username}
      />
      <TextInput
        style={styles.input}
        placeholder="Mot de passe"
        placeholderTextColor={'white'}
        onChangeText={(value) => setPassword(value)}
        value={password}
        secureTextEntry={true}
      />
      <TouchableOpacity
        style={styles.button}
        onPress={handleLogin}
      >
        <Text style={styles.buttonText}>Se connecter</Text>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => navigation.navigate('SignUp')}
      >
        <Text style={styles.signUp}>Pas encore de compte ?</Text>
      </TouchableOpacity>
    </View>
  );
};

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
    color: '#fff'
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
  login: {
    color: '#fff',
    fontWeight: 'bold',
  },
  signUp: {
    color: '#FFF',
    textAlign: 'center',
    marginTop: 10,
    fontWeight: 'bold',
  },
});

export default Login;
