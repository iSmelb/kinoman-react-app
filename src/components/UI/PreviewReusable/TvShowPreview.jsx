import React from 'react'
import { Link } from 'react-router-dom'

const unkownImg = `https://www.themoviedb.org/assets/2/v4/glyphicons/basic/glyphicons-basic-38-picture-grey-c2ebdbb057f2a7614185931650f8cee23fa137b93812ccb132b9df511df1cfac.svg`
const pathImg250and141 = 'https://www.themoviedb.org/t/p/w250_and_h141_face'
const pathImg94and141 = 'https://www.themoviedb.org/t/p/w94_and_h141_face'
const pathImg220and330 = 'https://www.themoviedb.org/t/p/w220_and_h330_face'
const pathImg500and750 = 'http://image.tmdb.org/t/p/w500'

/**
    * size img can be: size250and141, size94and141, size220and330, size500and750(default)
    */

function TvShowPreview({ tvObj, discriptions = false, sizeImg = 'size500and750' }) {

    const allSize = {
        size250and141: pathImg250and141,
        size94and141: pathImg94and141,
        size500and750: pathImg500and750,
        size220and330: pathImg220and330,
    }

    return (
        <div className='tvPreview'>
            <div className='poster'>
                <Link to={`/tv/${tvObj.id}`}>
                    {!tvObj.poster_path &&
                        <img src={unkownImg} alt={tvObj.original_name + " Poster"} />
                    }
                    {(tvObj.poster_path && sizeImg) &&
                        <img src={allSize[sizeImg] + tvObj.poster_path} alt={tvObj.original_name + " Poster"} />
                    }
                </Link>
            </div>
            <div className='title_date'>
                <Link to={`/tv/${tvObj.id}`} title={tvObj.original_name}>
                    {tvObj.original_name}
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