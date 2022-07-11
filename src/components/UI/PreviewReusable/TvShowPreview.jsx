import React from 'react'
import { Link } from 'react-router-dom'

const unknownImg = `https://www.themoviedb.org/assets/2/v4/glyphicons/basic/glyphicons-basic-38-picture-grey-c2ebdbb057f2a7614185931650f8cee23fa137b93812ccb132b9df511df1cfac.svg`
const pathImg250and141 = 'https://www.themoviedb.org/t/p/w250_and_h141_face'
const pathImg94and141 = 'https://www.themoviedb.org/t/p/w94_and_h141_face'
const pathImg220and330 = 'https://www.themoviedb.org/t/p/w220_and_h330_face'
const pathImg300and450 = 'https://www.themoviedb.org/t/p/w300_and_h450_bestv2'
const pathImg58and87 = 'https://www.themoviedb.org/t/p/w58_and_h87_face/'

/**
    * size img can be: size250and141, size58and87, size94and141, size220and330, size300and450(default)
    */

function TvShowPreview({ tvObj, discriptions = false, sizeImg = 'size300and450' }) {

    const allSize = {
        size250and141: pathImg250and141,
        size94and141: pathImg94and141,
        size300and450: pathImg300and450,
        size220and330: pathImg220and330,
        size58and87: pathImg58and87,
    }

    return (
        <div className='tvPreview'>
            <div className='poster'>
                <Link to={`/tv/${tvObj.id}`}>
                    {!tvObj.poster_path &&
                        <img src={unknownImg} alt={tvObj.original_name + " Poster"} />
                    }
                    {(tvObj.poster_path && sizeImg) &&
                        <img loading='lazy' src={allSize[sizeImg] + tvObj.poster_path} alt={tvObj.name + " Poster"} />
                    }
                </Link>
            </div>
            <div className='title_date'>
                <Link to={`/tv/${tvObj.id}`} title={tvObj.name}>
                    {tvObj.name}
                </Link>
                <time dateTime={tvObj.first_air_date}>
                    <span>First show in: </span>
                    {tvObj.first_air_date}
                </time>
                {discriptions && <p>{tvObj.overview}</p>}
            </div>
        </div>
    )
}

export default TvShowPreview