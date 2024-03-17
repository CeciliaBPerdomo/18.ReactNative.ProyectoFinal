// Redux
import { configureStore } from '@reduxjs/toolkit'
import { setupListeners } from '@reduxjs/toolkit/query'

// Redux Query 
import { bookstoreApi } from './services/bookstore'
import { authApi } from './services/auth'
import { profileApi } from './services/profile'
import { ordersApi } from './services/orders'

// Reducers
import cartReducer from "../features/cart/cartSlice"
import counterReducer from "../features/counter/counterSlice"
import authReducer from "../features/auth/authSlice"

export const store = configureStore({
  reducer: {
    cart: cartReducer,
    counter: counterReducer,
    auth: authReducer,

    // con Firebase
    [bookstoreApi.reducerPath]: bookstoreApi.reducer,
    [authApi.reducerPath]: authApi.reducer,
    [profileApi.reducerPath]: profileApi.reducer,
    [ordersApi.reducerPath]: ordersApi.reducer,
  },

  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(
      bookstoreApi.middleware,
      authApi.middleware,
      profileApi.middleware,
      ordersApi.middleware
    )
})

setupListeners(store.dispatch)