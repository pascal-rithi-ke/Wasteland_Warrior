import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

const Caracteristiques = ({ onUpdateCaracteristiques }) => {
  const [force, setForce] = useState(3);
  const [charisme, setCharisme] = useState(3);
  const [endurance, setEndurance] = useState(3);
  const [sante, setSante] = useState(3);
  const [pointsRestants, setPointsRestants] = useState(5);

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
      </View>
      <View style={styles.caracteristiqueContainer}>
        <Text style={styles.caracteristiqueText}>Force: {force}</Text>
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
        <Text style={styles.caracteristiqueText}>Charisme: {charisme}</Text>
        <View style={styles.buttonContainer}>
          <TouchableOpacity
            style={styles.button}
            onPress={moreCharisme}
            disabled={pointsRestants === 0 || charisme === 7}
          >
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
        <Text style={styles.caracteristiqueText}>Endurance: {endurance}</Text>
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
        <Text style={styles.caracteristiqueText}>Santé: {sante}</Text>
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
      <TouchableOpacity style={styles.saveButton} onPress={handleSaveCaracteristiques}>
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
    backgroundColor: '#FFFFFF',
    borderRadius: 20,
    padding: 10,
    marginHorizontal: 5,
  },
  buttonText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#000000',
  },
  saveButton: {
    backgroundColor: '#FFFFFF',
    borderRadius: 20,
    padding: 10,
    alignItems: 'center',
  },
  saveButtonText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#000000',
  },
});

export default Caracteristiques;
