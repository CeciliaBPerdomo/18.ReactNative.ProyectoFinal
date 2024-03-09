// Redux
import { configureStore } from '@reduxjs/toolkit'

// Redux Query 
import { setupListeners } from '@reduxjs/toolkit/query'
import { bookstoreApi } from './services/bookstore'

import cartReducer from "../features/cart/cartSlice"
import counterReducer from "../features/counter/counterSlice"

export const store = configureStore({
  reducer: {
    cart: cartReducer,
    counter: counterReducer,

    //Firebase
    [bookstoreApi.reducerPath]: bookstoreApi.reducer
  },

  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(bookstoreApi.middleware)
})

setupListeners(store.dispatch)