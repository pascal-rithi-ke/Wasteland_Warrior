import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';

const Fight = ({ navigation }) => {
    const handleNext = () => {
        navigation.navigate('Fifth_Choice');
    };

    const handleNextGO = () => {
        navigation.navigate('GameOver');
    };

    let sante = 4; // points de santé à récupérer
    sante = sante - 3; // retirer 3 points


    if (sante <= 0 ) {
        return (
            <View style={styles.container}>
            <Image source={require('../../assets/game/menacing_bandits.png')} style={styles.image} />
            <Text style={styles.messageText}>
                L'un des bandits vous a poignardé, vous voyez la lumière au bout du tunnel...
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
                Vous êtes salement amoché, vous pensiez vraiment réussir quelque chose ?
            </Text>
            <Text style={styles.messageText}>
                Vous perdez 3 points de santé mais survivez
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

export default Fight;
