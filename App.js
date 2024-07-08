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
import React from 'react';

export default function App() {
  return (
     <ShowValueProvider>
     <UserNameProvider>
       <SafeAreaView style={{ flex: 1, height: '100%' }}>
         <StatusBar barStyle="default" />
         <ScrollView style={styles.container} vertical={true} showsVerticalScrollIndicator={false}>
           <Header />
           <Value />
           <View style={styles.content}>
             <ActionList />
           </View>
           <MyCards />
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
     </UserNameProvider>
   </ShowValueProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000',
  },
  content: {
    height: 150
  },
  line: {
    width: '100%',
    height: 2,
    backgroundColor: '#222222',
    marginTop: 30,
  }
});
