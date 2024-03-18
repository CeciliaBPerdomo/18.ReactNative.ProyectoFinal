import { StyleSheet, Image, View, Text } from 'react-native'
import { useSelector } from 'react-redux'

import AddButton from '../../components/forms/AddButton'
import { useGetImageQuery, useGetUserLocationQuery } from '../../app/services/profile'

const Perfil = ({ navigation }) => {
    const localId = useSelector((state) => state.auth.localId)
    const { data } = useGetImageQuery(localId)
    const {data: locationFormatted} = useGetUserLocationQuery(localId)

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

            <Text style={styles.texto}>
                {locationFormatted?.address}
            </Text>

            <AddButton
                title="Agregar imagen de perfil"
                onPress={() => navigation.navigate("ImageSelector")}
            />

            <AddButton
                title="Agregar dirección"
                onPress={() => navigation.navigate("LocationSelector")}
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
    },

    texto: {
        fontSize: 16,
        padding: 10,
        textAlign: "center",
        fontWeight: "bold"
    }
})