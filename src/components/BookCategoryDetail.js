import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import colors from '../utils/colors'
import { Image } from 'react-native'

const BookCategoryDetail = ({ item }) => {
    return (
        <View style={styles.container}>

            <Image
                source={{ uri: item.image }}
                style={styles.imagen}
                resizeMode="cover"
            />

            <View>
                <Text style={styles.texto}>{item.title}</Text>
                <Text style={styles.textoAutor}>{item.author}</Text>
                <Text style={styles.textoPrecio}>$ {item.price}</Text>            
            </View>

        </View>
    )
}

export default BookCategoryDetail

const styles = StyleSheet.create({
    container: {
        backgroundColor: colors.botones,
        width: "80%",
        marginHorizontal: "10%",
        padding: 10,
        marginVertical: 10,
        borderRadius: 10,
        gap: 20,
        alignItems: "center",
        flexDirection: "row"
    },

    imagen: {
        width: 90,
        height: 90,
        borderRadius: 5
    }, 

    texto: {
        fontSize: 14,
        fontWeight: "bold"
    }, 
    
    textoAutor: {

    }, 

    textoPrecio: {
        color: colors.precio,
        fontWeight: "bold",
    }
})