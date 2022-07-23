import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getTopRatedMovies } from '../redux/reducers/moviesSlice'
import MoviesPageContent from '../components/UI/movie_info_reusable/MoviesPageContent';
import Loader from '../components/UI/loader/Loader';
import { useUpdateTitle } from '../hooks/useUpdateTitle';

function TopRatedMoviesPage() {
    const {topRated, isLoading, error} = useSelector(state => state.movies)
    const movies = topRated?.results
    const [page, setPage] = useState(1)
    const total_pages = topRated?.total_pages
    const dispatch = useDispatch()

    const pages = {
        current_page: page,
        total_pages: total_pages,

        changePage: () => {
            setPage(page + 1)
        }
    }

    useEffect(() => {
        dispatch(getTopRatedMovies(page))
    }, [page])

    useUpdateTitle('movies-top rated')

    return (
        <>
            {isLoading && <Loader/>}
            {error && <div style={{ textAlign: 'center' }}>{error}</div>}
            {movies && <MoviesPageContent movies={movies} pages={pages} type='topRated'/>}
        </>
    )
}

export default TopRatedMoviesPage