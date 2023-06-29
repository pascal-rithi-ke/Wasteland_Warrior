import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Button } from 'react-native';
import { useNavigation } from '@react-navigation/native';

import axios from 'axios';

const Caracteristiques = ({route}) => {
  const {_id, hero} = route.params || {};

  const [force, setForce] = useState(3);
  const [charisme, setCharisme] = useState(3);
  const [endurance, setEndurance] = useState(3);
  const [sante, setSante] = useState(3);
  const [pointsRestants, setPointsRestants] = useState(5);

  const navigation = useNavigation();

  const moreForce = () => {
    if (pointsRestants > 0 && force < 6) {
      setForce((prevForce) => Math.min(prevForce + 1, 7));
      setPointsRestants((prevPoints) => prevPoints - 1);
    }
  }

  const moreCharisme = () => {
    if (pointsRestants > 0 && charisme < 6) {
      setCharisme((prevCharisme) => Math.min(prevCharisme + 1, 7));
      setPointsRestants((prevPoints) => prevPoints - 1);
    }
  }

  const moreEndurance = () => {
    if (pointsRestants > 0 && endurance < 6) {
      setEndurance((prevEndurance) => Math.min(prevEndurance + 1, 7));
      setPointsRestants((prevPoints) => prevPoints - 1);
    }
  }

  const moreSante = () => {
    if (pointsRestants > 0 && endurance < 6) {
      setSante((prevSante) => Math.min(prevSante + 1, 7));
      setPointsRestants((prevPoints) => prevPoints - 1);
    }
  }

  const lessForce = () => {
    if (force > 3) {
      setForce((prevForce) => prevForce - 1);
      setPointsRestants((prevPoints) => prevPoints + 1);
    }
  }

  const lessCharisme = () => {
    if (charisme > 3) {
      setCharisme((prevCharisme) => prevCharisme - 1);
      setPointsRestants((prevPoints) => prevPoints + 1);
    }
  }

  const lessEndurance = () => {
    if (endurance > 3) {
      setEndurance((prevEndurance) => prevEndurance - 1);
      setPointsRestants((prevPoints) => prevPoints + 1);
    }
  }

  const lessSante = () => {
    if (sante > 3) {
      setSante((prevSante) => prevSante - 1);
      setPointsRestants((prevPoints) => prevPoints + 1);
    }
  }
    
  const randomCaracteristiques = () => {

      let randForce = 0;
      let randCharisme = 0;
      let randEndurance = 0;
      let randSante = 0;
      let pointsLoop = 5

      while (pointsLoop > 0) {
        let rand = Math.floor(Math.random() * 4);
        if (rand === 0 && randForce < 3) {
            randForce++;
            pointsLoop--; 
        }
        if (rand === 1 && randCharisme < 3) {
          randCharisme++;
          pointsLoop--;
        }
        if (rand === 2 && randEndurance < 3) {
          randEndurance++;
          pointsLoop--;
        }
        if (rand === 3 && randSante < 3) {
          randSante++;
          pointsLoop--;
        }
      }
      
      setForce(3 + randForce);
      setCharisme(3 + randCharisme);
      setEndurance(3 + randEndurance);
      setSante(3 + randSante);
      setPointsRestants(0);

  }

  const handleCreateGame = async () => {
    try {
      const response = await axios.post('http://10.0.0.3:80/createPartie', {
        id_user: _id,
        hero,
        characteristics: {
          force,
          charisme,
          endurance,
          sante,
        },
        statut: 'en cours'
      });
      navigation.navigate('GameMaps', { id_partie: response.data._id, id_user: _id, hero, force, charisme, endurance, sante });
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.textContainer}>
        <Text style={styles.h1}>CHOISISSEZ VOS CARACTÉRISTIQUES</Text>
        <Text style={styles.pointsRestantsText}>Points restants : {pointsRestants}</Text>
      </View>
      <View style={styles.caracteristiqueContainer}>
        <Text style={styles.caracteristiqueText}>FORCE : {force}</Text>
        <View style={styles.buttonContainer}>
          <TouchableOpacity
            style={styles.button}
            onPress={moreForce}
            disabled={pointsRestants === 0 || force === 7}
          >
            <Text style={styles.buttonText}>+</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.button}
            onPress={lessForce}
            disabled={force === 3}
          >
            <Text style={styles.buttonText}>-</Text>
          </TouchableOpacity>
        </View>
      </View>
      <View style={styles.caracteristiqueContainer}>
        <Text style={styles.caracteristiqueText}>CHARISME : {charisme}</Text>
        <View style={styles.buttonContainer}>
          <TouchableOpacity
            style={styles.button}
            onPress={moreCharisme}
            disabled={pointsRestants === 0 || charisme === 7}>
            <Text style={styles.buttonText}>+</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.button}
            onPress={lessCharisme}
            disabled={charisme === 3}
          >
            <Text style={styles.buttonText}>-</Text>
          </TouchableOpacity>
        </View>
      </View>
      <View style={styles.caracteristiqueContainer}>
        <Text style={styles.caracteristiqueText}>ENDURANCE : {endurance}</Text>
        <View style={styles.buttonContainer}>
          <TouchableOpacity
            style={styles.button}
            onPress={moreEndurance}
            disabled={pointsRestants === 0 || endurance === 7}
          >
            <Text style={styles.buttonText}>+</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.button}
            onPress={lessEndurance}
            disabled={endurance === 3}
          >
            <Text style={styles.buttonText}>-</Text>
          </TouchableOpacity>
        </View>
      </View>
      <View style={styles.caracteristiqueContainer}>
        <Text style={styles.caracteristiqueText}>SANTÉ : {sante}</Text>
        <View style={styles.buttonContainer}>
          <TouchableOpacity
            style={styles.button}
            onPress={moreSante}
            disabled={pointsRestants === 0 || sante === 7}
          >
            <Text style={styles.buttonText}>+</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.button}
            onPress={lessSante}
            disabled={sante === 3}
          >
            <Text style={styles.buttonText}>-</Text>
          </TouchableOpacity>
        </View>
      </View>
      <TouchableOpacity style={styles.randomButton} onPress={randomCaracteristiques}>
        <Text style={styles.randomButtonText}>Aléatoire</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.saveButton} onPress={handleCreateGame}>
        <Text style={styles.saveButtonText}>Enregistrer</Text>
      </TouchableOpacity>

    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-around',
    paddingHorizontal: 20,
    paddingVertical: 40,
    backgroundColor: 'rgba(0, 0, 0, 0.8)'
  },
  textContainer: {
    alignItems: 'center',
    marginBottom: 20,
  },
  h1: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#14f819',
    marginBottom: 10,
    fontFamily: 'monospace',
    textAlign: 'center',
  },
  pointsRestantsText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#FFFFFF',
  },
  caracteristiqueContainer: {
    marginBottom: 20,
  },
  caracteristiqueText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#FFFFFF',
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: 10,
  },
  button: {
    borderRadius: 20,
    padding: 10,
    marginHorizontal: 5,
    backgroundColor: '#0e8210',
    borderColor: '#14f819',
    borderWidth: 3,
  },
  buttonText: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    width: 50,
    fontSize: 20,
    fontWeight: 'bold',
    color: '#FFF',
  },
  saveButton: {
    backgroundColor: '#0e8210',
    borderColor: '#14f819',
    borderWidth: 3,
    borderRadius: 20,
    padding: 10,
    alignItems: 'center',
  },
  saveButtonText: {
    color: '#FFF',
    fontSize: 18,
    fontWeight: 'bold',
  },
  randomButton: {
    backgroundColor: 'rgba(14, 130, 16, 0.2)',
    borderColor: '#14f819',
    borderWidth: 3,
    borderRadius: 20,
    padding: 10,
    marginBottom: 10,
    alignItems: 'center',
  },
  randomButtonText: {
    color: '#FFF',
    fontSize: 18,
    fontWeight: 'bold',
  },
});

export default Caracteristiques;
