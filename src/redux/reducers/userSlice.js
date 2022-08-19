import { createSlice } from "@reduxjs/toolkit"

const initialState = {
    user: null,
    isAuth: false
}

const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        addUser: (state, action) => {
            state.user = action.payload
            state.isAuth = true
        },
        removeUser: () => initialState
    }
})

export const {addUser, removeUser} = userSlice.actions
export default userSlice.reducer