import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const MyCardsPage = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>My Cards Page</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#000',
  },
  text: {
    color: '#fff',
    fontSize: 18,
  },
});

export default MyCardsPage;
