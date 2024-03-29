import React from 'react'
import { useSelector } from 'react-redux'
import EpisodesList from './EpisodesList'
import SeasonPagination from './SeasonPagination'
import MiniMediaBanner from '../UI/reusable/MiniMediaBanner'

function SeasonPageInfo() {
    const { season, singleTvShow } = useSelector(state => state.singleTvShow)
    const tvId = singleTvShow?.id + '-' + singleTvShow?.name.replace(/\s/g, '-')
    const seasonInfo = { ...season, tvId: tvId}
    
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