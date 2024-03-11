import { StyleSheet, Text, View, Pressable } from 'react-native'
import React, { useState } from 'react'

import InputForm from '../../components/forms/InputForm'
import SubmitForm from '../../components/forms/SubmitForm'

import colors from '../../utils/colors'
import fonts from '../../utils/fonts'

// Redux, firebase
import { useLoginMutation } from '../../app/services/auth'
import { useDispatch } from 'react-redux'
import { setUser } from '../../features/auth/authSlice'

const Login = ({ navigation }) => {

    const dispatch = useDispatch()

    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

    const [ triggerLogin ] = useLoginMutation()

    const onSubmit = async () => {
        const { data } = await triggerLogin({email, password})
        dispatch(setUser({
            email: data.email,
            idToken: data.idToken
        }))
    }

    return (
        <View style={styles.principal}>
            <View style={styles.container}>

                <InputForm
                    label="E-mail: "
                    value={email}
                    onChangeText={(t) => setEmail(t)}
                    isSecure={false}
                    error=""
                />

                <InputForm
                    label="Contraseña :"
                    value={password}
                    onChangeText={(t) => setPassword(t)}
                    isSecure={true}
                    error=""
                />

                <SubmitForm
                    title={"Iniciar sesión"}
                    onPress={onSubmit}
                />

                <Text style={styles.sub}>No tienes cuenta?</Text>

                <Pressable onPress={() => navigation.navigate("Register")}>
                    <Text style={styles.subLink}>Registrate</Text>
                </Pressable>

            </View>
        </View>
    )
}

export default Login

const styles = StyleSheet.create({
    principal: {
        flex: 1,
        backgroundColor: "white",
        justifyContent: "flex-start",
        alignItems: "center",
    },
    
    container: {
        marginTop: 20,
        width: "90%",
        backgroundColor: colors.iconos,
        gap: 15,
        justifyContent: "center",
        alignItems: "center",
        paddingVertical: 20,
        borderWidth: 1,
        borderColor: colors.bordes,
        borderRadius: 15
    },

    sub: {
        fontSize: 14,
        fontFamily: fonts.Playfair
    },

    subLink: {
        fontSize: 14,
        fontFamily: fonts.Playfair, 
        color: colors.primary
    },
})