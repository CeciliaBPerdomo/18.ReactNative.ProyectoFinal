import { FlatList, StyleSheet, View } from 'react-native'
// import orders from "../data/orders.json"
import OrdersItems from '../components/orders/OrdersItems'

// Redux, Firebase
import { useSelector } from 'react-redux'
import { useGetOrdersQuery } from '../app/services/orders'

const BooksOrders = ({navigation}) => {
  const localId = useSelector((state) => state.auth.localId)
  const { data: orders } = useGetOrdersQuery(localId)

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
    flex: 1,
    marginBottom: 80
  }
})