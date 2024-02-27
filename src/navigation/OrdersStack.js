import { StyleSheet, Text, View } from 'react-native'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import BookOrders from "../components/BookOrders"

// Encabezado 
import Header from '../components/Header';

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
                name="Orders"
                component={BookOrders}
            />
        </Stack.Navigator>
    )
}

export default OrdersStack

const styles = StyleSheet.create({})