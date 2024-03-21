import { StyleSheet } from 'react-native'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import BookOrders from "../screens/BooksOrders"

// Encabezado 
import Header from '../components/Header';
import OrdersDetail from '../screens/OrdersDetail';

const Stack = createNativeStackNavigator();

const OrdersStack = () => {
    return (
        <Stack.Navigator
            initialRouteName="Home"
            screenOptions={({ route, navigation }) => {
                return {
                    header: () => {
                        return <Header
                            navigation={navigation}
                            title="Órdenes"
                            sub="Todas tus compras"
                        />
                    }
                }
            }}
        >
            <Stack.Screen
                name="MisOrdenes"
                component={BookOrders}
            />

            <Stack.Screen 
                name="BookOrdersDetail"
                component={OrdersDetail}
            />
        </Stack.Navigator>
    )
}

export default OrdersStack

const styles = StyleSheet.create({})