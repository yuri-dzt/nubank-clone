import React, { useContext, useState } from 'react';
import { Modal, StyleSheet, Text, TouchableOpacity, View, TextInput, TouchableWithoutFeedback } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import UserNameContext from '../context/userName';
import MoneyInput from './MoneyInput';

const ChangeName = ({ isVisible, onClose }) => {
  const [newName, setNewName] = useState('');
  const [moneyValue, setMoneyValue] = useState('');

  const { setUserName, setBalance } = useContext(UserNameContext);

  const handleChangeName = async () => {
    if (newName.trim() !== '') {
      setUserName(newName);
    }

    if (moneyValue.trim() !== '') {
      setBalance(moneyValue);
    }

    onClose();
  };

  return (
    <Modal visible={isVisible} transparent={true} animationType='fade' onRequestClose={onClose}>
      <TouchableWithoutFeedback onPress={onClose}>
        <View style={styles.modal}>
          <TouchableOpacity style={styles.closeButton} onPress={onClose}>
            <Icon name="times" size={20} color="white" />
          </TouchableOpacity>
          <View style={styles.modalContainer} onStartShouldSetResponder={() => true}>
            <Text style={styles.modalTitle}>Mudar Nome da Conta:</Text>
            <View style={styles.formContainer}>
              <View style={styles.inputContainer}>
                <TextInput
                  style={styles.input}
                  placeholder="Novo nome"
                  placeholderTextColor={'#fff'}
                  onChangeText={text => setNewName(text)}
                  value={newName}
                />
                <MoneyInput
                  onValueChange={text => setMoneyValue(text)}
                />
              </View>
              <TouchableOpacity
                style={styles.button}
                onPress={handleChangeName}
              >
                <Text style={styles.buttonTitle}>Alterar</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </TouchableWithoutFeedback>
    </Modal>
  );
};

const styles = StyleSheet.create({
  modal: {
    flex: 1,
    backgroundColor: 'rgba(0, 0, 0, 0.6)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  modalContainer: {
    backgroundColor: '#1d1d1b',
    width: '80%',
    padding: 20,
    borderRadius: 10,
    alignItems: 'center',
    gap: 30,
  },
  modalTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#fff',
    marginBottom: 10,
  },
  closeButton: {
    position: 'absolute',
    top: 10,
    right: 10,
    padding: 5,
  },
  formContainer: {
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 60,
  },
  inputContainer: {
    width: '100%',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 30,
  },
  input: {
    backgroundColor: '#222',
    borderRadius: 5,
    padding: 10,
    width: '100%',
    color: '#fff',
    marginBottom: 10,
  },
  button: {
    width: '100%',
    height: 50,
    backgroundColor: '#820ad1',
    borderRadius: 5,
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonTitle: {
    color: '#fff',
    fontSize: 14,
  },
});

export { ChangeName };
