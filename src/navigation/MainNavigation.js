import { StyleSheet, Text, View } from 'react-native'

// Navegacion
import { NavigationContainer } from '@react-navigation/native';

// Bottoms Tabs
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import BookStack from './BookStack';
import CartBooks from '../components/CartBooks';
import BookOrders from '../components/BookOrders';

import TabBarIcon from '../components/TabBarIcon';
import CartStack from './CartStack';
import OrdersStack from './OrdersStack';

const Tab = createBottomTabNavigator();


const MainNavigation = () => {
    return (
        <>
            <NavigationContainer>
                <Tab.Navigator
                    initialRouteName='BookStack'
                    screenOptions={{
                        headerShown: false,         // No muestra el encabezado del tab
                        tabBarShowLabel: false,     // No muestra el texto del tab
                        tabBarStyle: styles.tabBar,
                    }}
                >

                    <Tab.Screen
                        name="BookStack"
                        component={BookStack}
                        options={{
                            tabBarIcon: ({ focused }) => <TabBarIcon
                                title="Libros"
                                icono="home"
                                focused={focused} />
                        }}
                    />

                    <Tab.Screen
                        name="Cart"
                        component={CartStack}
                        options={{
                            tabBarIcon: ({ focused }) => <TabBarIcon
                                title="Carrito"
                                icono="shopping-cart"
                                focused={focused} />
                        }}
                    />

                    <Tab.Screen
                        name="Orders"
                        component={OrdersStack}
                        options={{
                            tabBarIcon: ({ focused }) => <TabBarIcon
                                title="Órdenes"
                                icono="list"
                                focused={focused} />
                        }}
                    />

                </Tab.Navigator>
            </NavigationContainer>
        </>
    )
}

export default MainNavigation

const styles = StyleSheet.create({})