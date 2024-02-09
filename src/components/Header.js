import { StyleSheet, Text, View, Image } from 'react-native'
import colors from '../utils/colors'

const Header = ({ title, sub }) => {
    return (
        <View style={styles.container}>
            <Image
                source={{ uri: "https://i.ibb.co/PG0SdYJ/Mis-Libritos.png" }}
                style={styles.imagen}
                resizeMode="cover"
            />
            <Text style={styles.texto}>
                {title}
            </Text>

            <Text style={styles.subTitulo}>
                {sub}
            </Text>
        </View>
    )
}

export default Header

const styles = StyleSheet.create({
    container: {
        justifyContent: "center",
        alignContent: "center",
        alignItems: "center",
        paddingVertical: 40,
        // backgroundColor: "black"
    },

    texto: {
        fontSize: 24,
    },

    subTitulo: {
        fontSize: 16,
        color: colors.primary
    },

    imagen: {
        width: 100,
        height: 100,
    }
})