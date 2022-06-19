import { createSelector } from "@reduxjs/toolkit"

const selectPopularMovies = state => state.movies.populars?.results
const selectPopularTvShow = state => state.tvShow.populars?.results

export const selectAllPopular = createSelector(
    [selectPopularMovies, selectPopularTvShow],
    (popularMovies, popularTvShow) => {
        if(popularMovies && popularTvShow) {
            return [...popularMovies, ...popularTvShow]
        }
    }
)