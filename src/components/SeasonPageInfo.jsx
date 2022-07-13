import React from 'react'
import { useSelector } from 'react-redux'
import EpisodesList from './SeasonPage/EpisodesList'
import SeasonPagination from './SeasonPage/SeasonPagination'
import MiniMediaBanner from './UI/reusable/MiniMediaBanner'

function SeasonPageInfo() {
    const { season, singleTvShow } = useSelector(state => state.singleTvShow)
    const seasonInfo = { ...season, tvId: singleTvShow?.id }
    
    return (
        <div className='seasonPageInfo'>
            <MiniMediaBanner className='season_page' mediaFile={seasonInfo} />
            <SeasonPagination singleTvShow={singleTvShow} season={season}/>
            <hr/>
            <EpisodesList season={season}/>
        </div>
    )
}

export default SeasonPageInfo