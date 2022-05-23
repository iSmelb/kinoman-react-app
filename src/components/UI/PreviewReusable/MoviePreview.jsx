import React from 'react';
import { Link } from 'react-router-dom';

function MoviePreview({ movie, smallPoster = false }) {

  return (
    <div className='movie_preview'>
      <div className='poster'>
        <Link to={`/movies/${movie.id}`}>
          {smallPoster
            ? <img src={"	https://www.themoviedb.org/t/p/w250_and_h141_face/" + movie.poster_path} alt={movie.title + " Poster"} />
            : <img src={"http://image.tmdb.org/t/p/w500" + movie.poster_path} alt={movie.title + " Poster"} />
          }
        </Link>
      </div>
      <div className='title_date'>
        <Link to={`/movies/${movie.id}`} title={movie.title}>{movie.title}</Link>
        <time dateTime={movie.release_date}>{movie.release_date}</time>
      </div>
    </div>
  )
}

export default MoviePreview;
