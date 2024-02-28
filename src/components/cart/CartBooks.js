import { StyleSheet, Text, View, Image, Pressable } from 'react-native'
import colors from '../../utils/colors'
import fonts from '../../utils/fonts'
import { Entypo } from "@expo/vector-icons"

// Redux
import { useDispatch } from 'react-redux'
import { deleteCartItem } from '../../features/cart/cartSlice'

const CartBooks = ({ item }) => {
  const dispatch = useDispatch()

  return (
    <View style={styles.card}>
      <Image
        source={{ uri: item.image }}
        width={75}
        height={75}
        style={styles.imagen}
      />
      <View style={styles.textContainer}>
        <Text style={styles.text}>{item.title}</Text>
        <Text style={styles.text2}>Autor: {item.author}</Text>
        <Text style={styles.text2}>Cantidad: {item.quantity}</Text>
        <Text style={styles.text2}>Precio: $ {item.price}</Text>
      </View>

      <Pressable onPress={() => dispatch(deleteCartItem(item.id))}>
        <Entypo name="trash" size={30} color="black" />
      </Pressable>
    </View>
  )

}

export default CartBooks

const styles = StyleSheet.create({
  card: {
    backgroundColor: colors.botones,
    padding: 20,
    margin: 10,
    borderWidth: 2,
    borderRadius: 10,
    borderColor: colors.bordes,
    flexDirection: "row",
    justifyContent: "space-between",
    height: 100,
    alignItems: "center"
  },

  textContainer: {
    width: "65%"
  },

  text: {
    color: colors.primary,
    fontSize: 16,
    fontFamily: fonts.Playfair
  },

  text2: {
    fontSize: 14,
  },

  imagen: {
    marginRight: 8
  }
})