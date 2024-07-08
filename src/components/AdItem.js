import { Image, StyleSheet, View, Text, TouchableOpacity } from "react-native"

const AdItem = () => {
  return (
    <View style={styles.wrapper}>
        <Image style={styles.img} source={require('../../assets/ads/ad1.jpg')} />
        <View style={styles.container}>
            <View style={styles.content}>
                <Text style={styles.title}>Seguro de vida</Text>
                <Text style={styles.text}>Cuide de quem você ama de um jeito simples e que cabe no seu bolso.</Text>
            </View>
            <TouchableOpacity style={styles.button} activeOpacity={0.7}>
                <Text style={styles.buttonText}>Conhecer</Text>
            </TouchableOpacity>
        </View>
    </View>
  )
}

const styles = StyleSheet.create({
    wrapper: {
        borderRadius: 15,
        overflow: 'hidden',
        width: 240,
        backgroundColor: '#333333',
        marginRight: 20,
    },
    img: {
        width: '100%',
        height: 100,
        objectFit: 'cover',
    },
    title: {
        color: '#fff',
        fontSize: 14,
        fontWeight: 'bold',
    },
    text: {
        color: '#a3a3a3',
        fontSize: 14,
        fontWeight: 'normal',
    },
    container: {
        width: '100%',
        paddingLeft: 20,
        paddingRight: 30,
        paddingTop: 15,
        paddingBottom: 15,
    },
    content: {
        gap: 10,
    },
    button: {
        paddingTop: 10,
        paddingBottom: 10,
        paddingLeft: 15,
        paddingRight: 15,
        backgroundColor: '#8f23d6',
        borderRadius: 40,
        alignSelf: 'flex-start',
        marginTop: 25,
    },
    buttonText: {
        color: '#fff',
        fontSize: 16,
        fontWeight: 'bold',
    }
})

export {AdItem}
