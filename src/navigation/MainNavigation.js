// Navegacion
import { NavigationContainer } from '@react-navigation/native';
import TabNavigation from './TabNavigation';
import AuthStack from './AuthStack';

import { useSelector } from 'react-redux';


const MainNavigation = () => {

    const user = useSelector((state) => state.auth)

    return (
        <>
            <NavigationContainer>
                {
                    user.idToken ?
                        <TabNavigation />
                        :
                        <AuthStack />
                }
            </NavigationContainer>
        </>
    )
}

export default MainNavigation