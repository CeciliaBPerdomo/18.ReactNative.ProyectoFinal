// Navegacion
import { NavigationContainer } from '@react-navigation/native';
import TabNavigation from './TabNavigation';
import AuthStack from './AuthStack';

import { useSelector } from 'react-redux';
import { useEffect } from 'react';

import { fetchSession } from '../utils/db';
import { useDispatch } from 'react-redux';
import { setUser } from '../features/auth/authSlice';


const MainNavigation = () => {
    
    const user = useSelector((state) => state.auth)
    const dispatch = useDispatch()

    useEffect(() => {
        (async() => {
            const session = await fetchSession() 
            
            // Deslogueo automatico 
            const updateAt = session.rows._array[0].updateAt
            const now = Math.floor(Date.now() / 1000)
            const timeSeesion = now - updateAt

            if(timeSeesion < 3600) {
                const user = session.rows._array[0]  
                dispatch(setUser(user))
            }
        })()
    }, [])


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