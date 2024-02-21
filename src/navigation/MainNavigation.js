import { StyleSheet, Text, View } from 'react-native'

// Navegacion
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

// Screens
import Home from "../screens/Home"
import Books from "../screens/Books"
import BooksDetail from '../screens/BooksDetail';

// Encabezado 
import Header from '../components/Header';

const Stack = createNativeStackNavigator();

const MainNavigation = () => {
    return (
        <>
            <NavigationContainer>

                <Stack.Navigator
                    initialRouteName="Home"
                    screenOptions={({ route, navigation }) => {
                        return {
                            header: () => {
                                return <Header
                                    navigation={navigation}
                                    // Titulo
                                    title={route.name == "Home" ? "Bienvenid@s" :
                                        route.name === "Books" ? route.params.categorySelected :
                                            route.name === "BooksDetail" ? "Tu libro elegido" : "Bienvenid@s"
                                    }
                                    // Sub-titulo
                                    sub={route.name == "Home" ? "¿Qué vas a leer hoy?" :
                                        route.name == "Books" ? "Todo lo que querés leer sobre: " + route.params.categorySelected.toLowerCase() + "." :
                                            route.name === "BooksDetail" ? "Buena lectura" : null
                                    }
                                />
                            }
                        }
                    }}
                >

                    <Stack.Screen
                        name="Home"
                        component={Home}
                    />

                    <Stack.Screen
                        name="Books"
                        component={Books}
                    />

                    <Stack.Screen
                        name="BooksDetail"
                        component={BooksDetail}
                    />


                </Stack.Navigator>

            </NavigationContainer>
        </>
    )
}

export default MainNavigation

const styles = StyleSheet.create({})