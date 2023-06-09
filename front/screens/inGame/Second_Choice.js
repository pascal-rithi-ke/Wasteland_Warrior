import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';

const Second_Choice = ({ navigation }) => {
  const handleChoice1 = () => {
    // Logique pour le premier choix
    navigation.navigate('Third_Choice');
  };

  const handleChoice2 = () => {
    // Logique pour le deuxième choix
    navigation.navigate('Fourth_Choice');
  };

  return (
    <View style={styles.container}>
      <Image source={require('../../assets/game/Gas_Station.png')} style={styles.image} />
      <Text style={styles.storyText}>
        Vous continuez votre chemin et arrivez à une station-service abandonnée. Soudain, vous entendez un bruit provenant de l'intérieur du bâtiment. Que décidez-vous de faire ?
      </Text>
      <TouchableOpacity style={styles.choiceCard} onPress={handleChoice1}>
        <Text style={styles.choiceOption}>
          1er choix: Vous vous approchez discrètement pour investiguer le bruit.
        </Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.choiceCard} onPress={handleChoice2}>
        <Text style={styles.choiceOption}>
          2e choix: Vous décidez de contourner la station-service et poursuivre votre route.
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

export default Second_Choice;
