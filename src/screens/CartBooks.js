import { FlatList, Pressable, StyleSheet, Text, View } from 'react-native'
import fonts from '../utils/fonts'
import colors from '../utils/colors'

import CartBooks from '../components/cart/CartBooks'
import { useSelector } from 'react-redux'

const Cart = () => {
  const cart = useSelector((state) => state.cart)

  return (
    <View style={styles.container}>
  
      <FlatList
        data={cart.items}
        keyExtractor={(item => item.id)}
        renderItem={({ item }) => <CartBooks item={item} />}
      />

      <View style={styles.confirmContainer}>
        <Pressable>
          <Text style={styles.confirmText}>Confirmar</Text>
        </Pressable>
        <Text style={styles.confirmText}>Total: $ {cart.total}</Text>

      </View>

    </View>
  )
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

})