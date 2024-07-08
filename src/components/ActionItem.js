import { StyleSheet, Text, TouchableOpacity, View } from "react-native"

const ActionItem = ({ children, text }) => {
  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.content}>
        {children}
      </TouchableOpacity>
      <Text style={styles.title}>
        {text}
      </Text>
    </View>
  )
}

const styles = StyleSheet.create({
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
  title: {
      color: '#fff',
      fontWeight: 'bold',
      textAlign: 'center'
  }
})

export default ActionItem
