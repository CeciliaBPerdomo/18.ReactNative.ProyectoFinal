import { StyleSheet, Text, View, Image, Pressable } from 'react-native'
import colors from '../utils/colors'

// Iconos
import { Entypo } from "@expo/vector-icons"

const Header = ({ title, sub, navigation }) => {
    return (
        <View style={styles.container}>
            <Image
                // Logo 
                source={{ uri: "https://i.ibb.co/zXNHTsp/Logo.png" }}
                style={styles.imagen}
                resizeMode="cover"
            />
            <Text style={styles.texto}>
                {title}
            </Text>

            <Text style={styles.subTitulo}>
                {sub}
            </Text>

            {navigation.canGoBack() &&
                <Pressable onPress={() => navigation.goBack()}>
                    <Entypo name="chevron-with-circle-left" size={25} color={colors.botones} />
                </Pressable>
            }
        </View>
    )
}

export default Header

const styles = StyleSheet.create({
    container: {
        justifyContent: "center",
        alignContent: "center",
        alignItems: "center",
        paddingVertical: 15,
        backgroundColor: "white",
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