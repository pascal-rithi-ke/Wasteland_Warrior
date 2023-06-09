import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const Fifth_Choice = ({ handleChoice1, handleChoice2 }) => {

  const navigation = useNavigation();

  const handleChoice1Press = () => {
    // Logic for choice 1
    navigation.navigate('HelpWoman');
  };

  const handleChoice2Press = () => {
    // Logic for choice 2
    navigation.navigate('Sixth_Choice');
  };

  return (
    <View style={styles.container}>
      <Image source={require('../../assets/game/Rencontre_Fille.png')} style={styles.image} />
      <Text style={styles.storyText}>5ème choix : La belle ou la bête ?</Text>
      <Text style={styles.choiceText}>
        Vous arrivez sur le parking du centre commercial et vous y croisez une charmante femme en détresse avec la cheville cassée dans la cage d'escalier qui vous supplie de l'aider.
      </Text>
      <TouchableOpacity style={styles.choiceCard} onPress={handleChoice1Press}>
        <Text style={styles.choiceOption}>
          1: L'aider
        </Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.choiceCard} onPress={handleChoice2Press}>
        <Text style={styles.choiceOption}>2: Prétexter lui rapporter une attelle du centre commercial</Text>
      </TouchableOpacity>
      <Text style={styles.gameOverText}>
        Si vous mourrez après le premier choix : "La confiance vous laisse un goût amer, l'addition est salée pour vous ! GAME OVER"
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
  gameOverText: {
    fontSize: 14,
    color: '#FFFFFF',
    marginTop: 10,
    textAlign: 'center',
  },
});

export default Fifth_Choice;
