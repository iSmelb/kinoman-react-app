import React from 'react'
import { useEffect, useRef } from 'react/cjs/react.development'
import MoviePreview from '../PreviewReusable/MoviePreview'

function SimilarMovies({ movies }) {
    let listMovies = useRef(null)
    
    useEffect(()=> {
        listMovies.current.scrollTo(0,0)
    }, [movies]) //можно сделать через локал стор, чтобы избавиться от еффекта в этом компоненте

    return (
        <div className='similarMovies conteiner'>
            <h3>Похожие фильмы</h3>
            <div ref={listMovies} className='listMovies'>
                {movies
                    ? movies.map(movie => <MoviePreview movie={movie} smallPoster={true} key={movie.id} />)
                    : <span>К сожелению ничего не найдено</span>
                }
            </div>
        </div>
    )
}

export default SimilarMovies