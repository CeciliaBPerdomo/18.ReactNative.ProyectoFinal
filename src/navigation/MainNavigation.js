import { StyleSheet, Text, View } from 'react-native'

// Navegacion
import { NavigationContainer } from '@react-navigation/native';
import BookStack from './BookStack';

const MainNavigation = () => {
    return (
        <>
            <NavigationContainer>
                <BookStack />
            </NavigationContainer>
        </>
    )
}

export default MainNavigation

const styles = StyleSheet.create({})