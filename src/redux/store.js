import { configureStore } from "@reduxjs/toolkit";
import collectionReducer from './reducers/collectionSlice';
import movieReducer from './reducers/movieSlice';
import moviesReducer from './reducers/moviesSlice';
import peopleReducer from './reducers/peopleSlice';
import personReducer from './reducers/personSlice';
import playerReducer from './reducers/playerSlice';
import searchReduce from './reducers/searchSlice';
import shortcarBarReducer from "./reducers/shortcarBarSlice";
import singleTvShowReducer from './reducers/singleTvShowSlice';
import tvShowReducer from './reducers/tvShowSlice';
import userReducer from './reducers/userSlice';

export default configureStore({
    reducer: {
        movie: movieReducer,
        player: playerReducer,
        search: searchReduce,
        movies: moviesReducer,
        tvShow: tvShowReducer,
        people: peopleReducer,
        singleTvShow: singleTvShowReducer,
        person: personReducer,
        collection: collectionReducer,
        shortcarBar: shortcarBarReducer,
        user: userReducer
    }
})
