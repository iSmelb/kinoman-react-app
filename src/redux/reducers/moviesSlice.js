import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import MovieService from "../../API/MovieService"
import { errorLoad, pending, requestFulfilled } from "../stateHandler"

const initialState = {
    isLoading: false,
    error: '',
    populars: null,
    playingNow: null,
    upComing: null,
    topRated: null,
}


export const getPopularMovies = createAsyncThunk(
    'movies/getPopularMovies',
    async function(page, thunkAPI) {
        try {
            const response = await MovieService.getPopular(page)
            const responseObj = {
                type: 'populars',
                response: response.data 
            }
            return responseObj
        } catch(e) {
            return thunkAPI.rejectWithValue('Error during server request')
        }
    }
)

export const getPlayingNowMovies = createAsyncThunk(
    'movies/getPlayingNowMovies',
    async function(page, thunkAPI) {
        try {
            const response = await MovieService.getPlayingNow(page)
            const responseObj = {
                type: 'playingNow',
                response: response.data 
            }
            return responseObj
        } catch(e) {
            return thunkAPI.rejectWithValue('Error during server request')
        }
    }
)

export const getUpComingMovies = createAsyncThunk(
    'movies/getUpComingMovies',
    async function(page, thunkAPI) {
        try {
            const response = await MovieService.getUpComing(page)
            const responseObj = {
                type: 'upComing',
                response: response.data 
            }
            return responseObj
        } catch(e) {
            return thunkAPI.rejectWithValue('Error during server request')
        }
    }
)

export const getTopRatedMovies = createAsyncThunk(
    'movies/getTopRatedMovies',
    async function(page, thunkAPI) {
        try {
            const response = await MovieService.getTopRated(page)
            const responseObj = {
                type: 'topRated',
                response: response.data 
            }
            return responseObj
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
        [getPopularMovies.pending]: (state) => {
            pending(state)
        },
        [getPopularMovies.fulfilled]: (state, action) => {
            requestFulfilled(state, action)
        },
        [getPopularMovies.rejected]: (state, action) => {
            errorLoad(state, action)
        },

        [getPlayingNowMovies.pending]: (state) => {
            pending(state)
        },
        [getPlayingNowMovies.fulfilled]: (state, action) => {
            requestFulfilled(state, action)
        },
        [getPlayingNowMovies.rejected]: (state, action) => {
            errorLoad(state, action)
        },

        [getUpComingMovies.pending]: (state) => {
            pending(state)
        },
        [getUpComingMovies.fulfilled]: (state, action) => {
            requestFulfilled(state, action)
        },
        [getUpComingMovies.rejected]: (state, action) => {
            errorLoad(state, action)
        },

        [getTopRatedMovies.pending]: (state) => {
            pending(state)
        },
        [getTopRatedMovies.fulfilled]: (state, action) => {
            requestFulfilled(state, action)
        },
        [getTopRatedMovies.rejected]: (state, action) => {
            errorLoad(state, action)
        }
    }
})

export default moviesSlice.reducer