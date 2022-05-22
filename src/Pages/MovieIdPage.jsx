import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { useRef } from 'react/cjs/react.development';
import MovieService from '../API/MovieService';
import MovieIdPageInfo from '../components/MovieIdPageInfo';
import Loader from '../components/UI/loader/Loader';
import MovieInfo from '../components/UI/movie_info_reusable/MovieInfo';

function MovieIdPage() {
    const params = useParams()
    let movieId = params.id
    const [movie, setMovie] = useState('')
    const [similarMovies, setSimilarMovies] = useState('')
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

    const getSimilarMovie = async() => {
        MovieService.getSimilarMovie(
            movieId,
            (data) => {
                const SimilarMovieResult = JSON.parse(data)
                console.log(SimilarMovieResult.results)
                setSimilarMovies(SimilarMovieResult.results)
            },
            (error) => {
                const unParseError = JSON.parse(error)
            }
        )
    }

    useEffect(() => {
        getMovieFromId()
        getSimilarMovie()
    }, [movieId])

    return (
        <main className='main'>
            {!movie
                ? <div><Loader/></div>
                : <MovieIdPageInfo movie={movie} similarMovies={similarMovies} />
            }
        </main>
    )
}

export default MovieIdPage;
