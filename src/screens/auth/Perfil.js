import { StyleSheet, Image, View } from 'react-native'
import React from 'react'
import { useSelector } from 'react-redux'
import colors from '../../utils/colors'
import AddButton from '../../components/forms/AddButton'
import { useGetImageQuery } from '../../app/services/profile'

const Perfil = ({ navigation }) => {
    const localId = useSelector((state) => state.auth.localId)
    const { data } = useGetImageQuery(localId)

    return (
        <View style={styles.container}>
            <Image
                source={
                    data ? { uri: data.image } :
                    require("../../../assets/images/user.jpg")
                }
                style={styles.image}
                resizeMode='cover'
            />

            <AddButton
                title="Agregar imagen de perfil"
                onPress={() => navigation.navigate("ImageSelector")}
            />
        </View>
    )
}

export default Perfil

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center",
        backgroundColor: "white",
    },

    image: {
        marginTop: 20,
        width: 180,
        height: 180,
        borderRadius: 100
    }
})