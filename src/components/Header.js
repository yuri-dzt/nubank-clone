import React, { useContext, useState } from 'react';
import { StyleSheet, Text, TouchableOpacity, View, StatusBar } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import ShowValueContext from '../context/showValue';
import { ChangeName } from './changeName';
import UserNameContext from '../context/userName';

const statusBarHeight = StatusBar.currentHeight ? StatusBar.currentHeight + 10 : 64;

const Header = () => {
  const { setShowValue, showValue } = useContext(ShowValueContext);
  const [changeNameModalVisible, setChangeNameModalVisible] = useState(false);

  const { userName } = useContext(UserNameContext)

  const handleShowValue = () => {
    setShowValue(!showValue);
  };

  const handleOpenChangeUserNamePopup = () => {
    setChangeNameModalVisible(true);
  };

  const handleCloseChangeUserNamePopup = () => {
    setChangeNameModalVisible(false);
  };

  return (
    <View style={styles.container}>
      <View style={styles.content}>
        <View style={styles.circle}>
          <TouchableOpacity onPress={handleOpenChangeUserNamePopup}>
            <Icon name="user-circle" size={35} color="white" />
          </TouchableOpacity>
          <ChangeName isVisible={changeNameModalVisible} onClose={handleCloseChangeUserNamePopup} />
        </View>
        <View style={styles.settings}>
          <TouchableOpacity onPress={() => handleShowValue()}>
            <Icon name={showValue ? 'eye' : 'eye-slash'} size={25} color="white" />
          </TouchableOpacity>
          <TouchableOpacity>
            <Icon name="question-circle" size={25} color="white" />
          </TouchableOpacity>
          <TouchableOpacity>
            <Icon name="envelope" size={25} color="white" />
          </TouchableOpacity>
        </View>
      </View>
      <View>
        <Text style={styles.userName}>Olá, {userName || 'Nome do Usuário'}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#8f23d6',
    width: '100%',
    height: 170,
    paddingLeft: 30,
    paddingRight: 30,
    paddingTop: statusBarHeight,
    justifyContent: 'start',
    alignItems: 'start',
    gap: 40,
  },
  content: {
    justifyContent: 'space-between',
    flexDirection: 'row',
    width: '100%',
  },
  settings: {
    justifyContent: 'center',
    flexDirection: 'row',
    gap: 10,
  },
  userName: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 20,
  },
  circle: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 10,
  },
});

export { Header };
