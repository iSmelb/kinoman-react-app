import React from 'react'
import CollectionsPoster from './UI/collections/CollectionsPoster'
import CastList from './UI/movie_info_reusable/CastList'
import MovieInfo from './UI/movie_info_reusable/MovieInfo'
import SimilarMovies from './UI/movie_info_reusable/SimilarMovies'

function MovieIdPageInfo({movie, credits, similarMovies}) {
  return (
    <div className='movieIdPageInfo'>
        <MovieInfo movie={movie}/>
        {credits && <CastList objPersons={credits}/>}
        {movie.belongs_to_collection && <CollectionsPoster collectionInfo = {movie.belongs_to_collection}/>}
        {similarMovies && <SimilarMovies movies = {similarMovies} />}
    </div>
  )
}

export default MovieIdPageInfo