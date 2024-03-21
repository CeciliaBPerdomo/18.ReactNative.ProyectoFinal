import { FlatList, StyleSheet, View, Text } from 'react-native'
import OrdersItems from '../components/orders/OrdersItems'

// Redux, Firebase
import { useSelector } from 'react-redux'
import { useGetOrdersQuery } from '../app/services/orders'
import fonts from '../utils/fonts'
import colors from '../utils/colors'

const BooksOrders = ({ navigation }) => {
  const localId = useSelector((state) => state.auth.localId)
  const { data: orders } = useGetOrdersQuery(localId)

  if (orders && orders.length > 0) {
    return (
      <View style={styles.container}>
        <FlatList
          data={orders}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => <OrdersItems
            order={item}
            navigation={navigation}
          />}
        />
      </View>

    )
  } else {
    return (
      <View style={styles.containerCarritoVacio}>
        <Text style={styles.textoVacio}>Todavía no hay órdenes.</Text>
        <Text style={styles.textoVacio}>¿Qué esperas para comenzar a comprar?</Text>
        </View>
    )
  }
}

export default BooksOrders

const styles = StyleSheet.create({
  container: {
    backgroundColor: "white",
    flex: 1,
    marginBottom: 80
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