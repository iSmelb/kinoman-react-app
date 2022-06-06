import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    keyForMovie: '',
    refLink: null
}

const playerSlice = createSlice({
    name: 'player',
    initialState,
    reducers: {
        changeKeyForMovie(state, action) {
            state.keyForMovie = action.payload
        },

        // addRef(state, action) {
        //     state.refLink =  action.payload
        // }
    }
})

export const {changeKeyForMovie, addRef} = playerSlice.actions


export default playerSlice.reducer