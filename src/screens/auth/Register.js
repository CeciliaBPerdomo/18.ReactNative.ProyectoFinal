import { StyleSheet, Text, View, Pressable } from 'react-native'
import React, { useState } from 'react'

import colors from '../../utils/colors'
import fonts from '../../utils/fonts'

import InputForm from '../../components/forms/InputForm'
import SubmitForm from '../../components/forms/SubmitForm'

// Redux, firebase
import { useRegistroMutation } from '../../app/services/auth'
import { setUser } from '../../features/auth/authSlice'
import { useDispatch } from 'react-redux'
import { registerSchema } from '../../utils/validaciones/authSchema'

// SQLite
import {deleteSession, insertSession} from "../../utils/db/index"

import ModalMessage from '../../components/manejoErrores/ModalMessage'

const Register = ({navigation}) => {

    const dispatch = useDispatch()

    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [confirmPassword, setConfirmPassword] = useState("")

    const [errorMail, setErrorMail] = useState("")
    const [errorPassword, setErrorPassword] = useState("")
    const [errorConfirm, setErrorConfirm] = useState("")

    const [modalVisible, setModalVisible] = useState(false)
    const [errorModal, setErrorModal] = useState("")

    const [ triggerRegistro ] = useRegistroMutation()

    const handlerOnClose = () => {
        setModalVisible(false)
    }

    const onSubmit = async () => {
        try {
            registerSchema.validateSync({email, password, confirmPassword})
            const { data, error } = await triggerRegistro({ email, password })

            if (error) {
                if (error.data.error.message == "EMAIL_EXISTS"){
                    setErrorModal("El usuario ya existe!")
                    setModalVisible(true)
                } else {
                    setErrorModal("Algo salió mal durante el registro!")
                    setModalVisible(true)
                }
            }
            
            //SQLite
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
            setErrorConfirm("")

            switch (error.path) {
                case "email":
                    setErrorMail(error.message)
                    break
                case "password":
                    setErrorPassword(error.message)
                    break
                case "confirmPassword":
                    setErrorConfirm(error.message)
                    break
                default:
                    break
            }
        }
    }


    return (
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
                    label="Contraseña: "
                    value={password}
                    onChangeText={(t) => setPassword(t)}
                    isSecure={true}
                    error={errorPassword}
                />

                <InputForm
                    label="Confirmar contraseña: "
                    value={confirmPassword}
                    onChangeText={(t) => setConfirmPassword(t)}
                    isSecure={true}
                    error={errorConfirm}
                />

                <SubmitForm
                    onPress={onSubmit} 
                    title="Registrarme"
                />
                <Text style={styles.sub}>Ya tienes cuenta?</Text>

                <Pressable onPress={() => navigation.navigate("SignIn")}>
                    <Text style={styles.subLink}>Inicia sesión</Text>
                </Pressable>
            </View>

            <ModalMessage
                text={errorModal}
                modalVisible={modalVisible}
                textButton="Vuelva a intentar"
                onClose={handlerOnClose}
            />

        </View>
    )
}

export default Register

const styles = StyleSheet.create({
    principal: {
        flex: 1,
        justifyContent: "flex-start",
        alignItems: "center",
        backgroundColor: "white",
    },

    container: {
        marginTop: 20,
        width: "90%",
        backgroundColor: colors.iconos,
        gap: 15,
        borderWidth: 1,
        borderColor: colors.bordes,
        borderRadius: 10,
        justifyContent: "center",
        alignItems: "center",
        paddingVertical: 20
    },

    title: {
        fontSize: 22,
        fontFamily: fonts.Playfair
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