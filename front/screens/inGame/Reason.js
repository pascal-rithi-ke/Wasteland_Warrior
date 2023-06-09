import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';

const Reason = ({ navigation }) => {
    const handleNext = () => {
        navigation.navigate('Fifth_Choice');
    };

    const handleNextGO = () => {
        navigation.navigate('GameOver');
    };

    let charisme = 5; // points de charisme à récupérer

    if (charisme < 5 ) {
        return (
            <View style={styles.container}>
            <Image source={require('../../assets/game/menacing_bandits.png')} style={styles.image} />
            <Text style={styles.messageText}>
                Votre manque de charisme vous empêche de négocier avec les bandits.
            </Text>
            <Text style={styles.messageText}>
                Ils vous attaquent, vous voyez la lumière au bout du tunnel...
            </Text>
            <TouchableOpacity style={styles.nextButton} onPress={handleNextGO}>
                <Text style={styles.buttonText}>Suivant</Text>
            </TouchableOpacity>
            </View>
        );
    } else {
        return (
            <View style={styles.container}>
            <Image source={require('../../assets/game/menacing_bandits.png')} style={styles.image} />
            <Text style={styles.messageText}>
                Après une difficile négociation, les bandits acceptent de vous laisser partir sain et sauf.
            </Text>
            <TouchableOpacity style={styles.nextButton} onPress={handleNext}>
                <Text style={styles.buttonText}>Suivant</Text>
            </TouchableOpacity>
            </View>
        );
    }
  
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

export default Reason;
