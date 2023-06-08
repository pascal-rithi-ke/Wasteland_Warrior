import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

const Caracteristiques = ({ onUpdateCaracteristiques }) => {
  const [force, setForce] = useState(3);
  const [charisme, setCharisme] = useState(3);
  const [endurance, setEndurance] = useState(3);
  const [sante, setSante] = useState(3);
  const [pointsRestants, setPointsRestants] = useState(5);

  const incrementCaracteristique = (caracteristique) => {
    if (pointsRestants > 0 && caracteristique < 7) {
      switch (caracteristique) {
        case 'force':
          setForce((prevForce) => prevForce + 1);
          break;
        case 'charisme':
          setCharisme((prevCharisme) => prevCharisme + 1);
          break;
        case 'endurance':
          setEndurance((prevEndurance) => prevEndurance + 1);
          break;
        case 'sante':
          setSante((prevSante) => prevSante + 1);
          break;
        default:
          break;
      }
      setPointsRestants((prevPoints) => prevPoints - 1);
    }
  };

  const decrementCaracteristique = (caracteristique) => {
    switch (caracteristique) {
      case 'force':
        if (force > 3) {
          setForce((prevForce) => prevForce - 1);
          setPointsRestants((prevPoints) => prevPoints + 1);
        }
        break;
      case 'charisme':
        if (charisme > 3) {
          setCharisme((prevCharisme) => prevCharisme - 1);
          setPointsRestants((prevPoints) => prevPoints + 1);
        }
        break;
      case 'endurance':
        if (endurance > 3) {
          setEndurance((prevEndurance) => prevEndurance - 1);
          setPointsRestants((prevPoints) => prevPoints + 1);
        }
        break;
      case 'sante':
        if (sante > 3) {
          setSante((prevSante) => prevSante - 1);
          setPointsRestants((prevPoints) => prevPoints + 1);
        }
        break;
      default:
        break;
    }
  };

  const handleSaveCaracteristiques = () => {
    const caracteristiques = {
      force,
      charisme,
      endurance,
      sante,
    };
    onUpdateCaracteristiques(caracteristiques);
  };

  return (
    <View style={styles.container}>
      <View style={styles.textContainer}>
        <Text style={styles.pointsRestantsText}>Points restants: {pointsRestants}</Text>
        <View style={styles.caracteristiqueContainer}>
          <Text style={styles.caracteristiqueText}>Force: {force}</Text>
          <View style={styles.buttonContainer}>
            <TouchableOpacity
              style={styles.button}
              onPress={() => incrementCaracteristique('force')}
              disabled={pointsRestants === 0 || force === 7}
            >
              <Text style={styles.buttonText}>+</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.button}
              onPress={() => decrementCaracteristique('force')}
              disabled={force === 3}
            >
              <Text style={styles.buttonText}>-</Text>
            </TouchableOpacity>
          </View>
        </View>
        <View style={styles.caracteristiqueContainer}>
          <Text style={styles.caracteristiqueText}>Charisme: {charisme}</Text>
          <View style={styles.buttonContainer}>
            <TouchableOpacity
              style={styles.button}
              onPress={() => incrementCaracteristique('charisme')}
              disabled={pointsRestants === 0 || charisme === 7}
            >
              <Text style={styles.buttonText}>+</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.button}
              onPress={() => decrementCaracteristique('charisme')}
              disabled={charisme === 3}
            >
              <Text style={styles.buttonText}>-</Text>
            </TouchableOpacity>
          </View>
        </View>
        <View style={styles.caracteristiqueContainer}>
          <Text style={styles.caracteristiqueText}>Endurance: {endurance}</Text>
          <View style={styles.buttonContainer}>
            <TouchableOpacity
              style={styles.button}
              onPress={() => incrementCaracteristique('endurance')}
              disabled={pointsRestants === 0 || endurance === 7}
            >
              <Text style={styles.buttonText}>+</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.button}
              onPress={() => decrementCaracteristique('endurance')}
              disabled={endurance === 3}
            >
              <Text style={styles.buttonText}>-</Text>
            </TouchableOpacity>
          </View>
        </View>
        <View style={styles.caracteristiqueContainer}>
          <Text style={styles.caracteristiqueText}>Santé: {sante}</Text>
          <View style={styles.buttonContainer}>
            <TouchableOpacity
              style={styles.button}
              onPress={() => incrementCaracteristique('sante')}
              disabled={pointsRestants === 0 || sante === 7}
            >
              <Text style={styles.buttonText}>+</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.button}
              onPress={() => decrementCaracteristique('sante')}
              disabled={sante === 3}
            >
              <Text style={styles.buttonText}>-</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
      <TouchableOpacity style={styles.saveButton} onPress={handleSaveCaracteristiques}>
        <Text style={styles.saveButtonText}>Enregistrer</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000000',
    padding: 20,
  },
  textContainer: {
    flex: 1,
    marginBottom: 40,
  },
  pointsRestantsText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#FFFFFF',
    marginBottom: 20,
  },
  caracteristiqueContainer: {
    marginBottom: 20,
  },
  caracteristiqueText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#FFFFFF',
    marginBottom: 10,
  },
  buttonContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  button: {
    backgroundColor: '#FF0000',
    padding: 10,
    marginHorizontal: 5,
  },
  buttonText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#FFFFFF',
  },
  saveButton: {
    position: 'absolute',
    bottom: 20,
    left: 20,
    right: 20,
    backgroundColor: '#FF0000',
    padding: 10,
    alignItems: 'center',
  },
  saveButtonText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#FFFFFF',
  },
});

export default Caracteristiques;
