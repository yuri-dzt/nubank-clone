import { ScrollView, StyleSheet, Text, View } from 'react-native'

const AdBoxList = () => {
  return (
    <ScrollView style={styles.wrapper} horizontal={true} showsHorizontalScrollIndicator={false}>
      <View style={styles.container1}>
        <Text style={styles.text}>
          Você tem até <Text style={styles.purpleText}>R$10.000,00</Text> disponíveis para empréstimo.
        </Text>
      </View>
      <View style={styles.container}>
        <Text style={styles.text}>
          <Text style={styles.purpleText}>Gift Cards:</Text>  compre direto no app, com segurança e economia
        </Text>
      </View>
      <View style={styles.container}>
        <Text style={styles.text}>
          <Text style={styles.purpleText}>Convide amigos para o Nubank</Text>  e desbloqueie brasões incríveis.
        </Text>
      </View>
      <View style={styles.space}></View>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  wrapper: {
    marginTop: 30,
    height: 'fit',
    width: '100%',
  },
  container1: {
    width: 280,
    height: 'fit',
    backgroundColor: '#222222',
    borderRadius: 16,
    paddingLeft:30,
    paddingTop: 20,
    paddingBottom: 30,
    marginLeft: 30,
    marginRight: 20,
  },
  container: {
    width: 280,
    height: 'fit',
    backgroundColor: '#222222',
    borderRadius: 16,
    paddingLeft:30,
    paddingTop: 20,
    paddingBottom: 30,
    marginRight: 20,
  },
  space: {
    width: 10,
    height: 'fit',
  },
  text: {
    fontSize: 14,
    fontWeight: 'normal',
    color: '#fff',
    width: '90%',
    lineHeight: 20,
  },
  purpleText: {
    fontSize: 15,
    color: '#8f23d6',
    fontWeight:  'bold',
  },
})

export {AdBoxList}
