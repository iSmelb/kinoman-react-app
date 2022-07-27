import React from 'react'
import { Link } from 'react-router-dom'

function MediaCell({ elem }) {
    //делаем ячейку фильма или сериала в списке всех фильмов для человека
    let linkId
    if(elem.media_type === 'tv') {
        linkId = elem.id + '-' + elem.name.replace(/\s/g, '-')
    } else {
        linkId = elem.id + '-' + elem.title.replace(/\s/g, '-')
    }

    if (elem.media_type === 'tv') return (
            <div className='cellElem'>
                <div className='year'>
                    {elem.first_air_date ? elem.first_air_date.slice(0, 4) : '-'}
                </div>
                {('character' in elem) &&
                    <div className='title'>
                        <p>
                            <Link to={`/tv/${linkId}`}>{elem.name}</Link> ({elem.episode_count} episodes) as {elem.character || '-'}
                        </p>
                    </div>
                }
                {elem.department &&
                    <div className='title'>
                        <p>
                            <Link to={`/tv/${linkId}`}>{elem.name}</Link> ({elem.episode_count} episodes) ... {elem.job}
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
                        <Link to={`/movies/${linkId}`}>{elem.title}</Link> as {elem.character || '-'}
                    </p>
                </div>
            }
            {elem.department &&
                <div className='title'>
                    <p>
                        <Link to={`/movies/${linkId}`}>{elem.title}</Link> ... {elem.job}
                    </p>
                </div>
            }
        </div>
    )
}

export default MediaCell