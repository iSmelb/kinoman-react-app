import React from 'react'
import runtimeMovie from '../../../utils/runtimeMovie'
import spaceForNumber from '../../../utils/spaceForNumber'

function MovieInfo({ movie }) {
    let runtime = runtimeMovie(movie.runtime)
    let budget = spaceForNumber(movie.budget)
    let revenue = spaceForNumber(movie.revenue)

    return (
        <section style={{
            background: `linear-gradient( to right, rgba(0, 0, 0, 0.9), rgba(0, 0, 0, 0.9)), url('http://image.tmdb.org/t/p/w1920_and_h800_multi_faces/${movie.backdrop_path}')`,
            // backgroundSize: 'cover'
        }} className='movie_info_bg'>

            <div className='movie_info conteiner'>
                <img src={"http://image.tmdb.org/t/p/w500" + movie.poster_path} alt={movie.original_title} />
                <div className='info'>
                    <h1 className='title'>
                        <a target='_blank' href={"https://www.themoviedb.org/movie/" + movie.id}>
                            {movie.title}
                        </a>
                    </h1>
                    <span className='original_title'>
                        ({movie.original_title})
                    </span>
                    <div className='vote'>
                        <span>
                            Rating: {movie.vote_average}/10
                            ({movie.vote_count} votes)
                        </span>
                    </div>
                    <div className='date_genres'>
                        <time dateTime={movie.release_date}>Дата выхода: {movie.release_date}</time>
                        <ul className='list_genres'>
                            <li>Жанры:</li>
                            {movie.genres.map((genr, index) =>
                                <li key={genr.id}>
                                    {index + 1 !== movie.genres.length ? genr.name + ' ,' : genr.name + '.'}
                                </li>)}
                        </ul>
                        <span>Продолжительность: {runtime.hours}ч {runtime.minutes}м</span>
                    </div>
                    <div className='budget'>
                        <p>Бюджет: {budget} $</p>
                        <p>Сборы: {revenue} $</p>
                    </div>
                    <div className='discriptions'>
                        {movie.tagline &&
                            <span className='tagline'>
                                <em>{movie.tagline}</em>
                            </span>}
                        <h4>Описание</h4>
                        <p>{movie.overview}</p>
                    </div>
                    <div className='imdb_tmdb'>
                        <h4>Детальнее на:</h4>
                        <a target="_blank" href={"https://www.themoviedb.org/movie/" + movie.id}>TMDB,</a>
                        <a target="_blank" href={"https://www.imdb.com/title/" + movie.imdb_id}>IMDb.</a>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default MovieInfo