import { StyleSheet, Text, TouchableOpacity, View } from "react-native"
import {AntDesign} from '@expo/vector-icons'
import ShowValueContext from "../context/showValue";
import { useContext } from "react";

const CardValue = () => {
    const { showValue } = useContext(ShowValueContext);

  return (
    <View style={styles.wrapper}> 
        <View style={styles.container}>
            <View style={styles.content}>
                <Text style={styles.account}>
                    Cartão de crédito
                </Text>
                <View style={styles.currentValue}>
                    <Text style={styles.current}>
                        Fatura atual
                    </Text>
                    <Text style={styles.money}>
                        {showValue ? 'R$ 177, 84' : '****'}
                    </Text>
                </View>
            </View>
            <TouchableOpacity>
                <AntDesign name='right' size={15} color={'#fff'} />
            </TouchableOpacity>
        </View>
        <View style={styles.limit}>
            <Text style={styles.otherValue}>
               Limite disponível de {showValue ? 'R$ 283, 40' : '****'}
            </Text>
            <Text style={styles.otherValue}>
               Limite adicional para Pix e boletos: <Text style={styles.additionalLimit}>{showValue ? 'R$ 550,00' : '****'}</Text> 
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
    currentValue: {
        gap: 5,
    },
    money: {
        color: '#FFF',
        fontSize: 20,
        fontWeight: 'bold',
    },
    current: {
        color: '#FFF',
        fontSize: 20,
        fontWeight: 'normal',
    },
    limit: {
        gap: 5,
    },
    additionalLimit: {
        fontSize: 15,
        color: '#820ad1',
        fontWeight:  'bold',
    },
    otherValue: {
        color: '#858585',
        fontSize: 14,
        fontWeight: 'normal',
    },
   
})

export {CardValue}
