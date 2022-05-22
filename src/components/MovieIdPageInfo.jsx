import React from 'react'
import CollectionsPoster from './UI/collections/CollectionsPoster'
import MovieInfo from './UI/movie_info_reusable/MovieInfo'
import SimilarMovies from './UI/movie_info_reusable/SimilarMovies'

function MovieIdPageInfo({movie, similarMovies}) {
  return (
    <div className='movieIdPageInfo'>
        <MovieInfo movie={movie}/>
        {movie.belongs_to_collection && <CollectionsPoster collectionInfo = {movie.belongs_to_collection}/>}
        {similarMovies && <SimilarMovies movies = {similarMovies} />}
    </div>
  )
}

export default MovieIdPageInfo