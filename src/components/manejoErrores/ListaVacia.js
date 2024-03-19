import { StyleSheet, Text, View } from 'react-native'

const ListaVacia = ({ message }) => {
    return (
        <View style={styles.container}>
            <Text style={styles.errorMessage}>
                {message}
            </Text>
        </View>
    )
}

export default ListaVacia

const styles = StyleSheet.create({
    container: {
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "white",
    },
    
    errorMessage: {
        flex: 1,
        marginTop: 100,
        fontSize: 18,
        //marginBottom: 20,
        textAlign: "center",
        color: "red"
    }
})