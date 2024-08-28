import React, { useState } from 'react';
import { StyleSheet, View, TextInput, Text } from 'react-native';

const MoneyInput = ({ onValueChange }) => {
  const [value, setValue] = useState('');

  const formatMoney = (text) => {
    let cleanedText = text.replace(/[^\d]/g, '');

    if (cleanedText.length === 0) {
      return '';
    } else {
      const cents = cleanedText.slice(-2);
      let thousands = cleanedText.slice(0, -2);

      if (thousands.length > 3) {
        thousands = thousands.replace(/\B(?=(\d{3})+(?!\d))/g, '.');
      }

      return `R$ ${thousands},${cents}`;
    }
  };

  const handleChangeText = (text) => {
    const formattedValue = formatMoney(text);
    setValue(formattedValue);
    if (onValueChange) {
      onValueChange(text);
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.label}>Digite um valor:</Text>
      <TextInput
        style={styles.input}
        placeholder="Digite um valor"
        placeholderTextColor="#fff"
        keyboardType="numeric"
        maxLength={15}
        value={value}
        onChangeText={handleChangeText}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
  },
  label: {
    fontSize: 18,
    marginBottom: 10,
    color: '#fff',
  },
  input: {
    backgroundColor: '#222',
    borderRadius: 5,
    padding: 10,
    width: '100%',
    color: '#fff',
    marginBottom: 10,
    height: 50,
  },
});

export default MoneyInput;
