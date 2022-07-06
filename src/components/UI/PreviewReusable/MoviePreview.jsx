import { Link } from 'react-router-dom';

const unkownImg = `https://www.themoviedb.org/assets/2/v4/glyphicons/basic/glyphicons-basic-38-picture-grey-c2ebdbb057f2a7614185931650f8cee23fa137b93812ccb132b9df511df1cfac.svg`
const pathImg250and141 = 'https://www.themoviedb.org/t/p/w250_and_h141_face'
const pathImg220and330 = 'https://www.themoviedb.org/t/p/w220_and_h330_face'
const pathImg94and141 = 'https://www.themoviedb.org/t/p/w94_and_h141_face'
const pathImg58and87 = 'https://www.themoviedb.org/t/p/w58_and_h87_face/'
const pathImg500and750 = 'http://image.tmdb.org/t/p/w500'

/**
  * size img can be: size250and141, size58and87, size94and141, size220and330, size500and750(default)
  */

function MoviePreview({ movie, discriptions = false, sizeImg = 'size500and750' }) {

  const allSize = {
    size250and141: pathImg250and141,
    size94and141: pathImg94and141,
    size500and750: pathImg500and750,
    size220and330: pathImg220and330,
    size58and87: pathImg58and87,
  }

  return (
    <div className='movie_preview'>
      <div className='poster'>
        <Link to={`/movies/${movie.id}`}>
          {!movie.poster_path &&
            <img src={unkownImg} alt={movie.original_name + " Poster"} />
          }
          {(movie.poster_path && sizeImg) &&
            <img src={allSize[sizeImg] + movie.poster_path} alt={movie.title + " Poster"} />
          }
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
