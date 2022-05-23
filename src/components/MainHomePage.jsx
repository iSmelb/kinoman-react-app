import React, { useEffect, useState } from 'react';
import MovieService from '../API/MovieService';
import Loader from './UI/loader/Loader'
import MoviePreview from './UI/PreviewReusable/MoviePreview';
import MyButon from './UI/Mybutton/MyButton'

function MainHomePage() {
    const [movies, setMovies] = useState([])
    const [page, setPage] = useState(1)
    const [error, setError] = useState(false)
    const [movieIsLoading, setMovieIsLoading] = useState(false)

    const getPopular = async () => {
        MovieService.getMovie(
            page,
            (data) => {
                setMovieIsLoading(true)
                const unParse = JSON.parse(data)
                console.log(unParse)
                setMovies([...movies, ...unParse.results])

            },
            (error) => {
                setMovieIsLoading(true)
                const unParseError = JSON.parse(error)
                setError(unParseError.status_message)
            })
    }

    useEffect(() => {
        getPopular()
    }, [page])

    if (error) {
        return (
            <div className='div_error'>
                <h1>Произошла ошибка запроса ${error}</h1>
            </div>
        )
    }

    return (
        <div className='banner_bg conteiner'>
            <h1>Популярно Сейчас</h1>
            {!movieIsLoading &&
                <div style={{ margin: "0 auto 20px" }}><Loader /></div>
            }
            {movies.map(movie => <MoviePreview key={movie.id} movie={movie} />)}
            <div className='load_more_div'>
                <MyButon onClick={() => setPage(page + 1)}>Загрузить ещё</MyButon>
            </div>
        </div>
    );
}

export default MainHomePage;
