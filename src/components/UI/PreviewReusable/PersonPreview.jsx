import React from 'react'
import { Link } from 'react-router-dom'

const unkownImg = 'https://www.themoviedb.org/assets/2/v4/glyphicons/basic/glyphicons-basic-4-user-grey-d8fe957375e70239d6abdd549fd7568c89281b2179b5f4470e2e12895792dfa5.svg'
const pathImg138and175 = 'https://www.themoviedb.org/t/p/w138_and_h175_face/'
const pathImg90and90 = 'https://www.themoviedb.org/t/p/w90_and_h90_face/'

function PersonPreview({ personInfo, size90and90 = false }) {

    return (
        <div className='personPreview'>
            <div className='photo'>
                <Link to='#'>
                    {!personInfo.profile_path &&
                        <img src={unkownImg} alt={personInfo.name} />
                    }
                    {(personInfo.profile_path && size90and90) &&
                        <img src={pathImg90and90 + personInfo.profile_path} alt={personInfo.name} />
                    }
                    {(personInfo.profile_path && !size90and90) &&
                        <img src={pathImg138and175 + personInfo.profile_path} alt={personInfo.name} />
                    }
                </Link>
            </div>
            <div className='name'>
                <h5>
                    <Link to="#">
                        {personInfo.name}
                    </Link>
                </h5>
                {'character' in personInfo &&
                    <p>
                        {personInfo.character}
                    </p>
                }
                {'known_for' in personInfo &&
                    <div className='known_for'>
                        <span>Known for: </span>
                        {personInfo.known_for.map(mediaFile => (mediaFile.media_type === 'tv')
                            ? <Link key={mediaFile.id} to={`/tv/${mediaFile.id}`}>{mediaFile.original_name }</Link> 
                            : <Link key={mediaFile.id} to={`/movies/${mediaFile.id}`}>{mediaFile.original_title }</Link> 
                        )}
                    </div>
                }
            </div>
        </div>
    )
}

export default PersonPreview