import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import movieReducer from './reducers/movieSlice'
import playerReducer from './reducers/playerSlice'



export default configureStore({
    reducer: {
        movie: movieReducer,
        player: playerReducer,
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