import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { errorLoad, pending, } from "../stateHandler";
import TvShowService from "../../API/TvShowService";

const initialState = {
    singleTvShow: null,
    season: null,
    reviews: null,
    isLoading: false,
    error: '',
}

export const getTvShowFromId = createAsyncThunk(
    'singleTvShow/getTvShowFromId',
    async function(tvShowId, thunkAPI) {
        try {
            const response = await TvShowService.getTvShowFromId(tvShowId)
            console.log(response.data)
            return response.data
        } catch(e) {
            return thunkAPI.rejectWithValue('Error during server request')
        }
    }
)

export const getSeasonDetails = createAsyncThunk(
    'singleTvShow/getSeasonDetails',
    async function(queryParams, thunkAPI) {
        try {
            const {id, number} = queryParams
            const response = await TvShowService.getSeasonDetails(id, number)
            console.log(response.data)
            return response.data
        } catch(e) {
            return thunkAPI.rejectWithValue('Error during server request')
        }
    }
)

export const getReviewsForTv = createAsyncThunk(
    'singleTvShow/getReviewsForTv',
    async function(queryParams, thunkAPI) {
        try {
            const {mediaId, page} = queryParams
            const response = await TvShowService.getReviewsForTv(mediaId, page)
            console.log(response.data)
            return response.data
        } catch(e) {
            return thunkAPI.rejectWithValue('Error during server request')
        }
    }
)

const singleTvShow = createSlice({
    name: 'singleTvShow',
    initialState,
    reducers: {
        clearState:() => initialState,
    },
    extraReducers: {
        [getTvShowFromId.pending]: (state) => {
            pending(state)  
        },
        [getTvShowFromId.fulfilled]: (state, action) => {
            state.singleTvShow = action.payload;
            state.error = ''
            state.isLoading = false
        },
        [getTvShowFromId.rejected]: (state, action) => {
            errorLoad(state, action)
        },

        [getSeasonDetails.pending]: (state) => {
            pending(state)  
        },
        [getSeasonDetails.fulfilled]: (state, action) => {
            state.season = action.payload;
            state.error = ''
            state.isLoading = false
        },
        [getSeasonDetails.rejected]: (state, action) => {
            errorLoad(state, action)
        },

        [getReviewsForTv.pending]: (state) => {
            pending(state)  
        },
        [getReviewsForTv.fulfilled]: (state, action) => {
            state.reviews = action.payload
            state.error = ''
            state.isLoading = false
        },
        [getReviewsForTv.rejected]: (state, action) => {
            errorLoad(state, action)
        },
    }

})
export const { clearState } = singleTvShow.actions

export default singleTvShow.reducer