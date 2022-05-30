import React from 'react'
import CollectionsPoster from './UI/collections/CollectionsPoster'
import CastList from './UI/movie_info_reusable/CastList'
import MediaBlock from './UI/movie_info_reusable/MediaBlock'
import MovieInfo from './UI/movie_info_reusable/MovieInfo'
import ReviewsConteiner from './UI/movie_info_reusable/ReviewsConteiner'
import SimilarMovies from './UI/movie_info_reusable/SimilarMovies'

function MovieIdPageInfo({ movie, credits, reviews, similarMovies, images, video }) {
  return (
    <div className='movieIdPageInfo'>
      <MovieInfo movie={movie} />
      <div className='gridConteiner conteiner'>
        {credits && <CastList objPersons={credits} />}
        {reviews && <ReviewsConteiner reviews={reviews} />}
        {(images && video) && <MediaBlock images={images} video={video} />}
        {movie.belongs_to_collection && <CollectionsPoster collectionInfo={movie.belongs_to_collection} />}
        {similarMovies && <SimilarMovies movies={similarMovies} />}
      </div>
    </div>
  )
}

export default MovieIdPageInfo