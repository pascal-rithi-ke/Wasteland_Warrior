import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';


const Synopsis = ({ navigation }) => {
  const handleNext = () => {
    navigation.navigate('Choix_Hero');
  };

  return (
          <View style={styles.container}>
        <Text style={styles.title}>Synopsis du jeu</Text>
        <Text style={styles.description}>
          Vous êtes l'un des rares survivants d'une guerre nucléaire dévastatrice qui a plongé le monde dans le chaos. Alors que la civilisation s'effondre, vous émergez de votre abri souterrain dans une ville en ruines, à la recherche de nourriture et de ressources. Votre mission est de survivre dans ce monde post-apocalyptique hostile en prenant des décisions cruciales et en affrontant des défis mortels.
        </Text>
        <TouchableOpacity style={styles.button} onPress={handleNext}>
          <Text style={styles.buttonText}>Suivant</Text>
        </TouchableOpacity>
      </View>
  );
};

const styles = StyleSheet.create({
  background: {
    flex: 1,
    resizeMode: 'cover',
    justifyContent: 'center',
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.8)',
    padding: 16,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 8,
    color: '#FFFFFF',
    textAlign: 'center',
  },
  description: {
    fontSize: 16,
    lineHeight: 24,
    color: '#FFFFFF',
    textAlign: 'center',
    marginBottom: 16,
  },
  button: {
    backgroundColor: '#FFFFFF',
    borderRadius: 30,
    paddingVertical: 12,
    paddingHorizontal: 24,
  },
  buttonText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#000000',
  },
});

export default Synopsis;
