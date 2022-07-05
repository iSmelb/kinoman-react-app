import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { errorLoad, pending, } from "../stateHandler";
import TvShowService from "../../API/TvShowService";

const initialState = {
    singleTvShow: null,
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

const singleTvShow = createSlice({
    name: 'singleTvShow',
    initialState,
    reducers: {
        clearState:() => initialState
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
    }

})
export const { clearState } = singleTvShow.actions

export default singleTvShow.reducer