import { createSlice } from '@reduxjs/toolkit'

// valor inicial del estado //store
const initialState = {
    value: 0,
}

export const counterSlice = createSlice({
    name: 'counter',
    initialState,   // initialState: initialState

    // Funciones que voy a usar
    reducers: { 
        increment: (state) => {
            state.value = state.value + 1
        },

        decrement: (state) => {
            state.value = state.value - 1
        },

        incrementByAmount: (state, action) => {
            // action.payload --> recibo un valor
            state.value = action.payload
        },

        reset: (state) => {
            state.value = 0
        }
    }
})

// Action creators are generated for each case reducer function
export const { increment, decrement, incrementByAmount, reset } = counterSlice.actions
export default counterSlice.reducer