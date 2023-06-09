import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';

const Start_Game = ({ navigation }) => {
  const handleChoice1 = () => {
    // Logique pour le choix 1
    navigation.navigate('Second_Choice');
  };

  const handleChoice2 = () => {
    // Logique pour le choix 2
    navigation.navigate('Second_Choice');
  };

  return (
    <View style={styles.container}>
      <Image source={require('../../assets/game/Quitte_Abri.png')} style={styles.image} />
      <Text style={styles.storyText}>
        Votre héros sort de son abri antiatomique à la suite d'une guerre nucléaire en 2077. Votre mission sera d'aller chercher de la nourriture dans le dernier centre commercial de votre ville et de la ramener à votre abri.
      </Text>
      <Text style={styles.choiceText}>
        1er choix: En route vers l'inconnu
      </Text>
      <Text style={styles.choiceText}>
        Vous sortez de votre abri :
      </Text>
      <TouchableOpacity style={styles.choiceCard} onPress={handleChoice1}>
        <Text style={styles.choiceOption}>
          1: Vous prenez votre pioche avec vous, on ne sait jamais...
          -1 point d'endurance.
        </Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.choiceCard} onPress={handleChoice2}>
        <Text style={styles.choiceOption}>
          2: Vous aimez voyager léger !
        </Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 20,
    backgroundColor: 'rgba(0, 0, 0, 0.8)'
  },
  image: {
    width: 200,
    height: 200,
    marginBottom: 20,
  },
  storyText: {
    fontSize: 18,
    textAlign: 'center',
    marginBottom: 20,
    color: '#FFFFFF'
  },
  choiceText: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
    color: '#FFFFFF'
  },
  choiceCard: {
    backgroundColor: '#FFFFFF',
    borderRadius: 10,
    padding: 10,
    marginVertical: 5,
    width: '100%',
  },
  choiceOption: {
    fontSize: 16,
    marginBottom: 10,
  },
});

export default Start_Game;
