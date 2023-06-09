import React from 'react';
import { View, Text, StyleSheet, Image, ImageBackground } from 'react-native';
import { useNavigation } from '@react-navigation/native';


function HomeScreen() {
  const navigation = useNavigation();

  return (
    <View style={styles.containerStart}>
      <ImageBackground source={require('../assets/fond.png')} resizeMode="cover" style={styles.background}>
        <Text style={styles.title}>Wasteland Warrior</Text>
        <Text style={styles.btnStart} onPress={() => navigation.navigate('Synopsis')}>Jouer</Text>
        <Text style={styles.btnStart} onPress={() => navigation.navigate('ContinueGame')}>Reprendre la partie</Text>
        <Text style={styles.btnStart} onPress={() => navigation.navigate('Regles')}>Règles</Text>
        <Text style={styles.btnStart} onPress={() => navigation.navigate('Create_User')}>S'inscrire</Text>
        <Text style={styles.btnStart} onPress={() => navigation.navigate('Delete_User')}>Supprimer le compte</Text>
        <Text style={styles.btnStart} onPress={() => navigation.navigate('Login')}>Se connecter</Text>
        <Text>-------- PASCAL --------</Text>
        <Text style={styles.btnStart} onPress={() => navigation.navigate('Add_Histoire')}>Add_Histoire</Text>
        <Text style={styles.btnStart} onPress={() => navigation.navigate('Update_Histoire')}>Update_Histoire</Text>
        <Text style={styles.btnStart} onPress={() => navigation.navigate('GetAllHistoire')}>GetAllHistoire</Text>
        <Text>------------------------</Text>
      </ImageBackground>
    </View>
  );
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    resizeMode: 'center',
    justifyContent: 'center',
    padding: 16,
    alignSelf: 'stretch',
  },
  title: {
    fontSize: 38,
    fontWeight: 'bold',
    color: '#14f819',
    marginBottom: 10,
    fontFamily: 'monospace',
    textAlign: 'center',
    marginBottom: 20,
  },
  containerStart: {
    alignItems: 'center',
    backgroundColor: '#fff',
    flex: 1,
    justifyContent: 'center',
    padding: 0,
    alignSelf: 'stretch',
  },
  btnStart: {
    backgroundColor: '#0e8210',
    borderRadius: 30,
    color: '#FFFFFF',
    borderColor: '#14f819',
    borderWidth: 3,
    fontSize: 9,
    fontWeight: 'bold',
    padding: 15,
    textAlign: 'center',
    fontFamily: 'monospace',
    width: 250,
    marginBottom: 20,
  },
});

export default HomeScreen;
