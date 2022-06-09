import React from 'react'
import { useSelector } from 'react-redux'
import { useEffect, useRef } from 'react/cjs/react.development'
import MoviePreview from '../PreviewReusable/MoviePreview'

function SimilarMovies() {
    let listMovies = useRef(null)
    const movies = useSelector(state => state.movie.movie.similar.results)
    
    useEffect(()=> {
        listMovies.current.scrollTo(0,0)
    }, [movies]) //можно сделать через локал стор, чтобы избавиться от еффекта в этом компоненте

    return (
        <section className='similarMovies'>
            <h3>Похожие фильмы</h3>
            <div ref={listMovies} className='listMovies'>
                {movies
                    ? movies.map(movie => <MoviePreview movie={movie} size250and141 key={movie.id}/>)
                    : <span>К сожелению ничего не найдено</span>
                }
            </div>
        </section>
    )
}

export default SimilarMovies