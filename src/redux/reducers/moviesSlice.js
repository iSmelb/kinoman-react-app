import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import MovieService from "../../API/MovieService"

const initialState = {
    populars: null
}

export const getPopularMovies = createAsyncThunk(
    'movies/getPopularMovies',
    async function(page, thunkAPI) {
        try {
            const response = await MovieService.getPopular(page)
            return response.data
        } catch(e) {
            return thunkAPI.rejectWithValue('Error during server request')
        }
    }
)

const moviesSlice = createSlice({
    name: 'movies',
    initialState,
    reducers: {

    },
    extraReducers: {
        [getPopularMovies.fulfilled]: (state, action) =>{
            state.populars = action.payload
            console.log(action.payload)
        }
    }
})

export default moviesSlice.reducer