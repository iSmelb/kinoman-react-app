import React from 'react'
import { Link } from 'react-router-dom'
import SeasonPreview from '../PreviewReusable/SeasonPreview'

function SeasonSection({tvShowObj}) {
    const lastSeason = tvShowObj.seasons[tvShowObj.seasons.length - 1]

    return (
        <section className='season_single_section'>
            <div className='season_single_section_head'>
                <Link className='showAll' to={'seasons'}>View All Seasons<span/></Link>
                <h3 className='title'>
                    {!tvShowObj.next_episode_to_air ? 'Last Season' : 'Current Season'}
                </h3>
                <span className='status'>(Status: {tvShowObj.status})</span>
            </div>
            <SeasonPreview seasonObj={lastSeason}/>
        </section>
    )
}

export default SeasonSection