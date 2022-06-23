import React from 'react'
import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import MoviesPageContent from '../components/UI/movie_info_reusable/MoviesPageContent';
import Loader from '../components/UI/loader/Loader';
import { getPlayingNowMovies } from '../redux/reducers/moviesSlice';
import { useUpdateTitle } from '../hooks/useUpdateTitle';


function NowPlayingMoviesPage() {
    const {playingNow, isLoading, error} = useSelector(state => state.movies)
    const movies = playingNow?.results
    const dispatch = useDispatch()
    const [page, setPage] = useState(1)

    const changePage = () => {
        setPage(page + 1)
    }

    useEffect(() => {
        dispatch(getPlayingNowMovies(page))
    }, [page])

    useUpdateTitle('movies-playing now')

    return (
        <>
            {isLoading && <Loader/>}
            {error && <div>{error}</div>}
            {movies && <MoviesPageContent movies={movies} changePage={changePage} type='playingNow'/>}
        </>
    )
}

export default NowPlayingMoviesPage