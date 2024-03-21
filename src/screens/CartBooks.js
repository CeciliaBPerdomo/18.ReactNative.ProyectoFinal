import { FlatList, Pressable, StyleSheet, Text, View } from 'react-native'
import fonts from '../utils/fonts'
import colors from '../utils/colors'

import CartBooks from '../components/cart/CartBooks'

// Redux
import { useSelector, useDispatch } from 'react-redux'
import { usePostOrdersMutation } from '../app/services/orders'
import { deleteCart } from '../features/cart/cartSlice'

const Cart = ({ navigation }) => {
  const dispatch = useDispatch()
  const cart = useSelector((state) => state.cart)
  const localId = useSelector((state) => state.auth.localId)
  const [triggerAddOrder] = usePostOrdersMutation()

  const handlerAppOrder = async () => {
    const createAt = new Date().toLocaleString()
    const order = {
      createAt,
      ...cart
    }
    // Guarda las ordenes
    await triggerAddOrder({ localId, order })
    dispatch(deleteCart())
    navigation.navigate("MisOrdenes")
  }

  if (cart.items && cart.items.length > 0) {
    return (
      <View style={styles.container}>
        <FlatList
          data={cart.items}
          keyExtractor={(item => item.id)}
          renderItem={({ item }) => <CartBooks item={item} />}
        />

        <View style={styles.confirmContainer}>
          <Pressable onPress={handlerAppOrder}>
            <Text style={styles.confirmText}>Confirmar</Text>
          </Pressable>
          <Text style={styles.confirmText}>Total: $ {cart.total}</Text>

        </View>

      </View>
    )
  } else {
    return (
      <View style={styles.containerCarritoVacio}>
        <Text style={styles.textoVacio}>Tu carrito esta vacío.</Text>
        <Text style={styles.textoVacio}>¿Qué esperas para comenzar a comprar?</Text>
        </View>
    )
  }
}

export default Cart

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "space-between",
    marginBottom: 90,
    backgroundColor: "white"
  },

  confirmContainer: {
    flexDirection: "row",
    backgroundColor: colors.botones,
    padding: 25,
    justifyContent: "space-between"
  },

  confirmText: {
    fontFamily: fonts.Playfair,
    fontSize: 18,
    color: colors.precio
  },

  containerCarritoVacio: {
    flex: 1, 
    backgroundColor: "white", 
    paddingVertical: 100,
    alignItems: "center",
  }, 
  
  textoVacio: {
    fontFamily: fonts.Playfair, 
    fontSize: 16,
    color: colors.primary
  }

})