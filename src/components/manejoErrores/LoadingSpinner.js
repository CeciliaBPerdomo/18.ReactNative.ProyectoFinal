import { ActivityIndicator, StyleSheet, Text, View } from 'react-native'


const LoadingSpinner = () => {
    return (
        <View style={styles.container}>
            <ActivityIndicator
                size={80}
                color="black"
            />
        </View>
    )
}

export default LoadingSpinner

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "white",
        alignItems: "center",
        justifyContent: "center",
        marginTop: 80
    }
})