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
import { loginSchema } from '../../utils/validaciones/authSchema'
import { deleteSession, insertSession } from '../../utils/db/index'
import ModalMessage from '../../components/manejoErrores/ModalMessage'

const Login = ({ navigation }) => {

    const dispatch = useDispatch()

    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

    const [errorMail, setErrorMail] = useState("")
    const [errorPassword, setErrorPassword] = useState("")

    const [modalVisible, setModalVisible] = useState(false)
    const [triggerLogin] = useLoginMutation()

    const handlerOnClose = () => {
        setModalVisible(false)
    }

    const onSubmit = async () => {
        try {
            loginSchema.validateSync({ email, password })
            const { data, error } = await triggerLogin({ email, password })

            if (error) {
                setModalVisible(true)
            }

            await deleteSession()
            await insertSession(data)

            dispatch(setUser({
                email: data.email,
                idToken: data.idToken,
                localId: data.localId
            }))

        } catch (error) {
            setErrorMail("")
            setPassword("")

            switch (error.path) {
                case "email":
                    setErrorMail(error.message)
                    break
                case "password":
                    setErrorPassword(error.message)
                    break
                default:
                    break
            }
        }
    }

    return (
        <>
            <View style={styles.principal}>
                <View style={styles.container}>

                    <InputForm
                        label="E-mail: "
                        value={email}
                        onChangeText={(t) => setEmail(t)}
                        isSecure={false}
                        error={errorMail}
                    />

                    <InputForm
                        label="Contraseña :"
                        value={password}
                        onChangeText={(t) => setPassword(t)}
                        isSecure={true}
                        error={errorPassword}
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

            <ModalMessage
                text="E-mail o password inválidos"
                modalVisible={modalVisible}
                textButton="Vuelva a intentar"
                onClose={handlerOnClose}
            />
        </>
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