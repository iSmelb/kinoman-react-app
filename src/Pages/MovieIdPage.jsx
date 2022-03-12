import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import MovieService from '../API/MovieService';
import MovieIdPageInfo from '../components/MovieIdPageInfo';
import Loader from '../components/UI/loader/Loader';
import MovieInfo from '../components/UI/movie_info_reusable/MovieInfo';

function MovieIdPage() {
    const params = useParams()
    let movieId = params.id
    const [movie, setMovie] = useState('')
    const [error, setError] = useState(false)
    const [movieIsLoading, setMovieIsLoading] = useState(false)

    const getMovieFromId = async () => {
        MovieService.getMovieFromId(
            movieId,
            (data) => {
                setMovieIsLoading(true)
                const movieResult = JSON.parse(data)
                console.log(movieResult)
                setMovie(movieResult)

            },
            (error) => {
                setMovieIsLoading(true)
                const unParseError = JSON.parse(error)
                setError(unParseError.status_message)
            })
    }

    useEffect(() => {
        getMovieFromId()
    }, [])

    return (
        <main className='main'>
            {!movie
                ? <div><Loader/></div>
                : <MovieIdPageInfo movie={movie}/>
            }
        </main>
    )
}

export default MovieIdPage;
