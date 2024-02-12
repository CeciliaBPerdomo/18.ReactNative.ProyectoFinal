import { StyleSheet, View, TextInput, Keyboard, Pressable, Text } from 'react-native'
import { useState } from 'react'

import { AntDesign } from "@expo/vector-icons"  //Iconos
import colors from '../../utils/colors'


const SearchBar = ({ handlerKeyWord }) => {
    const [input, setInput] = useState("")
    const [error, setError] = useState("")

    const handlerInput = (t) => {
        setInput(t)
    }

    const busqueda = () => {
        const expression = /[/.*@.*\(.*\).*/]/  //Revisa que no tenga esas expresiones regulares
        if (expression.test(input)) {
            setError("Escriba el libro que desea buscar")
            return
        } else {
            handlerKeyWord(input)
            Keyboard.dismiss()
            setError("")
        }
    }

    const reset = () => {
        handlerKeyWord("")
        handlerInput("")
        setError("")
    }

    return (
        <View style={styles.container}>

            <TextInput
                placeholder='Buscar'
                style={styles.input}
                value={input}
                onChangeText={handlerInput}
            />

            {/* Lupa */}
            <Pressable onPress={busqueda} style={styles.iconos}>
                <AntDesign name="search1" size={30} color={colors.iconos} />
            </Pressable>

            {/* Cruz */}
            <Pressable onPress={reset}>
                <AntDesign name="closecircle" size={30} color={colors.iconos} />
            </Pressable>

            {error ?
                <Text style={styles.errorText}>{error}</Text>
                : null
            }

        </View>
    )
}

export default SearchBar

const styles = StyleSheet.create({
    container: {
        backgroundColor: colors.botones,
        alignItems: "center",
        flexDirection: "row",
        padding: 15,
        marginBottom: 10
    },

    input: {
        flex: 1,
        borderWidth: 2,
        paddingHorizontal: 10,
        paddingVertical: 5,
        borderRadius: 5,
        borderColor: colors.bordes,
        marginRight: 5
    },

    errorText: {
        backgroundColor: colors.botones,
        color: "red",
        paddingHorizontal: 10,
        paddingVertical: 2
    },

    iconos: {
        marginRight: 3
    }
})