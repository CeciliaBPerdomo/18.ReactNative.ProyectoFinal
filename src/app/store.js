import { configureStore } from '@reduxjs/toolkit'
import cartReducer from "../features/cart/cartSlice"
import counterReducer from "../features/counter/counterSlice"

export const store = configureStore({
  reducer: {
    cart: cartReducer,
    counter: counterReducer,
  },
})