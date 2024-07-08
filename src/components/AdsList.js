import { ScrollView, StyleSheet, Text, View, Platform } from 'react-native'
import { AdItem } from './AdItem'

const AdsList = () => {
  return (
    <View style={styles.container}>
        <Text style={styles.title}>Descubra mais</Text>
        <ScrollView 
         bounces={true}
         overScrollMode={Platform.OS === 'android' ? 'always' : 'never'} 
         style={styles.list}
         showsHorizontalScrollIndicator={false}
         horizontal={true}>
            <AdItem />
            <AdItem />
            <AdItem />
            <AdItem />
            <AdItem />
            <AdItem />
            <AdItem />
        </ScrollView>
    </View>
  )
}

const styles = StyleSheet.create({
    container: {
        paddingLeft: 30,
        paddingTop: 30,
        paddingBottom: 90,
        gap: 25,
    },
    title:  {
        color: '#FFF',
        fontSize: 18,
        fontWeight: 'bold',
    },
    list: {
        width: '100%',
    },
})

export {AdsList}
