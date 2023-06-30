import React from 'react';
import { View, TouchableOpacity, Text, StyleSheet, Alert, ImageBackground } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { useState, useEffect } from 'react';

import axios from 'axios';

function HomeScreen({ route }) {
  const { email, username, statut, _id, historique_partie} = route.params || {};

  const [historiquePartie, setHistoriquePartie] = useState({});
  useEffect(() => {
    if (historique_partie && Object.keys(historique_partie).length !== 0) {
      setHistoriquePartie(historique_partie);
    }
  }, [historique_partie]);

  let [user, setUser] = useState({});
  const [errorMessage, setErrorMessage] = useState('');
  const navigation = useNavigation();

  const handleDeleteAccount = async () => {
    if (statut == 'player') {
      try {
        const searchUser = await axios.get(`http://10.0.0.3:80/SearchUser/${email}/${username}`);
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
                    await axios.delete(`http://10.0.0.3:80/DeleteUserById/${user._id}`);
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
    } else if (user.statut === 'admin') {
      setErrorMessage('Vous ne pouvez pas supprimer un compte administrateur !');
    }
  };

  const handleGameAbandon = async () => {
    Alert.alert(
      'Abandon de la partie',
      'Êtes-vous sûr de vouloir abandonner la partie ?',
      [
        {
          text: "Annuler",
          onPress: () => console.log("Cancel Pressed"),
          style: "cancel"
        },
        {
          text: "Abandonner",
          onPress: async() => {
            try {
              await axios.put(`http://10.0.0.3:80/updateUserPartie/${_id}`, {id_user: _id, id_partie: historique_partie._id, game_statut: "terminée"});
              setHistoriquePartie(null); // Mise à jour de l'état de historique_partie
              setErrorMessage('');
            } catch (error) {
              setErrorMessage(error.message);
            }
          }
        }
      ]
    );
  };

  const handleLogout = () => {
    navigation.navigate('Home');
    setUser({});
    setErrorMessage('');
  };

  return (
    <View style={styles.containerStart}>
      <ImageBackground source={require('../assets/fond.png')} resizeMode="cover" style={styles.background}>
        <Text style={styles.title}>Wasteland Warrior</Text>

        {errorMessage !== '' && (
          <Text style={styles.error}>{errorMessage}</Text>
        )}

        {statut === "player" && (!historiquePartie || Object.keys(historiquePartie).length === 0) && (
          <TouchableOpacity style={styles.btnStart} onPress={() => navigation.navigate('Synopsis', {_id, email, username, statut})}>
            <Text style={styles.text}>Commencer</Text>
          </TouchableOpacity>
        )}

        {statut === "player" && historiquePartie && Object.keys(historiquePartie).length !== 0 && (
        <>
          <TouchableOpacity style={styles.btnStart} onPress={() => navigation.navigate('GameMaps', {id_user: _id, hero: historique_partie.hero, email, username, statut, id_partie: historique_partie._id, game_statut: historique_partie.game_statut, force: historique_partie.characteristics.force, charisme: historique_partie.characteristics.charisme, endurance: historique_partie.characteristics.endurance, sante: historique_partie.characteristics.sante})}>
            <Text style={styles.text}>Continuer la partie</Text>
          </TouchableOpacity>
          
          <TouchableOpacity style={styles.btnStart} onPress={handleGameAbandon}>
            <Text style={styles.text}>Abandonner la partie</Text>
          </TouchableOpacity>
        </>
        )}

        <TouchableOpacity style={styles.btnStart} onPress={() => navigation.navigate('Règles')}>
          <Text style={styles.text}>Règles</Text>
        </TouchableOpacity>

        {!email && !username && (
          <TouchableOpacity style={styles.btnStart} onPress={() => navigation.navigate('Connexion')}>
            <Text style={styles.text}>Connexion</Text>
          </TouchableOpacity>
        )}

          {statut === 'player' && (
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


        {email && username && statut && (
        <>
          <TouchableOpacity style={styles.btnStart} onPress={handleLogout}>
            <Text style={styles.text}>Déconnexion</Text>
          </TouchableOpacity>
          <View style={styles.userContainer_info}>
            {username && <Text style={styles.text}>Username: {username}</Text>}
            {email && <Text style={styles.text}>Email: {email}</Text>}
            {statut && <Text style={styles.text}>Statut: {statut}</Text>}
          </View>
        </>
        )}
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
  styleTempo_a_delete: {
    fontSize: 20,
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
    textAlign: 'center',
  },
  error: {
    color: '#f00',
    fontSize: 20,
    fontWeight: 'bold',
    fontFamily: 'monospace',
    marginBottom: 20,
  },
  userContainer_info: {
    alignItems: 'flex-start',
    backgroundColor: 'black',
    opacity: 0.5,
    padding: 10,
  },
});

export default HomeScreen;
