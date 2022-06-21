import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import MovieService from "../../API/MovieService"

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

const pending = (state) => {
    state.isLoading = true
}

const errorLoad = (state, action) => {
    state.isLoading = false
    state.error = action.payload
}

const requestFulfilled = (state, action) => {
    // функция принимает результат асинк санка, в котором поле тайп = полю в начальном состоянии и в зависимости от тайп, меняет конкретнный стейт
    console.log(action.payload)
    const type = action.payload.type

    if (action.payload.response.page === 1) {
        state[type] = action.payload.response
    } else {
        state[type].results = [...state[type].results, ...action.payload.response.results]
    }

    state.isLoading = false
    state.error = ''
}

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