import { StyleSheet, Text, View, Pressable } from 'react-native'

import { Entypo } from "@expo/vector-icons"  //Iconos
import colors from '../../utils/colors'

const BackHome = ({selectedCategoryState}) => {

    const backHome = () => {
        try {
            selectedCategoryState("")
        } catch (error){ 
            console.log(error)
        }
      }

    return (
        <View style={styles.container}>
            <Pressable style={styles.iconos} onPress={backHome}>
                <Entypo name="home" size={35} color={colors.botones} />
            </Pressable>
        </View>
    )
}

export default BackHome

const styles = StyleSheet.create({
    container: {
        justifyContent: "center", 
        alignItems: "center",
        marginBottom: 5
    }
})