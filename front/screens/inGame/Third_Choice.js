import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';

const Third_Choice = ({ navigation }) => {
  const handleChoice1 = () => {
    // Logique pour le choix 1
    navigation.navigate('FightDog');
  };

  const handleChoice2 = () => {
    navigation.navigate('Dog_Friendly');
  };

  return (
    <View style={styles.container}>
      <Image source={require('../../assets/game/Rencontre_Chien.png')} style={styles.image} />
      <Text style={styles.storyText}>
        3ème choix : Premières rencontres !
      </Text>
      <Text style={styles.choiceText}>
        Vous croisez un chien, oreilles dressées vers l'arrière. Que faites-vous ?
      </Text>
      <TouchableOpacity style={styles.choiceCard} onPress={handleChoice1}>
        <Text style={styles.choiceOption}>
          1: L'attaquer avec la pioche
        </Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.choiceCard} onPress={handleChoice2}>
        <Text style={styles.choiceOption}>
          2: Lui lancer votre seul paquet de bœuf séché (nécessite 4 de charisme)
        </Text>
      </TouchableOpacity>
      <Text style={styles.notEnoughCharismaText}>
        Si vous n'avez pas assez de charisme, vous vous faites mordre (-3 de santé).
      </Text>
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
  notEnoughCharismaText: {
    fontSize: 14,
    color: '#FFFFFF',
    marginTop: 10,
    textAlign: 'center',
  },
});

export default Third_Choice;
