import { Pressable, StyleSheet, Text } from 'react-native'
import colors from '../../utils/colors'

const AddButton = ({ title, onPress }) => {
    return (
        <Pressable
            style={styles.container}
            onPress={onPress}
        >
            <Text style={styles.text}>
                {title}
            </Text>
        </Pressable>
    )
}

export default AddButton

const styles = StyleSheet.create({
    container: {
        backgroundColor: colors.botones,
        width: "70%",
        paddingVertical: 10,
        margin: 15,
        borderRadius: 10,
        borderWidth: 1,
        borderColor: colors.bordes
    },

    text: {
        color: "white",
        textAlign: "center",
        fontSize: 18,
    }
})