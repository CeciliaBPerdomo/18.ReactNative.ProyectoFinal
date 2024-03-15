import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

// .env 
import Constants from "expo-constants"

const FIREBASE_KEY = Constants.expoConfig.extra.FIREBASE_KEY

export const authApi = createApi({
    reducerPath: "authApi",
    baseQuery: fetchBaseQuery({ baseUrl: "https://identitytoolkit.googleapis.com/v1/"}),
    endpoints: (builder) => ({
        //Registro de usuarios
        registro: builder.mutation({
            query: (user) => ({
                url: `accounts:signUp?key=${FIREBASE_KEY}`,
                method: "POST", 
                body: user
            })
        }), 

        // Inicio de sesion
        login: builder.mutation({
            query: (user) => ({
                url: `accounts:signInWithPassword?key=${FIREBASE_KEY}`,
                method: "POST", 
                body: user
            })
        })
    })
})

export const { useRegistroMutation, useLoginMutation } = authApi