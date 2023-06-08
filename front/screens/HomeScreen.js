import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';


function HomeScreen() {
  const navigation = useNavigation();

  return (
    <View style={styles.containerStart}>
      <Text style={styles.btnStart} onPress={() => navigation.navigate('Synopsis')}>Joueur</Text>
      <Text style={styles.btnStart} onPress={() => navigation.navigate('ContinueGame')}>Reprendre la partie</Text>
      <Text style={styles.btnStart} onPress={() => navigation.navigate('Regles')}>Règles</Text>
      <Text style={styles.btnStart} onPress={() => navigation.navigate('Create_User')}>S'inscrire</Text>
      <Text style={styles.btnStart} onPress={() => navigation.navigate('GameOver')}>Game Over</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  containerStart: {
    alignItems: 'center',
    backgroundColor: '#fff',
    flex: 1,
    justifyContent: 'center',
  },
  btnStart: {
    backgroundColor: '#000',
    borderRadius: 30,
    color: '#FFFFFF',
    fontSize: 20,
    fontWeight: 'bold',
    padding: 15,
    textAlign: 'center',
    width: 250,
    marginBottom: 20,
  },
});

export default HomeScreen;
