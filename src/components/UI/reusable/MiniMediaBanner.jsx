import React from 'react'
import { useLocation } from 'react-router-dom'
import MoviePreview from '../PreviewReusable/MoviePreview'
import TvShowPreview from '../PreviewReusable/TvShowPreview'

function MiniMediaBanner({mediaFile}) {
    const {pathname} = useLocation()
    const isMovie = pathname.search(/movies/) === -1 ? false : true

    return (
        <div className='mini_media_banner'>
                <div className='goBack conteiner'>
                    {isMovie 
                        ? <MoviePreview movie={mediaFile} sizeImg = 'size58and87'/>
                        : <TvShowPreview tvObj={mediaFile} sizeImg = 'size58and87'/>
                    }
                </div>
            </div>
    )
}

export default MiniMediaBanner