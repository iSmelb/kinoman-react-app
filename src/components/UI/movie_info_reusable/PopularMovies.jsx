import React from 'react'
import { useSelector } from 'react-redux'
import MoviePreview from '../PreviewReusable/MoviePreview'

function PopularMovies() {
  const movies = useSelector(state => state.movies.populars)

  return (
    <section className='popular_movies'>
      <h3>What's Popular</h3>
      <div className='list_movies'>
        {movies?.results.map(movie => <MoviePreview key={movie.id} movie={movie} sizeImg='size220and330'/>)}
      </div>
    </section>
  )
}



export default PopularMovies