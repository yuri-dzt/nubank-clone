import { faBarcode, faCircleDollarToSlot, faCommentDollar, faGlobe, faHandHoldingDollar, faMobilePhone, faMoneyBillTransfer, faMoneyBillTrendUp, faSignal } from '@fortawesome/free-solid-svg-icons'
import { ScrollView, StyleSheet, View } from 'react-native'
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import { faPix } from '@fortawesome/free-brands-svg-icons'
import ActionItem from './ActionItem'

const ActionList = () => {
  return (
    <ScrollView style={styles.wrapper} horizontal={true} showsHorizontalScrollIndicator={false}>
        <ActionItem text={'Área pix'}>
            <FontAwesomeIcon icon={faPix} color="#fff" size={30} />    
        </ActionItem>
        <ActionItem text={'Pagar'}>
            <FontAwesomeIcon icon={faBarcode} color="#fff" size={25} />
        </ActionItem>
        <ActionItem text={'Pegar emprestado'}>
            <FontAwesomeIcon icon={faHandHoldingDollar} color="#fff" size={30} />
        </ActionItem>
        <ActionItem text={'Recarga de celular'}>
            <FontAwesomeIcon icon={faMobilePhone} color="#fff" size={30} />
        </ActionItem>
        <ActionItem text={'Transferir'}>
            <FontAwesomeIcon icon={faMoneyBillTransfer} color="#fff" size={30} />
        </ActionItem>
        <ActionItem text={'Cobrar'}>
            <FontAwesomeIcon icon={faCommentDollar} color="#fff" size={30} />
        </ActionItem>
        <ActionItem text={'Caixinhas'}>
            <FontAwesomeIcon icon={faCircleDollarToSlot} color="#fff" size={30} />
        </ActionItem>
        <ActionItem text={'Depositar'}>
            <FontAwesomeIcon icon={faMoneyBillTrendUp} color="#fff" size={30} />
        </ActionItem>
        <ActionItem text={'Investir'}>
            <FontAwesomeIcon icon={faSignal} color="#fff" size={30} />
        </ActionItem>
        <ActionItem text={'Transferir internac.'}>
            <FontAwesomeIcon icon={faGlobe} color="#fff" size={30} />
        </ActionItem>
        <View style={styles.space}></View>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
    wrapper: {
        paddingLeft: 30,
        paddingRight: 80,
        gap: 20,
        width: '100%',
        height: 90,
    },
    container: {
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'start',
        gap: 10,
        height: 90,
        width: 80,
        marginTop:25,
    },
    content: {
        width: 70,
        height: 70,
        borderRadius: 50,
        backgroundColor: '#222222',
        justifyContent: 'center',
        alignItems: 'center',
    },
    space: {
        width: 50,
        height: 70,
        borderRadius: 50,
    },
    title: {
        color: '#fff',
        fontWeight: 'bold',
        textAlign: 'center'
    }
})

export {ActionList}
