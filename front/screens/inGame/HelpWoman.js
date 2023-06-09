import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';

const HelpWoman = ({ navigation }) => {

    const handleNext = () => {
        navigation.navigate('Sixth_Choice');
    };

    const handleNextGO = () => {
        navigation.navigate('GameOver');
    };

    let sante = 4; // points de santé à récupérer
    sante = sante - 3; // retirer 3 points
    // retirer le chien

    if (sante <= 0 ) {
        return (
            <View style={styles.container}>
                <Image source={require('../../assets/game/Rencontre_Fille.png')} style={styles.image} />
                <Text style={styles.messageText}>
                    C'était un piège ! Elle n'a rien de cassé et elle est accompagnée de son ami, vous prenant tout sur votre passage et tuant votre chien !
                </Text>
                <Text style={styles.messageText}>
                    Vous perdez vos 3 derniers points de santé...
                </Text>
                <Text style={styles.messageText}>
                    La confiance vous laisse un goût amer, l'addition est salée pour vous !
                </Text>
                <TouchableOpacity style={styles.nextButton} onPress={handleNextGO}>
                    <Text style={styles.buttonText}>Suivant</Text>
                </TouchableOpacity>
            </View>
        );
    } else {
        return (
            <View style={styles.container}>
                <Image source={require('../../assets/game/Rencontre_Fille.png')} style={styles.image} />
                <Text style={styles.messageText}>
                    C'était un piège ! Elle n'a rien de cassé et elle est accompagnée de son ami, vous prenant tout sur votre passage et tuant votre chien !
                </Text>
                <Text style={styles.messageText}>
                    Vous perdez 3 points de santé.
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

export default HelpWoman;
