import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    items: [],
    total: 0
}

export const cartSlice = createSlice({
    name: 'cart',
    initialState,   

    reducers: {
        // Agregar
        addCartItem: (state, action) => {
            const existingItem = state.items.findIndex((item) => item.id === action.payload.id)
            if (existingItem === -1) {
                state.items = [...state.items, { ...action.payload }]
            } else {
                state.items = state.items.map((item) => {
                    if (item.id === action.payload.id) {
                        return { ...item, quantity: item.quantity + action.payload.quantity }
                    }
                    return item
                })
            }
            state.total = state.items.reduce((acc, item) => acc = acc + (item.price * item.quantity), 0)
        },
        // Borrar item
        deleteCartItem: (state, action) => {
            state.items = state.items.filter((item) => item.id != action.payload)
            state.total = state.items.reduce((acc, item) => acc = acc + item.price, 0) 
        }, 

        //Borra todo el carrito
        deleteCart: (state) => {
            state.total = 0
            state.items = []
        }
    }
})

export const { addCartItem, deleteCartItem, deleteCart } = cartSlice.actions
export default cartSlice.reducer