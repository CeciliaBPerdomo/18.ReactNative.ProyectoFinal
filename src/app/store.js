// Redux
import { configureStore } from '@reduxjs/toolkit'
import { setupListeners } from '@reduxjs/toolkit/query'

// Redux Query 
import { bookstoreApi } from './services/bookstore'
import { authApi } from './services/auth'

// Reducers
import cartReducer from "../features/cart/cartSlice"
import counterReducer from "../features/counter/counterSlice"
import authReducer from "../features/auth/authSlice"

export const store = configureStore({
  reducer: {
    cart: cartReducer,
    counter: counterReducer,
    auth: authReducer,

    //Firebase
    [bookstoreApi.reducerPath]: bookstoreApi.reducer,
    [authApi.reducerPath]: authApi.reducer,
  },

  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(bookstoreApi.middleware, authApi.middleware)
})

setupListeners(store.dispatch)