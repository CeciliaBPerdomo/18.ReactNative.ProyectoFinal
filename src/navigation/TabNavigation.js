import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

import colors from '../utils/colors';

// Bottoms Tabs
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import BookStack from './BookStack';

import TabBarIcon from '../components/TabBarIcon';
import CartStack from './CartStack';
import OrdersStack from './OrdersStack';
import ProfileStack from "./ProfileStack"

const Tab = createBottomTabNavigator();

const TabNavigation = () => {
    return (
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

            <Tab.Screen
                name="Profile"
                component={ProfileStack}
                options={{
                    tabBarIcon: ({ focused }) => <TabBarIcon
                        title="Perfil"
                        icono="users"
                        focused={focused} />
                }}
            />

        </Tab.Navigator>
    )
}

export default TabNavigation

const styles = StyleSheet.create({
    tabBar: {
        height: 80,
        shadowColor: "black",
        position: "absolute",
        elevation: 4,
        backgroundColor: colors.iconos
    }
})