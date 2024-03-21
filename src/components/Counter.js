import { Button, Pressable, StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'
import colors from '../utils/colors'
import { Feather, AntDesign } from '@expo/vector-icons';

const Counter = ({ handlerAddCartItem }) => {
    //const count = useSelector((state) => state.counter.value)   //accedo al estado global del valor del contador
    // const dispatch = useDispatch()

    //const [number, setNumber] = useState(0)
    const [count, setCount] = useState(1)

    return (
        <>
            <View style={styles.counterContainer}>

                <Pressable
                    style={styles.iconos}
                    onPress={() => setCount(count + 1)}
                >
                    <AntDesign name="pluscircleo" size={24} color="black" />
                </Pressable>

                <Text style={styles.texto}>
                    {count}
                </Text>

                <Pressable
                    style={styles.iconos}
                    onPress={() => setCount(count - 1)}
                >
                    <AntDesign name="minuscircleo" size={24} color="black" />
                </Pressable>

            </View>

            <View>
                <Pressable
                    style={styles.agregar}
                    onPress={() => handlerAddCartItem(count)}
                >
                    <Feather name="shopping-cart" size={24} color="white" />
                </Pressable>
            </View>

        </>
    )
}

export default Counter

const styles = StyleSheet.create({
    counterContainer: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center",
        width: 200,
    },

    agregar: {
        backgroundColor: colors.botones,
        padding: 12,
        borderRadius: 10,
        borderWidth: 1,
        borderColor: colors.bordes,
        marginTop: 15, 
        width: 140, 
        justifyContent: "center",
        alignItems: "center"
    },

    iconos: {
        justifyContent: "center",
        alignItems: "center",
        paddingHorizontal: 10,
        marginLeft: 18, 
        marginRight: 5
    },

    texto: {
        textAlign: "center",
        alignItems: "center",
        justifyContent: "center",
        fontSize: 16,
        marginLeft: 15
    }
})