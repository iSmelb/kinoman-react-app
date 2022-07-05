import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { errorLoad, pending, } from "../stateHandler";
import MovieService from "../../API/MovieService";

const initialState = {
    movie: null,
    isLoading: false,
    error: '',
}

export const getMovieFromId = createAsyncThunk(
    'movie/getMovieFromId',
    async function(movieId, thunkAPI) {
        try {
            const response = await MovieService.getMovieFromId(movieId)
            console.log(response)
            return response.data
        } catch(e) {
            return thunkAPI.rejectWithValue('Error during server request')
        }
    }
)

const movieSlice = createSlice({
    name: 'movie',
    initialState,
    reducers: {
        clearState:() => initialState
    },
    extraReducers: {
        [getMovieFromId.pending]: (state) => {
            pending(state) 
        },
        [getMovieFromId.fulfilled]: (state, action) => {
            state.movie = action.payload;
            state.error = ''
            state.isLoading = false
        },
        [getMovieFromId.rejected]: (state, action) => {
            errorLoad(state, action)
        },
    }

})

export const { clearState } = movieSlice.actions

export default movieSlice.reducer