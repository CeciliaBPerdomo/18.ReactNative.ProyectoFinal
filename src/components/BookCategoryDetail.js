import { Pressable, StyleSheet, Text, View, Image } from 'react-native'
import colors from '../utils/colors'


const BookCategoryDetail = ({ item, navigation }) => {
    return (
        <View>
            <Pressable 
                onPress={() => navigation.navigate("BooksDetail", {libroId: item.id})}
                style={styles.container}
            >

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
            </Pressable>
        </View>
    )
}

export default BookCategoryDetail

const styles = StyleSheet.create({
    container: {
        backgroundColor: colors.botones,
        marginHorizontal: "10%",
        padding: 10,
        marginVertical: 10,
        borderRadius: 10,
        gap: 15,
        flexDirection: "row",
        height: 160
    },

    imagen: {
        width: 100,
        height: 140,
        borderRadius: 5,
    }, 

    texto: {
        fontSize: 14,
        fontWeight: "bold",
        marginVertical: 25
    }, 

    textoPrecio: {
        color: colors.precio,
        fontWeight: "bold",
    }
})