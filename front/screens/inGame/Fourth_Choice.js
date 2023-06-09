import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';

const Fourth_Choice = ({ handleChoice1, handleChoice2, handleChoice3 }) => {
  return (
    <View style={styles.container}>
      <Image source={require('../../assets/game/menacing_bandits.png')} style={styles.image} />
      <Text style={styles.storyText}>
        4ème choix : Jeu de main jeu de vilain
      </Text>
      <Text style={styles.choiceText}>
        Vous traversez le centre-ville et vous apercevez deux personnes peu recommandables. Vous essayez de vous cacher, mais en vain, vous êtes repéré et vous vous retrouvez maintenant face à eux.
      </Text>
      <TouchableOpacity style={styles.choiceCard} onPress={handleChoice1}>
        <Text style={styles.choiceOption}>
          1: Les attaquer
          -3 de santé
        </Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.choiceCard} onPress={handleChoice2}>
        <Text style={styles.choiceOption}>
          2: Tenter de les raisonner (nécessite 5 de charisme)
        </Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.choiceCard} onPress={handleChoice3}>
        <Text style={styles.choiceOption}>
          3: Attaquer avec votre compagnon à 4 pattes
          +2 de force
          +Récupérer la clé
        </Text>
      </TouchableOpacity>
      <Text style={styles.gameOverText}>
        Si vous êtes vivant après le premier choix : "Vous êtes salement amoché, vous pensiez vraiment réussir quelque chose ?"
      </Text>
      <Text style={styles.gameOverText}>
        Si vous mourrez après le premier choix : "L'un des bandits vous a poignardé, vous voyez la lumière au bout du tunnel... GAME OVER !"
      </Text>
      <Text style={styles.gameOverText}>
        Si vous échouez dans le deuxième choix : "Ils vous tabassent, même résultat que pour le premier choix."
      </Text>
      <Text style={styles.successText}>
        Si vous réussissez dans le deuxième choix : "Vous repartez sain et sauf !"
      </Text>
      <Text style={styles.successText}>
        Si vous choisissez le troisième choix : "Heureusement que le meilleur ami de l'homme était là pour vous !"
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
  successText: {
    fontSize: 14,
    color: '#FFFFFF',
    marginTop: 10,
    textAlign: 'center',
  },
});

export default Fourth_Choice;
