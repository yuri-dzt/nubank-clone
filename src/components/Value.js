import { StyleSheet, Text, TouchableOpacity, View } from "react-native"
import {AntDesign} from '@expo/vector-icons'
import { useContext } from "react"
import ShowValueContext from "../context/showValue"

const Value = () => {
    const { showValue } = useContext(ShowValueContext)

  return (
    <View style={styles.wrapper}> 
        <View style={styles.container}>
            <View style={styles.content}>
                <Text style={styles.account}>
                    Conta
                </Text>
                <Text style={styles.money}>
                     {showValue === true ? `R$143.359,00` : '****'}
                </Text>
            </View>
            <TouchableOpacity>
                <AntDesign name='right' size={15} color={'#fff'} />
            </TouchableOpacity>
        </View>
        <View style={styles.otherBank}>
            <Text style={styles.otherValue}>
                {showValue === true ? 'R$ 0,00 em outro banco' : '****'}
            </Text>
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
    account: {
        color: '#FFF',
        fontSize: 18,
    },
    money: {
        color: '#FFF',
        fontSize: 20,
        fontWeight: 'bold',
    },
    otherValue: {
        color: '#858585',
        fontSize: 14,
        fontWeight: 'normal',
    },
   
})

export {Value}
