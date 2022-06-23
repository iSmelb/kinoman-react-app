import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import TvShowService from '../../API/TvShowService'
import { errorLoad, pending, requestFulfilled } from "../stateHandler"

const initialState = {
    error: '',
    isLoading: false,
    populars: null,
    airingToday: null,
    onTheAir: null,
    topRated: null,
}

export const getPopularTvShow = createAsyncThunk(
    'movies/getPopularTvShow',
    async function (page, thunkAPI) {
        try {
            const response = await TvShowService.getPopularTvShow(page)
            const responseObj = {
                type: 'populars',
                response: response.data
            }
            return responseObj
        } catch (e) {
            return thunkAPI.rejectWithValue('Error during server request')
        }
    }
)

export const getAiringTodayTvShow = createAsyncThunk(
    'movies/getAiringTodayTvShow',
    async function (page, thunkAPI) {
        try {
            const response = await TvShowService.getAiringTodayTvShow(page)
            const responseObj = {
                type: 'airingToday',
                response: response.data
            }
            return responseObj
        } catch (e) {
            return thunkAPI.rejectWithValue('Error during server request')
        }
    }
)

export const getOnTheAirTvShow = createAsyncThunk(
    'movies/getOnTheAirTvShow',
    async function (page, thunkAPI) {
        try {
            const response = await TvShowService.getOnTheAirTvShow(page)
            const responseObj = {
                type: 'onTheAir',
                response: response.data
            }
            return responseObj
        } catch (e) {
            return thunkAPI.rejectWithValue('Error during server request')
        }
    }
)

export const getTopRatedTvShow = createAsyncThunk(
    'movies/getTopRatedTvShow',
    async function (page, thunkAPI) {
        try {
            const response = await TvShowService.getTopRatedTvShow(page)
            const responseObj = {
                type: 'topRated',
                response: response.data
            }
            return responseObj
        } catch (e) {
            return thunkAPI.rejectWithValue('Error during server request')
        }
    }
)

const tvShowSlice = createSlice({
    name: 'movies',
    initialState,
    reducers: {

    },
    extraReducers: {
        [getPopularTvShow.pending]: (state) => {
            pending(state)
        },
        [getPopularTvShow.fulfilled]: (state, action) => {
            requestFulfilled(state, action)
        },
        [getPopularTvShow.rejected]: (state, action) => {
            errorLoad(state, action)
        },

        [getAiringTodayTvShow.pending]: (state) => {
            pending(state)
        },
        [getAiringTodayTvShow.fulfilled]: (state, action) => {
            requestFulfilled(state, action)
        },
        [getAiringTodayTvShow.rejected]: (state, action) => {
            errorLoad(state, action)
        }, 

        [getOnTheAirTvShow.pending]: (state) => {
            pending(state)
        },
        [getOnTheAirTvShow.fulfilled]: (state, action) => {
            requestFulfilled(state, action)
        },
        [getOnTheAirTvShow.rejected]: (state, action) => {
            errorLoad(state, action)
        },

        [getTopRatedTvShow.pending]: (state) => {
            pending(state)
        },
        [getTopRatedTvShow.fulfilled]: (state, action) => {
            requestFulfilled(state, action)
        },
        [getTopRatedTvShow.rejected]: (state, action) => {
            errorLoad(state, action)
        }
    }
})

export default tvShowSlice.reducer