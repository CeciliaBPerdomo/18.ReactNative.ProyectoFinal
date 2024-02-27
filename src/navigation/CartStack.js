import { StyleSheet, Text, View } from 'react-native'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import CartBook from "../components/CartBooks"

// Encabezado 
import Header from '../components/Header';

const Stack = createNativeStackNavigator();

const CartStack = () => {
  return (
    <Stack.Navigator
            initialRouteName='Cart'
            screenOptions={({ navigation }) => {
                return {
                    header: () => {
                        return <Header
                            title="Carrito"
                            sub="Tus compras"
                            navigation={navigation}
                        />
                    }
                }
            }}
        >
             <Stack.Screen
                name="Cart"
                component={CartBook}
            />
        </Stack.Navigator>
  )
}

export default CartStack

const styles = StyleSheet.create({})