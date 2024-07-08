import React, { createContext, useEffect, useState } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';

const ShowValueContext = createContext();

export const ShowValueProvider = ({ children }) => {
  const [showValue, setShowValue] = useState(false);

  useEffect(() => {
    // Função para carregar o valor de showValue do AsyncStorage ao inicializar
    const loadShowValue = async () => {
      try {
        const storedValue = await AsyncStorage.getItem('showValue');
        if (storedValue !== null) {
          setShowValue(JSON.parse(storedValue));
        }
      } catch (error) {
        console.error('Erro ao carregar showValue do AsyncStorage:', error);
      }
    };

    loadShowValue();
  }, []);

  const setShowValueAndSave = async (value) => {
    try {
      setShowValue(value);
      await AsyncStorage.setItem('showValue', JSON.stringify(value));
    } catch (error) {
      console.error('Erro ao salvar showValue no AsyncStorage:', error);
    }
  };

  return (
    <ShowValueContext.Provider value={{ showValue, setShowValue: setShowValueAndSave }}>
      {children}
    </ShowValueContext.Provider>
  );
};

export default ShowValueContext;
