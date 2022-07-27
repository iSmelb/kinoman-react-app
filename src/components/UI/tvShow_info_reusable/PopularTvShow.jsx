import React from 'react'
import { useSelector } from 'react-redux'
import TvShowPreview from '../PreviewReusable/TvShowPreview'

function PopularTvShow() {
    const tvShow = useSelector(state => state.tvShow.populars)

    return (
        <section className='popular_tvShow'>
            <h3>What's Popular</h3>
            <div className='list_tvShow'>
                {tvShow?.results.map(singleObj => <TvShowPreview key={singleObj.id} tvObj={singleObj} discriptions={false} sizeImg='size220and330'/>)}
            </div>
        </section>
    )
}

export default PopularTvShow