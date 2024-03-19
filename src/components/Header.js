import { StyleSheet, Text, View, Image, Pressable } from 'react-native'
import colors from '../utils/colors'

// Iconos
import { Entypo, AntDesign } from "@expo/vector-icons"
import { useDispatch, useSelector } from 'react-redux'
import { clearUser } from '../features/auth/authSlice'

import { deleteSession } from "../utils/db/index"

const Header = ({ title, sub, navigation }) => {

    const idToken = useSelector((state) => state.auth.idToken)
    const dispatch = useDispatch()

    const salir = () => {
        dispatch(clearUser())
        deleteSession()
    }

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

            {
                idToken && (
                    <Pressable 
                        style={styles.logoutIcon}
                        onPress={salir}
                    >
                        <AntDesign
                            name="logout"
                            size={30}
                            color="black"
                        />
                    </Pressable>
                )
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
        borderBottomWidth: 1,
        borderBottomColor: colors.bordes
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
    },

    logoutIcon: {
        position: "absolute",
        right: 10,
        bottom: 15
    }
})