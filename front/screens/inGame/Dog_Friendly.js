import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';

const Dog_Friendly = ({ navigation }) => {
  const handleNext = () => {
    navigation.navigate('Fourth_Choice');
  };

  return (
    <View style={styles.container}>
      <Image source={require('../../assets/game/Avec_Chien.png')} style={styles.image} />
      <Text style={styles.messageText}>
        Le meilleur ami de l'homme est maintenant à vos côtés !
      </Text>
      <TouchableOpacity style={styles.nextButton} onPress={handleNext}>
        <Text style={styles.buttonText}>Suivant</Text>
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
  messageText: {
    fontSize: 18,
    textAlign: 'center',
    marginBottom: 20,
    color: '#FFFFFF'
  },
  nextButton: {
    backgroundColor: '#FFFFFF',
    borderRadius: 10,
    padding: 10,
    width: '50%',
    alignItems: 'center',
  },
  buttonText: {
    fontSize: 16,
  },
});

export default Dog_Friendly;
