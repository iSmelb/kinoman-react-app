import React from 'react'
import { useSelector } from 'react-redux'
import CollectionsPoster from './UI/collections/CollectionsPoster'
import CastList from './UI/reusable/CastList'
import MediaBlock from './UI/movie_info_reusable/MediaBlock'
import MovieInfo from './UI/movie_info_reusable/MovieInfo'
import ReviewsConteiner from './UI/reusable/ReviewsConteiner'
import RecommendationsBlock from './UI/movie_info_reusable/RecommendationsBlock'

function MovieIdPageInfo() {
  const cast = useSelector(state => state.movie.movie?.credits.cast)
  const reviews = useSelector(state => state.movie.movie?.reviews)
  const images = useSelector(state => state.movie.movie?.images)
  const videos = useSelector(state => state.movie.movie?.videos.results)
  const movies = useSelector(state => state.movie.movie?.recommendations.results)

  return (
    <div className='movieIdPageInfo'>
      <MovieInfo/>
      <div className='gridConteiner conteiner'>
        <CastList cast={cast}/>
        <ReviewsConteiner reviews={reviews}/>
        <MediaBlock images={images} videos={videos}/>
        <CollectionsPoster/>
        <RecommendationsBlock recommendations={movies} type='movies'/>
      </div>
    </div>
  )
}

export default MovieIdPageInfo