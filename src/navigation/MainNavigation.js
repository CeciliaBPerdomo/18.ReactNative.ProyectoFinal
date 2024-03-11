import { StyleSheet, Text, View } from 'react-native'

// Navegacion
import { NavigationContainer } from '@react-navigation/native';

import TabNavigation from './TabNavigation';



const MainNavigation = () => {
    return (
        <>
            <NavigationContainer>
                <TabNavigation />
            </NavigationContainer>
        </>
    )
}

export default MainNavigation