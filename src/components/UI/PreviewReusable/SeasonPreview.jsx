import React from 'react'
import { Link } from 'react-router-dom'

const unknownImg = 'https://www.themoviedb.org/assets/2/v4/glyphicons/basic/glyphicons-basic-38-picture-grey-c2ebdbb057f2a7614185931650f8cee23fa137b93812ccb132b9df511df1cfac.svg'
const pathToImg130and195 = 'https://www.themoviedb.org/t/p/w130_and_h195_bestv2'
const pathToImg260and390 = 'https://www.themoviedb.org/t/p/w260_and_h390_bestv2'

/**
  * size img can be:  size260and390(default), size130and195,
  */

function SeasonPreview({seasonObj, sizeImg = 'size260and390'}) {
    const posterPath = seasonObj.poster_path

    const allSize = {
        size260and390: pathToImg260and390,
        size130and195: pathToImg130and195,
    }

    return (
        <div className='seasonPreview'>
                <div className='poster'>
                    <Link to={`${seasonObj.season_number}`}>
                    {!posterPath 
                        ? <img src={unknownImg} alt={seasonObj.name}/>
                        : <img loading='lazy' src={allSize[sizeImg] + seasonObj.poster_path} alt={seasonObj.name}/>
                    }
                    </Link>
                </div>
                <div className='content'>
                    <div className='content_head'>
                        <Link to={`${seasonObj.season_number}`}>
                            {seasonObj.name}
                        </Link>
                        <span>
                            {seasonObj.air_date} | {seasonObj.episode_count} Episodes
                        </span>
                    </div>
                    <div className='content_body'>
                        <p>{seasonObj.overview}</p>
                    </div>
                </div>
            </div>
    )
}

export default SeasonPreview