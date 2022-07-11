import React from 'react'
import { Link } from 'react-router-dom'

const pathToImg = 'https://www.themoviedb.org/t/p/w260_and_h390_bestv2'
const unknownImg = 'https://www.themoviedb.org/assets/2/v4/glyphicons/basic/glyphicons-basic-38-picture-grey-c2ebdbb057f2a7614185931650f8cee23fa137b93812ccb132b9df511df1cfac.svg'

function SeasonPreview({tvShowObj}) {
    const posterPath = tvShowObj.poster_path

    return (
        <div className='seasonPreview'>
                <div className='poster'>
                    <Link to={`seasons/${tvShowObj.season_number}`}>
                        <img src={posterPath ? pathToImg + posterPath : unknownImg}/>
                    </Link>
                </div>
                <div className='content'>
                    <div className='content_head'>
                        <Link to={`seasons/${tvShowObj.season_number}`}>
                            {tvShowObj.name}
                        </Link>
                        <span>
                            {tvShowObj.air_date} | {tvShowObj.episode_count} Episodes
                        </span>
                    </div>
                    <div className='content_body'>
                        <p>{tvShowObj.overview}</p>
                    </div>
                </div>
            </div>
    )
}

export default SeasonPreview