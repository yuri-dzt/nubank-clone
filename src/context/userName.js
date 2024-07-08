import React, { createContext, useState, useEffect } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';

const UserNameContext = createContext();

export const UserNameProvider = ({ children }) => {
  const [userName, setUserName] = useState('');

  useEffect(() => {
    const loadUserName = async () => {
      try {
        const storedUserName = await AsyncStorage.getItem('userName');
        if (storedUserName !== null) {
          setUserName(storedUserName);
        }
      } catch (error) {
        console.error('Failed to load user name from AsyncStorage:', error);
      }
    };

    loadUserName();
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

  return (
    <UserNameContext.Provider value={{ userName, setUserName }}>
      {children}
    </UserNameContext.Provider>
  );
};

export default UserNameContext;
