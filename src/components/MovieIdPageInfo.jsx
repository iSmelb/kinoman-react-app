import React from 'react'
import CollectionsPoster from './UI/collections/CollectionsPoster'
import CastList from './UI/movie_info_reusable/CastList'
import MediaBlock from './UI/movie_info_reusable/MediaBlock'
import MovieInfo from './UI/movie_info_reusable/MovieInfo'
import ReviewsConteiner from './UI/movie_info_reusable/ReviewsConteiner'
import SimilarMovies from './UI/movie_info_reusable/SimilarMovies'

function MovieIdPageInfo() {
  return (
    <div className='movieIdPageInfo'>
      <MovieInfo/>
      <div className='gridConteiner conteiner'>
        <CastList/>
        <ReviewsConteiner/>
        <MediaBlock />
        <CollectionsPoster/>
        <SimilarMovies sizeImg='size250and141'/>
      </div>
    </div>
  )
}

export default MovieIdPageInfo