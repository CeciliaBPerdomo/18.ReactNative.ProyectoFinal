import { FlatList, StyleSheet, View } from 'react-native'
import orders from "../data/orders.json"
import OrdersItems from '../components/orders/OrdersItems'

const BooksOrders = () => {
  return (
    <View style={styles.container}>
      <FlatList
        data={orders}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => <OrdersItems order={item} />}
      />
    </View>

  )
}

export default BooksOrders

const styles = StyleSheet.create({
  container: {
    backgroundColor: "white",
    flex: 1
  }
})