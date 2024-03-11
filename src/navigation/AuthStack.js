import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Header from '../components/Header';
import Login from '../screens/auth/Login';
import Register from '../screens/auth/Register';



const Stack = createNativeStackNavigator();

const AuthStack = () => {
    return (
        <Stack.Navigator
            initialRouteName='SignIn'
            screenOptions={({ navigation, route }) => {
                return {
                    header: () => {
                        return <Header
                            title={route.name === "SignIn" ? "Iniciar sesión" : "Registro"}
                            sub={route.name === "SignIn" ? "Encuentra tu próximo favorito 💜" : 
                            "Registrate para iniciar la aventura"}
                            navigation={navigation}
                        />
                    }
                }
            }}
        >

            <Stack.Screen
                name="SignIn"
                component={Login}
            />

            <Stack.Screen
                name='Register'
                component={Register}
            />

        </Stack.Navigator>
    )
}

export default AuthStack