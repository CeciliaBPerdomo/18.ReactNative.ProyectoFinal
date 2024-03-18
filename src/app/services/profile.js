import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const profileApi = createApi({
  reducerPath: "profileApi",
  baseQuery: fetchBaseQuery({ baseUrl: "https://reactnative-mislibritos-default-rtdb.firebaseio.com" }),
  tagTypes: ["userImage", "userLocation"],
  endpoints: (builder) => ({
    // Metodos que voy a usar
    putImage: builder.mutation({
      query: ({ image, localId }) => ({
        url: `/profile/${localId}.json`,
        method: "PUT",
        body: { image }
      }),
      invalidatesTags: ["userImage"]
    }),

    getImage: builder.query({
      query: (localId) => `/profile/${localId}.json`,
      providesTags: ["userImage"] //si cambia, cambia la interfaz
    }),

    putUserLocation: builder.mutation({
      query: ({ localId, locationFormatted }) => ({
        url: `/userLocation/${localId}.json`,
        method: "PUT",
        body: locationFormatted
      }),
      invalidatesTags: ["userLocation"]
    }),

    getUserLocation: builder.query({
      query: (localId) => `/userLocation/${localId}.json`,
      providesTags: ["userLocation"]
    })

  })
})

export const {
  usePutImageMutation,
  useGetImageQuery,
  usePutUserLocationMutation,
  useGetUserLocationQuery
} = profileApi
