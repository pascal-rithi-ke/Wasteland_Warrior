import React from 'react';
import { View, TouchableOpacity, Text, StyleSheet, Image, ImageBackground } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { useState, useEffect } from 'react';

import axios from 'axios';

function HomeScreen({ route }) {
  const { email, username, statut } = route.params || {};

  const navigation = useNavigation();

  return (
    <View style={styles.containerStart}>
      <ImageBackground source={require('../assets/fond.png')} resizeMode="cover" style={styles.background}>
        <Text style={styles.title}>Wasteland Warrior</Text>

        {email && username && (
          <TouchableOpacity style={styles.btnStart} onPress={() => navigation.navigate('Synopsis')}>
            <Text style={styles.text}>Jouer</Text>
          </TouchableOpacity>
        )}

        {email && username && (
          <TouchableOpacity style={styles.btnStart} onPress={() => navigation.navigate('ContinueGame')}>
            <Text style={styles.text}>Reprendre la partie</Text>
          </TouchableOpacity>
        )}

        <TouchableOpacity style={styles.btnStart} onPress={() => navigation.navigate('Règles')}>
          <Text style={styles.text}>Règles</Text>
        </TouchableOpacity>

        {!email && !username && (
        <TouchableOpacity style={styles.btnStart} onPress={() => navigation.navigate('Inscription')}>
          <Text style={styles.text}>S'inscrire</Text>
        </TouchableOpacity>
        )}

        {email && username && (
          <TouchableOpacity style={styles.btnStart} onPress={() => navigation.navigate('Suppression Utilisateur')}>
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
    fontSize: 9,
    fontWeight: 'bold',
    fontFamily: 'monospace',
  },
});

export default HomeScreen;
