import { StyleSheet, Text, TouchableOpacity } from 'react-native';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faCreditCard } from '@fortawesome/free-solid-svg-icons';
import React from 'react';

const MyCards = ({ navigation }) => {
  return (
    <TouchableOpacity 
      style={styles.container} 
      onPress={() => navigation.navigate('MyCardsPage')}
    >
      <FontAwesomeIcon style={styles.icon} icon={faCreditCard} color="#fff" size={20} /> 
      <Text style={styles.title}>
          Meus cartões
      </Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#222222',
    width: '85%',
    height: 55,
    borderRadius: 16,
    marginLeft: 30,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'start',
    gap: 20,
  },
  icon: {
    marginLeft: 30,
  },
  title: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 14,
  },
});

export { MyCards };
