import { ImageBackground, Pressable, StyleSheet, Text, View } from 'react-native'

import Shadows from './wrappers/shadows'

import colors from '../utils/colors'
import fonts from '../utils/fonts'

const CardCategory = ({ item, navigation }) => {
    return (
        <View >
            <Pressable onPress={() => navigation.navigate("Books", { categorySelected: item.categoria })}>
                <Shadows style={styles.container}>
                    {/* Imagen de fondo de la tarjeta */}
                    {/* <ImageBackground source={{uri: item.imagen}} style={styles.background}> */}
                    <Text style={styles.texto}>
                        {item.categoria}
                    </Text>
                    {/* </ImageBackground> */}
                </Shadows>
            </Pressable>
        </View>
    )
}

export default CardCategory

const styles = StyleSheet.create({
    container: {
        justifyContent: "center",
        alignItems: "center",
        marginVertical: 10,
        marginHorizontal: 35,
        padding: 10,
        backgroundColor: colors.botones,
        borderRadius: 15,
        width: "80%",
        height: 100,
        borderWidth: 1,
        borderColor: colors.bordes
    },

    texto: {
        fontSize: 18,
        fontFamily: fonts.Playfair
    },

    // background: {
    //     width: "100%",
    //     height: "100%"
    // }
})