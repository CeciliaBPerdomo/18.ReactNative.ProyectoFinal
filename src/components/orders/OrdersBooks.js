import { StyleSheet, Text, View, Image } from 'react-native'
import React from 'react'
import colors from '../../utils/colors'

const OrdersBooks = ({ item }) => {
    return (
        <View style={styles.container}>
            <Image
                source={{ uri: item.image }}
                style={styles.imagen}
                resizeMode="cover"
            />

            <View>
                <Text style={styles.texto}>{item.title}</Text>
                <Text style={styles.textoAutor}>Autor: {item.author}</Text>
                <Text style={styles.textoAutor}>Cantidad: {item.quantity}</Text>
                <Text style={styles.textoPrecio}>Precio: $ {item.price}</Text>            
            </View>
        </View>
    )
}

export default OrdersBooks

const styles = StyleSheet.create({
    container: {
        backgroundColor: colors.botones,
        padding: 10,
        borderRadius: 10,
        gap: 15,
        flexDirection: "row",
       margin: 12
    },

    imagen: {
        width: "30%",
        height: 140,
        borderRadius: 10,
        marginLeft: 15
    }, 

    texto: {
        fontSize: 14,
        fontWeight: "bold",
        marginVertical: 20
    }, 

    textoPrecio: {
        color: colors.precio,
        fontWeight: "bold",
    }
})