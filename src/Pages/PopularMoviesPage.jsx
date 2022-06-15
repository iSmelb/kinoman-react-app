import React from 'react';
import { useEffect, useState } from 'react/cjs/react.development';
import MovieService from '../API/MovieService';
import MainPopularMovies from '../components/MainPopularMovies';
import Loader from '../components/UI/loader/Loader';
import { useFetching } from '../hooks/useFetching';

function PopularMoviesPage() {
    const [movies, setMovies] = useState([])
    const [page, setPage] = useState(1)
    const [getPopular, isLoading, error] = useFetching(async () => {
        const respons = await MovieService.getPopular(page)
        setMovies([...movies, ...respons.data.results])
    })

    const changePage = (page) => {
        setPage(page + 1)
    }

    useEffect(() => {
        getPopular()
    }, [page])

    useEffect(()=> {document.title = 'kinoman'},[])

    if(error) {
        return (
            <main className='main'>
                {error}
            </main>
        )
    }

    return (
        <>
            {isLoading 
                ? <Loader/>
                : <MainPopularMovies movies={movies} page={page} changePage={changePage}/>
            }
        </>
    )
}

export default PopularMoviesPage