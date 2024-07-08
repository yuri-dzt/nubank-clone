import { StyleSheet, Text, TouchableOpacity, View } from "react-native"
import {AntDesign} from '@expo/vector-icons'

const NextPayment = () => {
  return (
    <View style={styles.wrapper}> 
        <View style={styles.container}>
            <View style={styles.content}>
                <Text style={styles.next}>
                    Próximo pagamento
                </Text>
                <View style={styles.nextContent}>
                    <Text style={styles.date}>
                        Segunda-feira,
                    </Text>
                    <Text style={styles.day}>
                        15 Jan
                    </Text>
                </View>
            </View>
            <TouchableOpacity>
                <AntDesign name='right' size={15} color={'#fff'} />
            </TouchableOpacity>
        </View>
    </View>
  )
}

const styles = StyleSheet.create({
    wrapper: {
        paddingLeft: 30,
        paddingRight: 30,
        paddingTop: 30,
        gap: 25,
    },
    container: {
        flexDirection: 'row',
        alignItems: 'start',
        justifyContent: 'space-between'
    },
    content: {
        alignItems: 'flex-start',
        justifyContent: 'flex-start',
        gap: 10,
    },
    next: {
        color: '#FFF',
        fontSize: 18,
    },
    nextContent: {
        flexDirection: 'row',
        alignItems: 'flex-start',
        justifyContent: 'flex-start',
        gap: 5,
    },
    date: {
        color: '#FFF',
        fontSize: 18,
        fontWeight: 'normal',
    },
    day: {
        color: '#FFF',
        fontSize: 18,
        fontWeight: 'bold',
    },
   
})

export {NextPayment}