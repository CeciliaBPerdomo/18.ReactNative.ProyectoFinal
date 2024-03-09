import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const bookstoreApi = createApi({
    reducerPath: "bookstoreApi",
    baseQuery: fetchBaseQuery({ baseUrl: "https://reactnative-mislibritos-default-rtdb.firebaseio.com" }), 
    endpoints: (builder) => ({
        getCategories: builder.query({
            query: () => "/categoria.json"
        })
    })
})

export const { useGetCategoriesQuery } = bookstoreApi