import React from 'react'
import { Link } from 'react-router-dom'

function MediaCell({ elem }) {

    if (elem.media_type === 'tv') return (
            <div className='cellElem'>
                <div className='year'>
                    {elem.first_air_date ? elem.first_air_date.slice(0, 4) : '-'}
                </div>
                {('character' in elem) &&
                    <div className='title'>
                        <p>
                            <Link to={`/tv/${elem.id}`}>{elem.original_name}</Link> ({elem.episode_count} episodes) as {elem.character || '-'}
                        </p>
                    </div>
                }
                {elem.department &&
                    <div className='title'>
                        <p>
                            <Link to={`/tv/${elem.id}`}>{elem.original_name}</Link> ({elem.episode_count} episodes) ... {elem.job}
                        </p>
                    </div>
                }
            </div>
        )

    return (
        <div className='cellElem'>
            <div className='year'>
                {elem.release_date ? elem.release_date.slice(0, 4) : '-'}
            </div>
            {('character' in elem) &&
                <div className='title'>
                    <p>
                        <Link to={`/movies/${elem.id}`}>{elem.title}</Link> as {elem.character || '-'}
                    </p>
                </div>
            }
            {elem.department &&
                <div className='title'>
                    <p>
                        <Link to={`/movies/${elem.id}`}>{elem.title}</Link> ... {elem.job}
                    </p>
                </div>
            }
        </div>
    )
}

export default MediaCell