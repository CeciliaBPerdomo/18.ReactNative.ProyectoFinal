import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import AddButton from '../forms/AddButton'

const ErrorCarga = ({ message, textButton, onRetry }) => {
    return (
        <View style={styles.container}>
            <Text style={styles.errorMessage}>
                {message}
            </Text>
            <AddButton
                title={textButton}
                onPress={onRetry}
            />
        </View>
    )
}

export default ErrorCarga

const styles = StyleSheet.create({

    container: {
        justifyContent: "center",
        alignItems: "center", 
        height: "100%"
    },

    errorMessage: {
        fontSize: 18,
        textAlign: "center",
        color: "red"
    }
})