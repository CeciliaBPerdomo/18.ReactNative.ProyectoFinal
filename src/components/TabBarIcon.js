import { StyleSheet, Text, View } from 'react-native'
import { Entypo } from "@expo/vector-icons"
import colors from "../utils/colors"

const TabBarIcon = ({ title, icono, focused }) => {
    return (
        <View style={styles.container}>
            <Entypo
                name={icono}
                size={25}
                color={focused ? "black": colors.precio}
            />
            <Text
                style={[styles.text, focused && styles.textFocused]}
            >
                {title}
            </Text>
        </View>
    )
}

export default TabBarIcon

const styles = StyleSheet.create({
    container: {
        alignItems: "center"
    },

    text: {
        color: colors.precio,
        textAlign: "center",
        fontSize: 15
    },
    
    textFocused: {
        color: "black",
    }
})