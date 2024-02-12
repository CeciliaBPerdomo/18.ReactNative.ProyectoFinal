import { StyleSheet, Text, View, Pressable } from 'react-native'

import { Entypo } from "@expo/vector-icons"  //Iconos
import colors from '../../utils/colors'

const BackHome = () => {
    return (
        <View style={styles.container}>
            <Pressable style={styles.iconos}>
                <Entypo name="home" size={30} color={colors.botones} />
            </Pressable>
        </View>
    )
}

export default BackHome

const styles = StyleSheet.create({
    container: {
        justifyContent: "center", 
        alignItems: "center",
        marginBottom: 2
    }
})