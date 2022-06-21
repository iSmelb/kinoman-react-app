import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getTopRatedMovies } from '../redux/reducers/moviesSlice'
import MoviesPageContent from '../components/UI/movie_info_reusable/MoviesPageContent';
import Loader from '../components/UI/loader/Loader';

function TopRatedMoviesPage() {
    const {topRated, isLoading, error} = useSelector(state => state.movies)
    const movies = topRated?.results
    const dispatch = useDispatch()
    const [page, setPage] = useState(1)

    const changePage = () => {
        setPage(page + 1)
    }

    useEffect(() => {
        dispatch(getTopRatedMovies(page))
    }, [page])

    return (
        <>
            {isLoading && <Loader/>}
            {error && <div>{error}</div>}
            {movies && <MoviesPageContent movies={movies} changePage={changePage} type='topRated'/>}
        </>
    )
}

export default TopRatedMoviesPage