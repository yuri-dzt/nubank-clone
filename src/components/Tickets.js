import React from 'react'
import { StyleSheet, TouchableOpacity, Text, View } from 'react-native'
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import { faCreditCard, faTicket } from '@fortawesome/free-solid-svg-icons'

const Tickets = () => {
  return (
    <TouchableOpacity style={styles.container}>
        <View style={styles.chances}>
            <FontAwesomeIcon style={styles.icon} icon={faTicket} color="#fff" size={20} /> 
            <Text style={styles.title}>
                N chances de ganhar
            </Text>
        </View>
        <Text style={styles.amount}>
            25 bilhetes
        </Text>
   </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#222222',
        width:'85%',
        height: 55,
        borderRadius: 16,
        marginLeft: 30,
        paddingRight: 30,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginTop: 30
    },
    chances: {
        flexDirection: 'row',
        gap: 15,
        justifyContent: 'center',
        alignItems: 'center',
    },
    icon: {
        marginLeft: 30,
    },
    title: {
        color: '#fff',
        fontWeight: 'bold',
        fontSize: 14,
    },
    amount: {
        color: '#fff',
        fontWeight: 'bold',
        fontSize: 14,
    },
})

export {Tickets}
