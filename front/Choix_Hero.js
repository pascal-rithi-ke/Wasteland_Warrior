import React from 'react';
import { View, Image, TouchableOpacity, Text, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const avatar_homme = require('./avatar_homme.png');
const avatar_femme = require('./avatar_femme.png');

const Choix_Hero = () => {
  const navigation = useNavigation();

  const selectHero = (hero) => {
    navigation.navigate('Caracteristiques', { hero });
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={() => selectHero('homme')}>
        <View style={styles.heroContainer}>
          <Image source={require('./avatar_homme.png')} style={styles.heroImage} />
          <Text style={styles.heroText}>Homme</Text>
        </View>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => selectHero('femme')}>
        <View style={styles.heroContainer}>
          <Image source={require('./avatar_femme.png')} style={styles.heroImage} />
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
