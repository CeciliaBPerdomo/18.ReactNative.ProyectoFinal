import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Header from '../components/Header';
import Perfil from '../screens/auth/Perfil';

import ImageSelector from '../screens/auth/ImageSelector';
import LocationSelector from "../screens/auth/LocationSelector"

const Stack = createNativeStackNavigator();

const ProfileStack = () => {

    return (
        <Stack.Navigator
            initialRouteName='Profile'
            screenOptions={({ navigation }) => {
                return {
                    header: () => {
                        return <Header
                            title="Perfil"
                            navigation={navigation}
                        />
                    }
                }
            }}
        >
            <Stack.Screen
                name="Perfil"
                component={Perfil}
            />

            <Stack.Screen
                name="ImageSelector"
                component={ImageSelector}
            />

            <Stack.Screen
                name="LocationSelector"
                component={LocationSelector}
            />

        </Stack.Navigator>
    )
}

export default ProfileStack