import { StyleSheet, Text, View } from 'react-native'
import React, { useState, useEffect } from 'react'

// .env
import Constants from "expo-constants"

// Componentes
import AddButton from '../../components/forms/AddButton'
import MapPreview from '../../components/MapPreview'

// Expo Location
import * as Location from "expo-location"

// .env
const MAP_KEY = Constants.expoConfig.extra.MAP_API_KEY;

const LocationSelector = ({ navigation }) => {
    const [location, setLocation] = useState({
        latitude: "",
        longitude: ""
    })

    const [errorMsg, setErrorMsg] = useState(null)
    const [address, setAdress] = useState("Colonia")

    useEffect(() => {
        // Funcion asincronica anonima
        (async () => {
            let { status } = await Location.requestForegroundPermissionsAsync()
            if (status != "granted") {
                setErrorMsg("Permisos denegado")
                return
            } else {
                let location = await Location.getCurrentPositionAsync()
                setLocation({
                    latitude: location.coords.latitude,
                    longitude: location.coords.longitude
                })
            }
        })()

    }, [])

    useEffect(() => {
        (async () => {
            if (location.latitude) {
                const response = await fetch(`https://maps.googleapis.com/maps/api/geocode/json?latlng=${location.latitude},${location.longitude}&key=${MAP_KEY}`)
                const data = await response.json()
                setAdress(data.results[0].formatted_address)
            }
        })()
    }, [location])


    const onConfirmAddress = async () => {
        console.log("Confirmado")

        // const locationFormatted = {
        //     address,
        //     location
        // }

        // await triggerUserLocation({
        //     localId,
        //     locationFormatted
        // })

        // navigation.goBack()
    }

    return (
        <View style={styles.container}>
            <MapPreview
                // latitude="-34.463481"
                // longitude="-57.832339"
                latitude={location.latitude}
                longitude={location.longitude}
            />

            <Text style={styles.text}>
                {address}
            </Text>


            <AddButton
                title="Confirmar localización"
                onPress={onConfirmAddress}
            />
        </View>
    )
}

export default LocationSelector

const styles = StyleSheet.create({
    container: {
        alignItems: "center",
        gap: 10,
        backgroundColor: "white",
        flex: 1
    },
    text: {
        fontSize: 16,
        textAlign: "center",
        fontWeight: "bold"
    },
})