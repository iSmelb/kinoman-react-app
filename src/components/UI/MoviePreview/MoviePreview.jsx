import React from 'react';
import { Link } from 'react-router-dom';

function MoviePreview({ movie }) {

  
  return (
    <div className='movie_preview'>
      <Link to={`/movies/${movie.id}`}>
        <img src={"http://image.tmdb.org/t/p/w500" + movie.poster_path} alt={movie.title + " Poster"} />
      </Link>
      <div className='title_date'>
        <Link to={`/movies/${movie.id}`}>{movie.title}</Link>
        <time dateTime={movie.release_date}>{movie.release_date}</time>
      </div>
    </div>
  )
}

export default MoviePreview;
