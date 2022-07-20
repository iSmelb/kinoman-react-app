import React from 'react'
import { useLocation, useSearchParams } from 'react-router-dom'
import filterLang from '../utils/filterLanguage'
import ImagesList from './mediaPage/ImagesList'
import MediaResultPanel from './UI/reusable/MediaResultPanel'
import MiniMediaBanner from './UI/reusable/MiniMediaBanner'

function MediaImagesPageInfo({ mediaFile }) {
    const { pathname } = useLocation()
    const imagesType = pathname.search(/posters/) === -1 ? 'backdrops' : 'posters'
    const images = filterLang(mediaFile.images[imagesType])
    const [searchParams] = useSearchParams();
    const searchLang = searchParams.get('language') || ''
    const sortedImages = Object.entries(images).sort((a, b) => a[0] > b[0] ? 1 : -1)
    const imagesToRend = searchLang ? images[searchLang] : sortedImages[0][1]

    const data = {
        title: imagesType || '',
        totalCount: mediaFile.images[imagesType].length,
        results: sortedImages,
        elementsToRend: imagesToRend || [],
        type: 'images'
    }

    return (
        <div className='MediaImagesPageInfo'>
            <MiniMediaBanner mediaFile={mediaFile} />
            <div className='images_result conteiner'>
                <MediaResultPanel data={data} />
                <ImagesList data={data}/>
            </div>
        </div>
    )
}

export default MediaImagesPageInfo