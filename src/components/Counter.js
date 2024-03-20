import { Button, StyleSheet, Text, TextInput, View } from 'react-native'
import React, { useState } from 'react'
// import { useSelector, useDispatch } from 'react-redux'
// import { decrement, increment } from '../features/counter/counterSlice'


const Counter = ({ handlerAddCartItem }) => {
    //const count = useSelector((state) => state.counter.value)   //accedo al estado global del valor del contador
   // const dispatch = useDispatch()

    //const [number, setNumber] = useState(0)
    const [count, setCount] = useState(1)

    return (
        <View style={styles.counterContainer}>

            <Button
                title="+"
                onPress={() => setCount(count + 1)}
            ></Button>

           <Text>
            {count}
           </Text>

            <Button title="-"
                onPress={() => setCount(count - 1)}
            ></Button>

            <View>
                <Button
                    title="🛒"
                    onPress={() => handlerAddCartItem(count)}
                // dispatch(incrementByAmount(number))}
                ></Button>
            </View>


        </View>
    )
}

export default Counter

const styles = StyleSheet.create({
    counterContainer: {
        flexDirection: "row",
        justifyContent: "space-around",
        alignItems: "center",
        margin: 10,
        width: 200,
    },

    input: {
        borderWidth: 2,
        width: 50,
        textAlign: "center"
    }
})