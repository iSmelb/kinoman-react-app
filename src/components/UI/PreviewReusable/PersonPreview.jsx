import React from 'react'
import { Link } from 'react-router-dom'

function PersonPreview({ personInfo }) {

    return (
        <div className='personPreview'>
            <div className='photo'>
                <Link to='#'>
                    <img
                        src={
                            personInfo.profile_path
                                ? 'https://www.themoviedb.org/t/p/w138_and_h175_face/' + personInfo.profile_path
                                : 'https://www.themoviedb.org/assets/2/v4/glyphicons/basic/glyphicons-basic-4-user-grey-d8fe957375e70239d6abdd549fd7568c89281b2179b5f4470e2e12895792dfa5.svg'
                        }
                        alt={personInfo.name} />
                </Link>
            </div>
            <div className='name'>
                <h5>
                    <Link to="#">
                        {personInfo.name}
                    </Link>
                </h5>
                <span>
                    {personInfo.character}
                </span>
            </div>
        </div>
    )
}

export default PersonPreview