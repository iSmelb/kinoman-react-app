import React from 'react'
import { useSelector } from 'react-redux'
import SeasonPreview from './UI/PreviewReusable/SeasonPreview'
import MiniMediaBanner from './UI/reusable/MiniMediaBanner'

function SeasonsPageInfo() {
    const { singleTvShow } = useSelector(state => state.singleTvShow)

    return (
        <>
            <MiniMediaBanner mediaFile={singleTvShow} />
            <div className='seasons_list conteiner'>
                {singleTvShow.seasons.map(season => <SeasonPreview key={season.id} seasonObj={season} sizeImg = 'size130and195'/>)}
            </div>
        </>
    )
}

export default SeasonsPageInfo