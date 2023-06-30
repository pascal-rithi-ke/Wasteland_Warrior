import React from 'react';
import { View, Image, TouchableOpacity, Text, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const Choix_Hero = ({route}) => {
  const {_id, email, username, statut} = route.params || {};

  const navigation = useNavigation();

  const selectHero = (hero) => {
    if(hero === 'homme') {
      hero = 'male';
    }
    if(hero === 'femme') {
      hero = 'female';
    }
    navigation.navigate('Caracteristiques', {_id, hero, email, username, statut});
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Choisissez votre avatar</Text>
      <TouchableOpacity onPress={() => selectHero('homme')}>
        <View style={styles.heroContainer}>
          <Image source={require('../../assets/game/avatar_homme.png')} style={styles.heroImage} />
          <Text style={styles.heroText}>Homme</Text>
        </View>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => selectHero('femme')}>
        <View style={styles.heroContainer}>
          <Image source={require('../../assets/game/avatar_femme.png')} style={styles.heroImage} />
          <Text style={styles.heroText}>Femme</Text>
        </View>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.8)'
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#14f819',
    marginBottom: 10,
    fontFamily: 'monospace',
    textAlign: 'center',
  },
  heroContainer: {
    alignItems: 'center',
    marginBottom: 20,
  },
  heroImage: {
    width: 200,
    height: 200,
    marginBottom: 10,
  },
  heroText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#FFFFFF',
  },
});

export default Choix_Hero;
