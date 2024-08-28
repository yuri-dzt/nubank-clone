import React, { createContext, useState, useEffect } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';

const UserNameContext = createContext();

export const UserNameProvider = ({ children }) => {
  const [userName, setUserName] = useState('');
  const [balance, setBalance] = useState('');

  useEffect(() => {
    const loadUserData = async () => {
      try {
        const storedUserName = await AsyncStorage.getItem('userName');
        const storedBalance = await AsyncStorage.getItem('balance');
        if (storedUserName !== null) {
          setUserName(storedUserName);
        }
        if (storedBalance !== null) {
          setBalance(storedBalance);
        }
      } catch (error) {
        console.error('Failed to load data from AsyncStorage:', error);
      }
    };

    loadUserData();
  }, []);

  useEffect(() => {
    const saveUserName = async () => {
      try {
        await AsyncStorage.setItem('userName', userName);
      } catch (error) {
        console.error('Failed to save user name to AsyncStorage:', error);
      }
    };

    if (userName) {
      saveUserName();
    }
  }, [userName]);

  useEffect(() => {
    const saveBalance = async () => {
      try {
        await AsyncStorage.setItem('balance', balance);
      } catch (error) {
        console.error('Failed to save balance to AsyncStorage:', error);
      }
    };

    if (balance) {
      saveBalance();
    }
  }, [balance]);

  return (
    <UserNameContext.Provider value={{ userName, setUserName, balance, setBalance }}>
      {children}
    </UserNameContext.Provider>
  );
};

export default UserNameContext;
