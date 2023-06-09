import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';

const Epilogue_Death = () => {
  return (
    <View style={styles.container}>
      <Image source={require('../../assets/game/Bad_Ending.png')} style={styles.image} />
      <Text style={styles.storyText}>
        Visiblement, vous n'êtes pas en état de rentrer. Vous restez donc au centre commercial. Malheureusement, un groupe de bandits vous trouve et vous tue, ainsi que votre chien.
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
});

export default Epilogue_Death;
