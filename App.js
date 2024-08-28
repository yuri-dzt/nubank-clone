import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { ScrollView, StyleSheet, View, SafeAreaView, StatusBar } from 'react-native';
import { ShowValueProvider } from './src/context/showValue';
import { NextPayment } from './src/components/NextPayment';
import { UserNameProvider } from './src/context/userName';
import { ActionList } from './src/components/ActionList';
import { AdBoxList } from './src/components/AdBoxList';
import { CardValue } from './src/components/CardValue';
import { Tickets } from './src/components/Tickets';
import { MyCards } from './src/components/MyCards';
import { AdsList } from './src/components/AdsList';
import { Header } from './src/components/Header';
import { Value } from './src/components/Value';
import { Loan } from './src/components/Loan';
import MyCardsPage from './src/pages/MyCards/page'; 

const Stack = createStackNavigator();

export default function App() {
  return (
    <ShowValueProvider>
      <UserNameProvider>
        <NavigationContainer>
          <Stack.Navigator
            initialRouteName="Home"
            screenOptions={{
              headerShown: false,
            }}
          >
            <Stack.Screen name="Home" component={HomeScreen} />
            <Stack.Screen name="MyCardsPage" component={MyCardsPage} />
          </Stack.Navigator>
        </NavigationContainer>
      </UserNameProvider>
    </ShowValueProvider>
  );
}

function HomeScreen({ navigation }) {
  return (
    <SafeAreaView style={{ flex: 1, height: '100%' }}>
      <StatusBar barStyle="default" />
      <ScrollView style={styles.container} vertical={true} showsVerticalScrollIndicator={false}>
        <Header />
        <Value />
        <View style={styles.content}>
          <ActionList />
        </View>
        <MyCards navigation={navigation} />
        <View>
          <AdBoxList />
        </View>
        <View style={styles.line}></View>
        <CardValue />
        <Tickets />
        <View style={styles.line}></View>
        <Loan />
        <View style={styles.line}></View>
        <NextPayment />
        <View style={styles.line}></View>
        <AdsList />
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000',
  },
  content: {
    height: 150,
  },
  line: {
    width: '100%',
    height: 2,
    backgroundColor: '#222222',
    marginTop: 30,
  },
});
