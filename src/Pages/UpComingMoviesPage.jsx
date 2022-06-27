import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getUpComingMovies } from '../redux/reducers/moviesSlice'
import MoviesPageContent from '../components/UI/movie_info_reusable/MoviesPageContent';
import Loader from '../components/UI/loader/Loader';
import { useUpdateTitle } from '../hooks/useUpdateTitle';

function UpComingMoviesPage() {
    const {upComing, isLoading, error} = useSelector(state => state.movies)
    const movies = upComing?.results
    const [page, setPage] = useState(1)
    const total_pages = upComing?.total_pages
    const dispatch = useDispatch()

    const pages = {
        current_page: page,
        total_pages: total_pages,

        changePage: () => {
            setPage(page + 1)
        }
    }

    useEffect(() => {
        dispatch(getUpComingMovies(page))
    }, [page])

    useUpdateTitle('movies-upcoming')

    return (
        <>
            {isLoading && <Loader/>}
            {error && <div>{error}</div>}
            {movies && <MoviesPageContent movies={movies} pages={pages} type='upComing'/>}
        </>
    )
}

export default UpComingMoviesPage