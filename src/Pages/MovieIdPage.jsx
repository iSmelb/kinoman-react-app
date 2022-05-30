import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import MovieService from '../API/MovieService';
import MovieIdPageInfo from '../components/MovieIdPageInfo';
import Loader from '../components/UI/loader/Loader';

function MovieIdPage() {
    const params = useParams()
    let movieId = params.id
    const [movie, setMovie] = useState('')
    const [similarMovies, setSimilarMovies] = useState('')
    const [credits, setCredits] = useState('')
    const [reviews, setReviews] = useState('')
    const [images, setImages] = useState('')
    const [video, setVideo] = useState('')

    const getMovieFromId = async () => {
        const respons = await MovieService.getMovieFromId(movieId)
        //console.log(respons)
        setMovie(respons.data)
    }

    const getCredits = async () => {
        const respons = await MovieService.getCreditsforMovie(movieId)
        //console.log(respons)
        setCredits(respons.data)
    }

    const getSimilarMovie = async() => {
        const respons = await MovieService.getSimilarMovie(movieId)
        //console.log(respons)
        setSimilarMovies(respons.data.results)
    }

    const getReviews = async() => {
        const respons = await MovieService.getReviewsForMovie(movieId)
        //console.log(respons)
        setReviews(respons.data)
    }

    const getImages = async() => {
        const respons = await MovieService.getImagesForMovie(movieId)
        //console.log(respons.data)
        setImages(respons.data)
    }

    const getVideo = async() => {
        const respons = await MovieService.getVideoForMovie(movieId)
        //console.log(respons.data)
        setVideo(respons.data.results)
    }

    useEffect(() => {
        getMovieFromId()
        getSimilarMovie()
        getCredits()
        getReviews()
        getImages()
        getVideo()
        window.scrollTo(0,0)
    }, [movieId])

    useEffect(() => {
        document.title = movie.title
    }, [movie])

    return (
        <main className='main'>
            {!movie
                ? <div><Loader/></div>
                : <MovieIdPageInfo movie={movie} credits={credits} reviews={reviews} similarMovies={similarMovies} images={images} video={video}/>
            }
        </main>
    )
}

export default MovieIdPage;
