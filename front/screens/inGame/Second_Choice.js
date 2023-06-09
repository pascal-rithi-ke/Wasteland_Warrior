import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';

const Second_Choice = () => {
  return (
    <View style={styles.container}>
      <Image source={require('../../assets/game/Gas_Station.png')} style={styles.image} />
      <Text style={styles.storyText}>
        Vous continuez votre chemin et arrivez à une station-service abandonnée. Soudain, vous entendez un bruit provenant de l'intérieur du bâtiment. Que décidez-vous de faire ?
      </Text>
      <Text style={styles.choiceText}>
        1er choix: Vous vous approchez discrètement pour investiguer le bruit.
      </Text>
      <Text style={styles.choiceText}>
        2e choix: Vous décidez de contourner la station-service et poursuivre votre route.
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
});

export default Second_Choice;
