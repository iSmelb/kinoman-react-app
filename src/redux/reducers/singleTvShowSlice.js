import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import TvShowService from "../../API/TvShowService";

const initialState = {
    singleTvShow: null,
    isLoading: false,
    error: '',
}

export const getTvShowFromId = createAsyncThunk(
    'movie/getTvShowFromId',
    async function(tvShowId, thunkAPI) {
        try {
            const response = await TvShowService.getTvShowFromId(tvShowId)
            console.log(response.data)
            return response.data
        } catch(e) {
            return thunkAPI.rejectWithValue('Не удалось загрузить фильм')
        }
    }
)

const singleTvShow = createSlice({
    name: 'singleTvShow',
    initialState,
    extraReducers: {
        [getTvShowFromId.pending]: (state) => {
            state.isLoading = true  
        },
        [getTvShowFromId.fulfilled]: (state, action) => {
            state.singleTvShow = action.payload;
            state.error = ''
            state.isLoading = false
        },
        [getTvShowFromId.rejected]: (state, action) => {
            state.error = action.payload
            state.isLoading = false
        }
    }

})

export default singleTvShow.reducer