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
            if (session.rows.length){
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