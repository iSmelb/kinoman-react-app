import React from 'react'
import { Link } from 'react-router-dom'

const unknownImg = 'https://www.themoviedb.org/assets/2/v4/glyphicons/basic/glyphicons-basic-4-user-grey-d8fe957375e70239d6abdd549fd7568c89281b2179b5f4470e2e12895792dfa5.svg'
const pathImg66and66 = 'https://www.themoviedb.org/t/p/w66_and_h66_face'
const pathImg90and90 = 'https://www.themoviedb.org/t/p/w90_and_h90_face'
const pathImg138and175 = 'https://www.themoviedb.org/t/p/w138_and_h175_face/'
const pathImg235and235 = 'https://www.themoviedb.org/t/p/w235_and_h235_face/'

/**
    * size img can be: size90and90, size138and175(default), size235and235
    */

function PersonPreview({ personInfo, sizeImg = 'size138and175' }) {
    const allSize = {
        size138and175: pathImg138and175,
        size90and90: pathImg90and90,
        size235and235: pathImg235and235,
        size66and66: pathImg66and66,
    }
    const linkId = personInfo.id + '-' + personInfo.name.replace(/\s/g, '-')
    let character = personInfo?.character

    //указываем персонажа в сериале
    if ('roles' in personInfo) {
        character = personInfo.roles[0].character
    }

    return (
        <div className='personPreview'>
            <div className='photo'>
                <Link to={`/people/${linkId}`}>
                    {!personInfo.profile_path
                        ? <img src={unknownImg} alt={personInfo.name} />
                        : <img loading='lazy' src={allSize[sizeImg] + personInfo.profile_path} alt={personInfo.name} />
                    }
                </Link>
            </div>
            <div className='name'>
                <h5>
                    <Link to={`/people/${linkId}`}>
                        {personInfo.name}
                    </Link>
                </h5>
                {character &&
                    <p>
                        {character}
                    </p>
                }
                {personInfo?.total_episode_count &&
                    <p>
                        ({personInfo.total_episode_count} Episodes)
                    </p>
                }
                {personInfo?.job &&
                    <p>
                        {personInfo?.job}
                    </p>
                }
                {personInfo?.known_for &&
                    <div className='known_for'>
                        <span>Known for: </span>
                        {personInfo.known_for.map(mediaFile => (mediaFile.media_type === 'tv')
                            ? <Link
                                key={mediaFile.id}
                                to={`/tv/${mediaFile.id + '-' + mediaFile.name.replace(/\s/g, '-')}`}
                            >
                                {mediaFile.original_name}
                            </Link>
                            : <Link
                                key={mediaFile.id}
                                to={`/movies/${mediaFile.id + '-' + mediaFile.title.replace(/\s/g, '-')}`}
                            >
                                {mediaFile.original_title}
                            </Link>
                        )}
                    </div>
                }
            </div>
        </div>
    )
}

export default PersonPreview