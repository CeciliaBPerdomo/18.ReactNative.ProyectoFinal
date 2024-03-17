import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

// .env 
// import Constants from "expo-constants"
// const FIREBASE_KEY = Constants.expoConfig.extra.FIREBASE_KEY

export const ordersApi = createApi({
    reducerPath: "ordersApi",
    baseQuery: fetchBaseQuery({ baseUrl: "https://reactnative-mislibritos-default-rtdb.firebaseio.com/" }),
    tagTypes: ["Orders"],
    endpoints: (builder) => ({
        postOrders: builder.mutation({
            query: ({ localId, order }) => ({
                url: `orders/${localId}.json`,
                method: "POST",
                body: order
            }),
            //Controla si se actualizo las ordenes
            invalidatesTags: ["Orders"]
        }),

        getOrders: builder.query({
            query: (localId) => `orders/${localId}.json`,
            transformResponse: (response) => {
                const data = Object.entries(response).map((item) => {
                    return {
                        id: item[0],
                        ...item[1]
                    }
                })
                return data
            },
            //Controla si se actualizo las ordenes
            providesTags: ["Orders"]
        })
    })
})

export const {
    usePostOrdersMutation,
    useGetOrdersQuery
} = ordersApi