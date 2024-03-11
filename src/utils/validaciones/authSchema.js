import { object, string, ref } from "yup"

export const registerSchema = object().shape({
    password: string().required("La contraseña es requerida").min(6, "Mínimo 6 caracteres"),
    confirmPassword: string().required("La confirmación de contraseña es requerida").oneOf([ref("password")], "El password no coincide"),
    email: string().required("El e-mail es requerido").email("No es un mail válido")
})

export const loginSchema = object().shape({
    password: string().required("La contraseña es requerida").min(6, "Mínimo 6 caracteres"),
    email: string().required("El e-mail es requerido").email("No es un mail válido")
})