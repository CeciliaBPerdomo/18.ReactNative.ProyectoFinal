import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const bookstoreApi = createApi({
    reducerPath: "bookstoreApi",
    baseQuery: fetchBaseQuery({ baseUrl: "https://reactnative-mislibritos-default-rtdb.firebaseio.com" }),
    endpoints: (builder) => ({
        // Categorias
        getCategories: builder.query({
            query: () => "/categoria.json"
        }),

        // Libros por categoria
        getBooksbyCategories: builder.query({
            query: (categoria) => `/libros.json?orderBy="category"&equalTo="${categoria}"`,
            transformResponse: (response) => {
                const data = Object.values(response) // Lo convierte en un array
                return data
            }
        }), 

        // Libros por id
        getProductById: builder.query({
            query: (id) => `libros/${id}.json`
        })
    })
})

export const { useGetCategoriesQuery, useGetBooksbyCategoriesQuery, useGetProductByIdQuery } = bookstoreApi