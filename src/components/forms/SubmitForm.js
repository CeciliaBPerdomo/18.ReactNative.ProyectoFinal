import { Pressable, StyleSheet, Text, View } from 'react-native'
import colors from '../../utils/colors'

const SubmitForm = ({ title, onPress }) => {
    return (
        <Pressable
        style={styles.button}
            onPress={onPress}
        >
            <Text style={styles.texto}>
                {title}
            </Text>

        </Pressable>
    )
}

export default SubmitForm

const styles = StyleSheet.create({
    button: {
        width: "60%",
        backgroundColor: colors.botones,
        padding: 10,
        alignItems: "center",
        borderWidth: 1,
        borderColor: colors.bordes,
        borderRadius: 10
    },
    texto: {
        textAlign: "center",
        color: "white",
        fontSize: 18
    },
})