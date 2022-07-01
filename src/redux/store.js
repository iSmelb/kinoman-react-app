import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import movieReducer from './reducers/movieSlice'
import playerReducer from './reducers/playerSlice'
import searchReduce from './reducers/searchSlice'
import moviesReducer from './reducers/moviesSlice'
import tvShowReducer from './reducers/tvShowSlice'
import peopleReducer from './reducers/peopleSlice'
import singleTvShowReducer from './reducers/singleTvShowSlice'
import personReducer from './reducers/personSlice'

export default configureStore({
    reducer: {
        movie: movieReducer,
        player: playerReducer,
        search: searchReduce,
        movies: moviesReducer,
        tvShow: tvShowReducer,
        people: peopleReducer,
        singleTvShow: singleTvShowReducer,
        person: personReducer
    }
})


// import { configureStore } from '@reduxjs/toolkit'
// import rootReducer from './reducer'
// import { myCustomApiService } from './api'

// const store = configureStore({
//   reducer: rootReducer,
//   middleware: (getDefaultMiddleware) =>
//     getDefaultMiddleware({
//       thunk: {
//         extraArgument: myCustomApiService,
//       },
//       serializableCheck: false,
//     }),
// })