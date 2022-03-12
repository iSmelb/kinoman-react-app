import React from 'react'
import CollectionsPoster from './UI/collections/CollectionsPoster'
import MovieInfo from './UI/movie_info_reusable/MovieInfo'

function MovieIdPageInfo({movie}) {
  return (
    <div className='movieIdPageInfo'>
        <MovieInfo movie={movie}/>
        {movie.belongs_to_collection && <CollectionsPoster collectionInfo = {movie.belongs_to_collection}/>}
    </div>
  )
}

export default MovieIdPageInfo