import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const Sixth_Choice = ({ handleChoice1, handleChoice2 }) => {
  const navigation = useNavigation();

  const handleChoice1Press = () => {
    // Logic for choice 1
    navigation.navigate('Epilogue_Death');
  };

  const handleChoice2Press = () => {
    // Logic for choice 2
    navigation.navigate('Epilogue_Win');
  };

  return (
    <View style={styles.container}>
      <Image source={require('../../assets/game/ball__messy_mall.png')} style={styles.image} />
      <Text style={styles.storyText}>6ème choix: L'or comestible</Text>
      <Text style={styles.choiceText}>
        Vous voilà dans le dernier centre commercial, votre mission touche à sa fin. Sur le chemin, vous tombez sur votre magasin de foot préféré. Il leur reste un ballon et une cage. Voulez-vous tenter un penalty ?
      </Text>
      <TouchableOpacity style={styles.choiceCard} onPress={handleChoice1Press}>
        <Text style={styles.choiceOption}>
          1) Tenter
          Visiblement, ça fait une éternité que vous n'avez pas joué au foot. En tirant, vous vous êtes cassé la cheville.
          (-3 endurance)
        </Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.choiceCard} onPress={handleChoice2Press}>
        <Text style={styles.choiceOption}>
          2) Rester concentré sur les ressources
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
    backgroundColor: 'rgba(0, 0, 0, 0.8)',
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
    color: '#FFFFFF',
  },
  choiceText: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
    color: '#FFFFFF',
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

export default Sixth_Choice;
