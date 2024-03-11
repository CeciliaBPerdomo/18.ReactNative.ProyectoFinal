import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
const API_KEY = "AIzaSyCe7ACT7eiC9eETyuUi4sErpn--aNFNLfY"

export const authApi = createApi({
    reducerPath: "authApi",
    baseQuery: fetchBaseQuery({ baseUrl: "https://identitytoolkit.googleapis.com/v1/"}),
    endpoints: (builder) => ({
        //Registro de usuarios
        registro: builder.mutation({
            query: (user) => ({
                url: `accounts:signUp?key=${API_KEY}`,
                method: "POST", 
                body: user
            })
        }), 

        // Inicio de sesion
        login: builder.mutation({
            query: (user) => ({
                url: `accounts:signInWithPassword?key=${API_KEY}`,
                method: "POST", 
                body: user
            })
        })
    })
})

export const { useRegistroMutation, useLoginMutation } = authApi