import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import MovieService from '../API/MovieService';
import MovieIdPageInfo from '../components/MovieIdPageInfo';
import Loader from '../components/UI/loader/Loader';
import { getMovieFromId } from '../redux/reducers/movieSlice';

function MovieIdPage() {
    const params = useParams()
    let movieId = params.id
    const dispatch = useDispatch()
    const { movie, isLoading, error } = useSelector(state => state.movie)

    useEffect(() => {
        dispatch(getMovieFromId(movieId))
        window.scrollTo(0, 0)
    }, [movieId])

    useEffect(() => {
        if (movie) {
            document.title = movie.title
        }
    }, [movie])

    return (
        <>
            {(isLoading || !movie) 
                ? <div><Loader/></div>
                : <MovieIdPageInfo/>
            }
            {error && <h1>{error}</h1>}
        </>
    )
}

export default MovieIdPage;
