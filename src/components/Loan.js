import { StyleSheet, Text, TouchableOpacity, View } from "react-native"
import {AntDesign} from '@expo/vector-icons'
import ShowValueContext from "../context/showValue";
import { useContext } from "react";

const Loan = () => {
    const { showValue } = useContext(ShowValueContext);

  return (
    <View style={styles.wrapper}> 
        <View style={styles.container}>
            <View style={styles.content}>
                <Text style={styles.loan}>
                    Empréstimo
                </Text>
                <View style={styles.availableContent}>
                    <Text style={styles.available}>
                        Valor disponível de até
                    </Text>
                    <Text style={styles.money}>
                        {showValue ? 'R$ 10.000,00' : '****'} 
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
        gap: 30,
    },
    loan: {
        color: '#FFF',
        fontSize: 18,
    },
    availableContent: {
        alignItems: 'flex-start',
        justifyContent: 'flex-start',
        gap: 5,
    },
    available: {
        color: '#FFF',
        fontSize: 16,
        fontWeight: 'normal',
    },
    money: {
        color: '#FFF',
        fontSize: 20,
        fontWeight: 'bold',
    },
   
})

export {Loan}
