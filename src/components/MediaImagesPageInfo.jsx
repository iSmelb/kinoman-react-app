import React from 'react'
import { useEffect } from 'react'
import { useLocation, useSearchParams } from 'react-router-dom'
import filterLang from '../utils/filterLanguage'
import ImagesList from './mediaPage/ImagesList'
import LanguageResultPanel from './UI/reusable/LanguageResultPanel'
import MiniMediaBanner from './UI/reusable/MiniMediaBanner'

function MediaImagesPageInfo({ mediaFile }) {
    const { pathname } = useLocation()
    const imagesType = pathname.search(/posters/) === -1 ? 'backdrops' : 'posters'
    const images = filterLang(mediaFile.images[imagesType])
    const [searchParams, setSearchParams] = useSearchParams();
    const searchLang = searchParams.get('language') || ''
    const data = {
        title: imagesType || '',
        totalCount: mediaFile.images[imagesType].length,
        results: Object.entries(images).sort((a, b) => a[0] > b[0] ? 1 : -1),
        imagesToRend: images[searchLang] || []
    }

    useEffect(() => {
        if(!searchLang) {
            setSearchParams({language: data.results[0][0]})
        }
    },[])

    return (
        <div className='MediaImagesPageInfo'>
            <MiniMediaBanner mediaFile={mediaFile} />
            <div className='images_result conteiner'>
                <LanguageResultPanel data={data} />
                <ImagesList data={data}/>
            </div>
        </div>
    )
}

export default MediaImagesPageInfo