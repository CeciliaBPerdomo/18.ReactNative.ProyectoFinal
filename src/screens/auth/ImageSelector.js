import { StyleSheet, Text, View, Image } from 'react-native'
import React, { useEffect, useState } from 'react'

// Camara device
import * as ImagePicker from 'expo-image-picker';

// Componentes
import AddButton from '../../components/forms/AddButton'

// Redux
import { useSelector } from 'react-redux';
import { useGetImageQuery, usePutImageMutation } from "../../app/services/profile"

const ImageSelector = ({navigation}) => {

    const [image, setImage] = useState("")
    const [triggerPutImage] = usePutImageMutation()

    const localId = useSelector((state) => state.auth.localId)
    const { data, isSuccess } = useGetImageQuery(localId)

    useEffect(() => {
        if (isSuccess && data) setImage(data.image)
    }, [isSuccess, data])

    const confirmImage = () => {
        triggerPutImage({ image, localId })
        navigation.goBack()
    }

    const pickImage = async () => {
        const { granted } = await ImagePicker.requestCameraPermissionsAsync()    // Permite usar la camara o no

        if (granted) {
            let result = await ImagePicker.launchCameraAsync({
                allowsEditing: true,
                aspect: [4, 3],
                quality: 0.3,
                base64: true
            })

            if (!result.canceled) {
                setImage("data:image/jpeg;base64," + result.assets[0].base64)
            }
        }

    }


    return (
        <View style={styles.container}>
            <Image
                source={
                    image ? { uri: image } : 
                    require("../../../assets/images/user.jpg")}
                style={styles.image}
                resizeMode='cover'
            />

            <AddButton
                title="Tomar foto"
                onPress={pickImage}
            />

            <AddButton
                title="Confirmar foto"
                onPress={confirmImage}
            />
        </View>
    )
}

export default ImageSelector

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center",
        backgroundColor: "white"
    },

    image: {
        marginTop: 20,
        width: 180,
        height: 180,
        borderRadius: 100
    }
})