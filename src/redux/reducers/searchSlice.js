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
    error: '',
    isLoading: false,
}

export const multiSearch = createAsyncThunk(
    'search/multiSearch',
    async function (searchParams, thunkAPI) {
        console.log(searchParams, 'запрос на всё')
        const { query, page } = searchParams

        try {
            const multiResult = await SearchService.multiSearch(query, page)
            const movieResult = await SearchService.searchMovie(query, page)
            const tvResult = await SearchService.searchTvShow(query, page)
            const peopleResult = await SearchService.searchPeople(query, page)
            const resultAndQuery = {
                searchRequest: query,
                searchResult: {
                    multi: multiResult.data,
                    movies: movieResult.data,
                    tvShow: tvResult.data,
                    people: peopleResult.data,

                }
            }
            return resultAndQuery
        } catch (error) {
            return thunkAPI.rejectWithValue('error when requesting the server')
        }
    }
)

export const movieSearch = createAsyncThunk(
    'search/movieSearch',
    async function (searchParams, thunkAPI) {
        console.log(searchParams, 'запрос на кино')
        const { query, page } = searchParams
        try {
            const movieResult = await SearchService.searchMovie(query, page)
            return movieResult.data
        } catch (error) {
            return thunkAPI.rejectWithValue('error when requesting the server')
        }
    }

)

export const tvSearch = createAsyncThunk(
    'search/tvSearch',
    async function (searchParams, thunkAPI) {
        console.log(searchParams, 'запрос на тв')
        const { query, page } = searchParams
        try {
            const tvResult = await SearchService.searchTvShow(query, page)
            return tvResult.data
        } catch (error) {
            return thunkAPI.rejectWithValue('error when requesting the server')
        }
    }

)

export const peopleSearch = createAsyncThunk(
    'search/peopleSearch',
    async function (searchParams, thunkAPI) {
        console.log(searchParams, 'запрос на людей')
        const { query, page } = searchParams
        try {
            const peopleResult = await SearchService.searchPeople(query, page)
            return peopleResult.data
        } catch (error) {
            return thunkAPI.rejectWithValue('error when requesting the server')
        }
    }

)

const searchSlice = createSlice({
    name: 'search',
    initialState,
    reducers: {
        clearState(state) {
            state.searchResult = initialState.searchResult
        }
    },
    extraReducers: {
        [multiSearch.pending]: (state) => {
            // state.searchResult = initialState.searchResult
            state.isLoading = true
        },
        [multiSearch.fulfilled]: (state, action) => {
            console.log(action.payload, 'общий ответ')
            state.searchResult = action.payload.searchResult
            state.searchRequest = action.payload.searchRequest
            state.isLoading = false
        },
        [multiSearch.rejected]: (state) => {
            state.isLoading = false
        },

        [movieSearch.pending]: (state) => {
            state.isLoading = true
        },
        [movieSearch.fulfilled]: (state, action) => {
            console.log(action.payload, 'кино ответ')
            state.searchResult.movies = action.payload
            state.isLoading = false
        },
        [movieSearch.rejected]: (state) => {
            state.isLoading = false
        },

        [tvSearch.pending]: (state) => {
            state.isLoading = true
        },
        [tvSearch.fulfilled]: (state, action) => {
            console.log(action.payload, 'тв ответ')
            state.searchResult.tvShow = action.payload
            state.isLoading = false
        },
        [tvSearch.rejected]: (state) => {
            state.isLoading = false
        },

        [peopleSearch.pending]: (state) => {
            state.isLoading = true
        },
        [peopleSearch.fulfilled]: (state, action) => {
            console.log(action.payload, 'люди ответ')
            state.searchResult.people = action.payload
            state.isLoading = false
        },
        [peopleSearch.rejected]: (state) => {
            state.isLoading = false
        },
    }
})

export const { clearState } = searchSlice.actions

export default searchSlice.reducer