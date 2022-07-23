import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import PeopleService from "../../API/PeopleService"

const initialState = {
    isLoading: false,
    error: '',
    person: null
}

export const getPersonFromId = createAsyncThunk(
    'person/getPersonFromId',
    async function(personId, thunkAPI) {
        try {
            const response = await PeopleService.getPersonFromId(personId)
            return response.data
        } catch(e) {
            return thunkAPI.rejectWithValue('Error during server request')
        }
    }
)

const personSlice = createSlice({
    name: 'person',
    initialState,
    reducers: {
        clearState:() => initialState
    },
    extraReducers: {
        [getPersonFromId.pending]: (state) => {
            state.isLoading = true  
        },
        [getPersonFromId.fulfilled]: (state, action) => {
            state.person = action.payload;
            state.error = ''
            state.isLoading = false
        },
        [getPersonFromId.rejected]: (state, action) => {
            state.error = action.payload
            state.isLoading = false
        }
    }
})

export const {clearState} = personSlice.actions

export default personSlice.reducer