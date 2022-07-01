import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import PeopleService from '../../API/PeopleService'
import { errorLoad, pending, requestFulfilled } from "../stateHandler";

const initialState = {
    eror: '',
    isLoading: false,
    populars: null,
    currentPerson: null,
}

export const getPopularPeople = createAsyncThunk(
    'people/getPopularPeople',
    async function(page, thunkAPI) {
        try {
            const response = await PeopleService.getPopularPeople(page)
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

const peopleSlice = createSlice({
    name: 'people',
    initialState,
    reducers: {},
    extraReducers: {
        [getPopularPeople.pending]: (state) => {
            pending(state)
        },
        [getPopularPeople.fulfilled]: (state, action) => {
            requestFulfilled(state, action)
        },
        [getPopularPeople.rejected]: (state, action) => {
            errorLoad(state, action)
        },
    }
})

//export const {} = peopleSlice.actions

export default peopleSlice.reducer