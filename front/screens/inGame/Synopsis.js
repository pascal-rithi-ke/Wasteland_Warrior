import React from 'react';
import { View, Text, StyleSheet, ImageBackground, TouchableOpacity } from 'react-native';

const Synopsis = ({ route, navigation }) => {
  const { _id} = route.params || {};

  const handleNext = () => {
    navigation.navigate('Choix_Hero', {_id});
  };

  return (
      <View style={styles.container}>
        <ImageBackground source={require('../../assets/fond.png')} resizeMode="cover" style={styles.background}>
          <Text style={styles.title}>Synopsis du jeu</Text>
          <Text style={styles.description}>
            Vous êtes l'un des rares survivants d'une guerre nucléaire dévastatrice qui a plongé le monde dans le chaos. Alors que la civilisation s'effondre, vous émergez de votre abri souterrain dans une ville en ruines, à la recherche de nourriture et de ressources. Votre mission est de survivre dans ce monde post-apocalyptique hostile en prenant des décisions cruciales et en affrontant des défis mortels.
          </Text>
          <TouchableOpacity style={styles.button} onPress={handleNext}>
            <Text style={styles.buttonText}>Suivant</Text>
          </TouchableOpacity>
        </ImageBackground>
      </View>
  );
};

const styles = StyleSheet.create({
  background: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    resizeMode: 'center',
    justifyContent: 'center',
    padding: 16,
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.8)',
    padding: 0,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#14f819',
    marginBottom: 10,
    fontFamily: 'monospace',
    textAlign: 'center',
  },
  description: {
    fontSize: 16,
    lineHeight: 24,
    color: '#FFFFFF',
    textAlign: 'center',
    marginBottom: 16,
    paddingLeft: 30,
    paddingRight: 30,
  },
  button: {
    borderRadius: 30,
    paddingVertical: 12,
    paddingHorizontal: 24,
    backgroundColor: '#0e8210',
    color: '#FFFFFF',
    borderColor: '#14f819',
    borderWidth: 3,
  },
  buttonText: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#FFF',
    fontFamily: 'monospace',
  },
});

export default Synopsis;
