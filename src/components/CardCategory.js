import { Pressable, StyleSheet, Text, View } from 'react-native'
import colors from '../utils/colors'
import Shadows from './wrappers/shadows'

const CardCategory = ({ item, selectedCategoryState }) => {
    return (
        <View >
            <Pressable onPress={() => selectedCategoryState(item)}>
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
        fontSize: 16
    }
})