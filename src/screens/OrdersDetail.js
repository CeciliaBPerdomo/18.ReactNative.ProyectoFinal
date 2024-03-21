import { StyleSheet, Text, View, FlatList } from 'react-native'
import colors from '../utils/colors'
import OrdersBooks from '../components/orders/OrdersBooks'

const OrdersDetail = ({ route, navigation }) => {
    const { order } = route.params
    return (
        <>
            <View style={styles.container}>
                <Text style={styles.texto}>Fecha: </Text>
                <Text style={styles.subtexto}>{order.createAt}</Text>

                <Text style={styles.texto}>Total orden:</Text>
                <Text style={styles.subtextoprecio}>$ {order.total}</Text>

            </View>

            <View style={styles.containerbooks}>

                <FlatList
                    data={order.items}
                    key={item => item.id}
                    renderItem={({ item }) =>
                        <OrdersBooks
                            item={item}
                            navigation={navigation}
                        />
                    }
                />
            </View>
        </>
    )
}

export default OrdersDetail

const styles = StyleSheet.create({
    container: {
        backgroundColor: colors.botones,
        borderWidth: 2,
        borderColor: colors.bordes,
        margin: 12,
        padding: 10,
        borderRadius: 10,
    },

    containerbooks: {
        marginBottom: 250,
    },

    texto: {
        fontSize: 18,
        color: colors.primary
    },

    subtexto: {
        fontSize: 18,
        fontWeight: "bold",
        marginBottom: 10,
        color: colors.precio
    },

    subtextoprecio: {
        fontSize: 18,
        fontWeight: "bold",
        marginBottom: 10,
        color: colors.precio
    }
})