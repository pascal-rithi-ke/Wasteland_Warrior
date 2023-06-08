import React, { useState } from 'react';
import { View, Text, Button, Alert, StyleSheet } from 'react-native';
import axios from 'axios';

const DeleteUser = ({ loggedIn, onLogout }) => {
  const [confirmDelete, setConfirmDelete] = useState(false);

  const handleDelete = () => {
    if (!loggedIn) {
      showAlert('Erreur', 'Vous devez être connecté pour supprimer votre compte.');
      return;
    }

    setConfirmDelete(true);
  };

  const handleConfirm = async () => {
    try {
      await axios.delete('https://5467-130-180-217-66.ngrok-free.app/DeleteUser');
      showAlert('Succès', 'Votre compte a été supprimé avec succès.', [{ text: 'OK', onPress: onLogout }]);
    } catch (error) {
      console.error(error);
      showAlert('Erreur', 'Une erreur s\'est produite lors de la suppression du compte.');
    }
  };

  const handleCancel = () => {
    setConfirmDelete(false);
  };

  const showAlert = (title, message, buttons = []) => {
    Alert.alert(title, message, buttons);
  };

  return (
    <View style={styles.container}>
      {!confirmDelete ? (
        <>
          <Text style={styles.confirmText}>Etes-vous sûr de vouloir supprimer votre compte ?</Text>
          <Button title="Supprimer le compte" onPress={handleDelete} />
        </>
      ) : (
        <>
          <Text style={styles.confirmText}>Voulez-vous vraiment supprimer votre compte ?</Text>
          <Button title="Confirmer" onPress={handleConfirm} />
          <Button title="Annuler" onPress={handleCancel} />
        </>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  confirmText: {
    textAlign: 'center',
    marginBottom: 10,
  },
});

export default DeleteUser;
