import { createSlice, createAsyncThunk } from "@reduxjs/toolkit"
import MovieService from "../../API/MovieService"

const initialState = {
    error: '',
    isLoading: false,
    collectionInfo: null,
}

export const getCollectionForId = createAsyncThunk(
    'collection/getCollectionForId',
    async function(collectionId, thunkAPI) {
        try {
            const response = await MovieService.getCollectionForId(collectionId)
            console.log(response)
            return response.data
        } catch(e) {
            return thunkAPI.rejectWithValue('Error during server request')
        }
    }
)

const collectionSlise = createSlice({
    name: 'collection',
    initialState,
    reducers: {
        clearState:() => initialState
    },
    extraReducers: {
        [getCollectionForId.pending]: (state) => {
            state.isLoading = true  
        },
        [getCollectionForId.fulfilled]: (state, action) => {
            state.collectionInfo = action.payload;
            state.error = ''
            state.isLoading = false
        },
        [getCollectionForId.rejected]: (state, action) => {
            state.error = action.payload
            state.isLoading = false
        }
    }
})

export const {clearState} = collectionSlise.actions

export default collectionSlise.reducer