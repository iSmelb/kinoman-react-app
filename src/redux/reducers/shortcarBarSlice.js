import { createSlice } from "@reduxjs/toolkit"


const initialState = {
    activeLink: '',
    currentPath: '',
    menuIsOpen: false,
    currentIndex: null
}

const shortcarBarSlice = createSlice({
    name: 'shortcardBar',
    initialState,
    reducers: {
        changeActiveLink: (state, action) => {
            state.activeLink = action.payload
        },
        openMenu: (state) => {
            state.menuIsOpen = true
        },
        closeMenu: (state) => {
            state.menuIsOpen = false
        },
        changeActiveIndex: (state, action) => {
            state.currentIndex = action.payload
        },
    }
})

export const {changeActiveLink, openMenu, closeMenu, changeActiveIndex} = shortcarBarSlice.actions
export default shortcarBarSlice.reducer