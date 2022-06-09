import React from 'react';
import { Link } from 'react-router-dom';

const unkownImg = `https://www.themoviedb.org/assets/2/v4/glyphicons/basic/glyphicons-basic-38-picture-grey-c2ebdbb057f2a7614185931650f8cee23fa137b93812ccb132b9df511df1cfac.svg`
const pathImg250and141 = 'https://www.themoviedb.org/t/p/w250_and_h141_face/'
const pathImg94and141 = 'https://www.themoviedb.org/t/p/w94_and_h141_face/'

function MoviePreview({ movie, size250and141 = false, size94and141 = false, discriptions = false }) {

  return (
    <div className='movie_preview'>
      <div className='poster'>
        <Link to={`/movies/${movie.id}`}>
          {!movie.poster_path && <img src={unkownImg} alt={movie.original_name + " Poster"} /> }
          {(movie.poster_path && size250and141) && <img src={pathImg250and141 + movie.poster_path} alt={movie.title + " Poster"} />}
          {(movie.poster_path && size94and141) && <img src={pathImg94and141 + movie.poster_path} alt={movie.title + " Poster"} />}   
          {(movie.poster_path && (!size94and141 && !size250and141)) && <img src={"http://image.tmdb.org/t/p/w500" + movie.poster_path} alt={movie.title + " Poster"} /> }
        </Link>
      </div>
      <div className='title_date'>
        <Link to={`/movies/${movie.id}`} title={movie.title}>{movie.title}</Link>
        <time dateTime={movie.release_date}>{movie.release_date}</time>
        {discriptions && <p>{movie.overview}</p>}
      </div>
    </div>
  )
}

export default MoviePreview;
