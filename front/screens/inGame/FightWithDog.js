import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';

const FightWithDog = ({ navigation }) => {
    
    const handleNext = () => {
        navigation.navigate('Fifth_Choice');
    };

    // Ajouter 2pts de force
    return (
        <View style={styles.container}>
            <Image source={require('../../assets/game/menacing_bandits.png')} style={styles.image} />
            <Text style={styles.messageText}>
                Vous passez à tabac les bandits avec votre compagnon.
                Heureusement que le meilleur ami de l'homme était là pour vous !
            </Text>
            <Text style={styles.messageText}>
                Vous gagnez 2 points de force
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

export default FightWithDog;
