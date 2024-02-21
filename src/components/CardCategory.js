import { Pressable, StyleSheet, Text, View } from 'react-native'

import Shadows from './wrappers/shadows'

import colors from '../utils/colors'
import fonts from '../utils/fonts'

const CardCategory = ({ item, navigation }) => {
    return (
        <View >
            <Pressable onPress={() => navigation.navigate("Books", {categorySelected: item})}>
                <Shadows style={styles.container}>
                    <Text style={styles.texto}>
                        {item}
                    </Text>
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
        borderRadius: 5,
        width: "80%"
    }, 

    texto : {
        fontSize: 16,
        fontFamily: fonts.Playfair
    }
})