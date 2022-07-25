import React from 'react'
import { useSelector } from 'react-redux'
import runtimeMovie from '../../../utils/runtimeMovie'

const unkownImg = `https://www.themoviedb.org/assets/2/v4/glyphicons/basic/glyphicons-basic-38-picture-grey-c2ebdbb057f2a7614185931650f8cee23fa137b93812ccb132b9df511df1cfac.svg`

function MovieInfo() {
    const {movie} = useSelector(state => state.movie)
    const runtime = runtimeMovie(movie.runtime)
    const toUSD = new Intl.NumberFormat('en', {
        style: 'currency',
        currency: 'USD',
        currencyDisplay: "symbol",
        useGrouping: true,
        minimumFractionDigits: 0
    })
    const budget = toUSD.format(movie.budget)
    const revenue = toUSD.format(movie.revenue)

    return (
        <section 
            style={{
                backgroundImage: `linear-gradient( to right, rgba(6, 17, 26, 0.9) 0%, rgba(6, 17, 26, 0.9) 100%), url('https://image.tmdb.org/t/p/w1920_and_h800_multi_faces/${movie.backdrop_path}')`,
                backgroundSize: 'cover',
                backgroundPosition: 'center'
            }}
            className='movie_info_bg'
        >
            <div className='movie_info conteiner'>
                <div className='mainPoster'>
                    {movie.poster_path && <img loading='lazy' src={"https://image.tmdb.org/t/p/w500" + movie.poster_path} alt={movie.original_title} />}
                    {!movie.poster_path && <img src={unkownImg} alt={movie.original_title} />}
                </div>
                <div className='info'>
                    <h1 className='title'>
                        <a target='_blank' rel="noreferrer" href={"https://www.themoviedb.org/movie/" + movie.id}>
                            {movie.title}
                        </a>
                    </h1>
                    <span className='original_title'>
                        ({movie.original_title})
                    </span>
                    <div className='vote'>
                        <span>
                            Rating: {movie.vote_average.toFixed(1)}/10
                            ({movie.vote_count} votes)
                        </span>
                    </div>
                    <div className='date_genres'>
                        {movie.release_date && 
                            <time dateTime={movie.release_date}>Release date: {movie.release_date}</time>
                        }
                        <ul className='list_genres'>
                            <li>Genres: {!movie.genres.length && '-'}</li>
                            {movie.genres.map((genr, index) =>
                                <li key={genr.id}>
                                    {index + 1 !== movie.genres.length ? genr.name + ', ' : genr.name + '.'}
                                </li>)
                            }
                        </ul>
                        {!!movie.runtime && <span>Duration: {runtime}</span>}
                    </div>
                    <div className='budget'>
                        {!!movie.budget && <p>Budget: {budget}</p>}
                        {!!movie.revenue && <p>Revenue: {revenue}</p>}
                    </div>
                </div>
                <div className='discriptions'>
                    <div className='text'>
                        {movie.tagline &&
                            <span className='tagline'>
                                <em>{movie.tagline}</em>
                            </span>}
                        <h4>Overview</h4>
                        <p>{movie.overview}</p>
                    </div>
                    <div className='imdb_tmdb'>
                        <h4>More info on:</h4>
                        <a target="_blank" rel="noreferrer" href={"https://www.themoviedb.org/movie/" + movie.id}>TMDB,</a>
                        <a target="_blank" rel="noreferrer" href={"https://www.imdb.com/title/" + movie.imdb_id}>IMDb.</a>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default MovieInfo