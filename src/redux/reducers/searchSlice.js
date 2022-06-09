import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import { useDispatch } from "react-redux"
import SearchService from "../../API/SearchService"

const initialState = {
    searchRequest: '',
    searchResult: {
        multi: null,
        movies: null,
        tvShow: null,
        people: null,
    },
    error: ''
}

export const multiSearch = createAsyncThunk(
    'search/multiSearch',
    async function (searchRequest, thunkAPI) {
        try {
            const multiResult = await SearchService.multiSearch(searchRequest)
            const movieResult = await SearchService.searchMovie(searchRequest)
            const tvShowResult = await SearchService.searchTvShow(searchRequest)
            const peopleResult = await SearchService.searchPeople(searchRequest)
            //console.log(multiResult)
            const allResults = {
                searchRequest: searchRequest,
                searchResult: {
                    multi: multiResult.data || null,
                    movies: movieResult.data || null,
                    tvShow: tvShowResult.data || null,
                    people: peopleResult.data || null
                }
            }
            return allResults
        } catch (error) {
            return thunkAPI.rejectWithValue('к сожалению ничего не найдено')
        }
    }
)

const searchSlice = createSlice({
    name: 'search',
    initialState,
    reducers: {
        addSearchRequest(state, action) {
            state.searchRequest = action.payload
        }
    },
    extraReducers: {
        [multiSearch.fulfilled]: (state, action) => {
            console.log(action.payload)
            state.searchResult = action.payload.searchResult
            state.searchRequest = action.payload.searchRequest
        },
        [multiSearch.rejected]: (state, action) => {
            console.log(action.payload)
        }
    }
})

export const { addSearchRequest } = searchSlice.actions

export default searchSlice.reducer