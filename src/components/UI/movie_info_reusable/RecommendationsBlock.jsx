import React from 'react'
import { useSelector } from 'react-redux'
import { useEffect, useRef } from 'react/cjs/react.development'
import TvShowPreview from '../PreviewReusable/TvShowPreview'
import MoviePreview from "../PreviewReusable/MoviePreview";

/**
    * size type can be movies(default), tv
    *
    *
    */

function RecommendationsMovies({ recommendations, type = 'movies' }) {
    const listMovies = useRef(null)

    useEffect(() => {
        listMovies.current.scrollTo(0, 0)
    }, [recommendations])

    return (
        <section className='recommendationsMovies'>
            <h3>Recommendations</h3>
            {type === 'movies' &&
                <div ref={listMovies} className='listMovies'>
                    {recommendations && recommendations.map(movie => <MoviePreview movie={movie} key={movie.id} sizeImg='size250and141' />)}
                </div>
            }
            {type === 'tv' &&
                <div ref={listMovies} className='listTvShow'>
                    {recommendations && recommendations.map(tvObj => <TvShowPreview tvObj={tvObj} key={tvObj.id} sizeImg='size250and141' />)}
                </div>
            }
            {!recommendations.length && 
                <span>We don't have enough data to suggest any recommendations based on this Show.</span>
            }
        </section>
    )
}

export default RecommendationsMovies