import { Button, StyleSheet, Text, TextInput, View } from 'react-native'
import React, { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { decrement, increment } from '../features/counter/counterSlice'

const Counter = () => {
    const count = useSelector((state) => state.counter.value)   //accedo al estado global del valor del contador
    const dispatch = useDispatch()

    const [number, setNumber] = useState(0)

    return (
        <View style={styles.counterContainer}>
            <Button title="Aumentar"
                onPress={() => dispatch(increment())}
            ></Button>

            <Text>{count}</Text>

            <Button title="Disminuir"
                onPress={() => dispatch(decrement())}
            ></Button>

            <TextInput style={styles.input} onChangeText={(t) => setNumber(parseInt(t))} />

            <Button title="Monto"
            // onPress={() => dispatch(incrementByAmount(number))}
            ></Button>
            
        </View>
    )
}

export default Counter

const styles = StyleSheet.create({
    counterContainer: {
        flexDirection: "row",
        justifyContent: "space-around",
        alignItems: "center",
        margin: 10
    },

    input: {
        borderWidth: 2,
        width: 50
    }
})