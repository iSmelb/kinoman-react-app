import React from 'react';
import { useEffect, useState } from 'react/cjs/react.development';
import MovieService from '../API/MovieService';
import MainHomePage from '../components/MainHomePage';

function HomePage() {
    const [movies, setMovies] = useState([])
    const [page, setPage] = useState(1)

    const changePage = (page) => {
        setPage(page + 1)
    }

    const getPopular = async () => {
        const respons = await MovieService.getPopular(page)
        console.log(typeof respons)
        setMovies([...movies, ...respons.data.results])
    }

    useEffect(() => {
        getPopular()
    }, [page])

    useEffect(()=> {document.title = 'kinoman'},[])
    return (
        <main className='main'>
            <MainHomePage movies={movies} page={page} changePage={changePage}/>
        </main>
    )
}

export default HomePage;
