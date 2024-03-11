// Navegacion
import { NavigationContainer } from '@react-navigation/native';
import TabNavigation from './TabNavigation';
import AuthStack from './AuthStack';

import { useState } from 'react';


const MainNavigation = () => {
    const [token, setToken] = useState("")
    return (
        <>
            <NavigationContainer>
                {
                    token ?
                        <TabNavigation />
                        :
                        <AuthStack />
                }
            </NavigationContainer>
        </>
    )
}

export default MainNavigation