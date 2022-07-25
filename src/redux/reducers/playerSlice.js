import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    keyForMovie: '',
    active: false
}

const playerSlice = createSlice({
    name: 'player',
    initialState,
    reducers: {
        changeKeyForMovie(state, action) {
            state.keyForMovie = action.payload
        },
        togglePlayer(state) {
            state.active = !state.active
            state.keyForMovie = ''
        }
    }
})

export const {changeKeyForMovie, togglePlayer} = playerSlice.actions


export default playerSlice.reducer