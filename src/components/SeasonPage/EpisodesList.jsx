import React from 'react'
import EpisodePreview from '../UI/PreviewReusable/EpisodePreview'

function EpisodesList({season}) {
    return (
        <div className='episodes_list conteiner'>
            <h2>Episodes <span>{season.episodes.length}</span></h2>
            {season?.episodes.map(episode => <EpisodePreview key={episode.id} episode={episode}/>)}
        </div>
    )
}

export default EpisodesList