import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';

const Epilogue_Win = () => {
  return (
    <View style={styles.container}>
      <Image source={require('../../assets/game/Happy_Ending.png')} style={styles.image} />
      <Text style={styles.storyText}>
        Félicitations, vous avez réussi à rentrer en bon et dû forme ! Vous avez également sauvé votre compagnon d'une mort certaine !
      </Text>
      <Text style={styles.finalText}>
        Une chose est sûre, votre aventure ne s'arrête pas là...
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
  finalText: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#FFFFFF'
  },
});

export default Epilogue_Win;
