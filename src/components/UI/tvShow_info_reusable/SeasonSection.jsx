import React from 'react'
import { Link } from 'react-router-dom'

const pathToImg = 'https://www.themoviedb.org/t/p/w260_and_h390_bestv2'
const uncownImg = 'https://www.themoviedb.org/assets/2/v4/glyphicons/basic/glyphicons-basic-38-picture-grey-c2ebdbb057f2a7614185931650f8cee23fa137b93812ccb132b9df511df1cfac.svg'

function SeasonSection({tvShowObj}) {
    const lastSeason = tvShowObj.seasons[tvShowObj.seasons.length - 1]
    const posterPath = lastSeason.poster_path

    return (
        <section className='season_single_section'>
            <div className='season_single_section_head'>
                <Link className='showAll' to={'seasons'}>View All Seasons<span/></Link>
                <h3 className='title'>
                    {!tvShowObj.next_episode_to_air ? 'Last Season' : 'Current Season'}
                </h3>
                <span className='status'>(Status: {tvShowObj.status})</span>
            </div>
            <div className='season_single_section_body'>
                <div className='poster'>
                    <Link to={`seasons/${lastSeason.season_number}`}>
                        <img src={posterPath ? pathToImg + posterPath : uncownImg}/>
                    </Link>
                </div>
                <div className='content'>
                    <div className='content_head'>
                        <Link to={`seasons/${lastSeason.season_number}`}>
                            {lastSeason.name}
                        </Link>
                        <span>
                            {lastSeason.air_date} | {lastSeason.episode_count} Episodes
                        </span>
                    </div>
                    <div className='content_body'>
                        <p>{lastSeason.overview}</p>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default SeasonSection