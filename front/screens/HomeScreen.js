import React from 'react';
import { View, TouchableOpacity, Text, StyleSheet, Alert, ImageBackground } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { useState, useEffect } from 'react';

import axios from 'axios';

function HomeScreen({ route }) {
  const { email, username, statut } = route.params || {};
  const [user, setUser] = useState({});
  const [errorMessage, setErrorMessage] = useState('');
  const navigation = useNavigation();

  const handleDeleteAccount = async () => {
    if (statut === 'player') {
      try {
        const searchUser = await axios.get(`https://5467-130-180-217-66.ngrok-free.app/SearchUser/${email}/${username}`);
        const user = searchUser.data.results; 
        if(user){
          Alert.alert(
            'Suppression du compte',
            'Êtes-vous sûr de vouloir supprimer votre compte ?',
            [
              {
                text: "Annuler",
                onPress: () => console.log("Cancel Pressed"),
                style: "cancel"
              },
              {
                text: "Supprimer",
                onPress: async () => {
                  try {
                    await axios.delete(`https://5467-130-180-217-66.ngrok-free.app/DeleteUserById/${user._id}`);
                    navigation.navigate('Home');
                    setErrorMessage('');
                  } catch (error) {
                    setErrorMessage(error.message);
                  }
                }
              }
            ]
          );
        }
      } catch (error) {
        setErrorMessage(error.message);
      }
      setErrorMessage('');
    } else if (statut === 'admin') {
      setErrorMessage('Vous ne pouvez pas supprimer un compte administrateur !');
    }
  };

  return (
    <View style={styles.containerStart}>
      <ImageBackground source={require('../assets/fond.png')} resizeMode="cover" style={styles.background}>
        <Text style={styles.title}>Wasteland Warrior</Text>

        {errorMessage !== '' && (
          <Text style={styles.error}>{errorMessage}</Text>
        )}

        <TouchableOpacity style={styles.btnStart} onPress={() => navigation.navigate('Synopsis')}>
          <Text style={styles.text}>Jouer</Text>
        </TouchableOpacity>

        {/* à remettre quand tout est bon
        {email && username && (
          <TouchableOpacity style={styles.btnStart} onPress={() => navigation.navigate('Synopsis')}>
            <Text style={styles.text}>Jouer</Text>
          </TouchableOpacity>
        )}
        */}

        {email && username && (
          <TouchableOpacity style={styles.btnStart} onPress={() => navigation.navigate('ContinueGame')}>
            <Text style={styles.text}>Reprendre la partie</Text>
          </TouchableOpacity>
        )}

        <TouchableOpacity style={styles.btnStart} onPress={() => navigation.navigate('Règles')}>
          <Text style={styles.text}>Règles</Text>
        </TouchableOpacity>

        {!email && !username && (
          <TouchableOpacity style={styles.btnStart} onPress={() => navigation.navigate('Connexion')}>
            <Text style={styles.text}>Connexion</Text>
          </TouchableOpacity>
        )}

        {email && username && (
          <TouchableOpacity style={styles.btnStart} onPress={handleDeleteAccount}>
            <Text style={styles.text}>Supprimer le compte</Text>
          </TouchableOpacity>
        )}

        {statut === 'admin' && (
          <TouchableOpacity style={styles.btnStart} onPress={() => navigation.navigate('Ajouter histoire')}>
            <Text style={styles.text}>Ajouter Histoire</Text>
          </TouchableOpacity>
        )}

        {statut === 'admin' && (
          <TouchableOpacity style={styles.btnStart} onPress={() => navigation.navigate('Toutes les histoires')}>
            <Text style={styles.text}>Toutes les histoires</Text>
          </TouchableOpacity>
        )}

        {email && <Text style={styles.text}>Email: {email}</Text>}
        {username && <Text style={styles.text}>Username: {username}</Text>}
        {statut && <Text style={styles.text}>Statut: {statut}</Text>}
      </ImageBackground>
    </View>
  );
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    resizeMode: 'center',
    justifyContent: 'center',
    padding: 16,
    alignSelf: 'stretch',
  },
  title: {
    fontSize: 38,
    fontWeight: 'bold',
    color: '#14f819',
    marginBottom: 10,
    fontFamily: 'monospace',
    textAlign: 'center',
    marginBottom: 20,
  },
  containerStart: {
    alignItems: 'center',
    backgroundColor: '#fff',
    flex: 1,
    justifyContent: 'center',
    padding: 0,
    alignSelf: 'stretch',
  },
  btnStart: {
    backgroundColor: '#0e8210',
    borderRadius: 30,
    borderColor: '#14f819',
    borderWidth: 3,
    fontWeight: 'bold',
    padding: 15,
    textAlign: 'center',
    justifyContent: 'center',
    alignItems: 'center',
    fontFamily: 'monospace',
    width: 250,
    marginBottom: 20,
  },
  text: {
    color: '#fff',
    fontSize: 20,
    fontWeight: 'bold',
    fontFamily: 'monospace',
  },
});

export default HomeScreen;
