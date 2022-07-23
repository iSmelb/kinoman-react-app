import React from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'

const unknownImg = `https://www.themoviedb.org/assets/2/v4/glyphicons/basic/glyphicons-basic-38-picture-grey-c2ebdbb057f2a7614185931650f8cee23fa137b93812ccb132b9df511df1cfac.svg`

function TvShowInfo() {
    const { singleTvShow } = useSelector(state => state.singleTvShow)

    return (
        <section
            style={{
                backgroundImage: `linear-gradient( to right, rgba(6, 17, 26, 0.9) 0%, rgba(6, 17, 26, 0.9) 100%), url('https://image.tmdb.org/t/p/w1920_and_h800_multi_faces/${singleTvShow.backdrop_path}')`,
                backgroundSize: 'cover',
                backgroundPosition: 'center'
            }}
            className='tvShow_info_bg'
        >
            <div className='tvShow_info conteiner'>
                <div className='mainPoster'>
                    {singleTvShow.poster_path && <img loading='lazy' src={'https://www.themoviedb.org/t/p/w300_and_h450_bestv2' + singleTvShow.poster_path} alt={'poster' + singleTvShow.name} />}
                    {!singleTvShow.poster_path && <img src={unknownImg} alt={singleTvShow.name} />}
                </div>
                <div className='info'>
                    <h1 className='title'>
                        <a target='_blank' rel="noreferrer" href={"https://www.themoviedb.org/tv/" + singleTvShow.id}>
                            {singleTvShow.name}
                        </a>
                    </h1>
                    <span className='original_title'>
                        ({singleTvShow.original_name})
                    </span>
                    <div className='vote'>
                        <span>
                            Rating: {singleTvShow.vote_average.toFixed(1)}/10
                            ({singleTvShow.vote_count} votes)
                        </span>
                    </div>
                    <div className='date_genres'>
                        <ul className='list_genres'>
                            <li>Genres:</li>
                            {singleTvShow.genres.map((genr, index) =>
                                <li key={genr.id}>
                                    {index + 1 !== singleTvShow.genres.length ? genr.name + ', ' : genr.name + '.'}
                                </li>)
                            }
                        </ul>
                        <time className='first_air_date' dateTime={singleTvShow.first_air_date}>
                            First air date: {singleTvShow.first_air_date}
                        </time>
                        <time className='last_air_date' dateTime={singleTvShow.last_air_date}>
                            Last air date: {singleTvShow.last_air_date}
                        </time>
                        {singleTvShow.next_episode_to_air &&
                            <time className='next_episode_to_air' dateTime={singleTvShow.next_episode_to_air.air_date}>
                                Next episode to air: {singleTvShow.next_episode_to_air.air_date}
                            </time>
                        }
                        {!!singleTvShow.episode_run_time.length && 
                            <span>Episode duration: {singleTvShow.episode_run_time[0]}m</span>
                        }
                    </div>
                </div>
                <div className='discriptions'>
                    <div className='text'>
                        {singleTvShow.tagline &&
                            <span className='tagline'>
                                <em>{singleTvShow.tagline}</em>
                            </span>
                        }
                        <h4>Overview</h4>
                        <p>{singleTvShow.overview}</p>
                    </div>
                </div>
                <div className='created_by'>
                    {singleTvShow.created_by.map(creator =>
                        <div key={creator.id} className='creator'>
                            <h4>
                                <Link to={`/people/${creator.id}`}>{creator.name}</Link>
                            </h4>
                            <span>Creator</span>
                        </div>)
                    }
                </div>
            </div>
        </section>
    )
}

export default TvShowInfo