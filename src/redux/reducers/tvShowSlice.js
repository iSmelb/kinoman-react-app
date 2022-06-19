import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import TvShowService from '../../API/TvShowService'

const initialState = {
    populars: null
}

export const getPopularTvShow = createAsyncThunk(
    'movies/getPopularTvShow',
    async function(page, thunkAPI) {
        try {
            const response = await TvShowService.getPopularTvShow(page)
            return response.data
        } catch(e) {
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
        [getPopularTvShow.fulfilled]: (state, action) =>{
            state.populars = action.payload
        }
    }
})

export default tvShowSlice.reducer