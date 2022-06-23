import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
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
            return thunkAPI.rejectWithValue('Не удалось загрузить фильм')
        }
    }
)

const movieSlice = createSlice({
    name: 'movie',
    initialState,
    reducers: {

    },
    extraReducers: {
        [getMovieFromId.pending]: (state) => {
            state.isLoading = true  
        },
        [getMovieFromId.fulfilled]: (state, action) => {
            state.movie = action.payload;
            state.error = ''
            state.isLoading = false
        },
        [getMovieFromId.rejected]: (state, action) => {
            state.error = action.payload
            state.isLoading = false
        }
    }

})

export const {} = movieSlice.actions

export default movieSlice.reducer