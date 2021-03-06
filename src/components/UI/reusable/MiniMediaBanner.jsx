import React from 'react'
import { useLocation } from 'react-router-dom'
import MoviePreview from '../PreviewReusable/MoviePreview'
import TvShowPreview from '../PreviewReusable/TvShowPreview'

function MiniMediaBanner({mediaFile, className = ''}) {
    const {pathname} = useLocation()
    const isMovie = pathname.search(/movies/) === -1 ? false : true

    return (
        <section className={`mini_media_banner ${className}`}>
                <div className='goBack conteiner'>
                    {isMovie 
                        ? <MoviePreview movie={mediaFile} sizeImg = 'size58and87'/>
                        : <TvShowPreview tvObj={mediaFile} sizeImg = 'size58and87'/>
                    }
                </div>
        </section>
    )
}

export default MiniMediaBanner