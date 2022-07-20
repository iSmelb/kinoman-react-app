import React from 'react'
import VideoPreview from './VideoPreview'

function VideosList({data}) {
    console.log(data.elementsToRend)

    return (
        <div className={`videos_list`}>
            {data.elementsToRend.map(video => <VideoPreview key={video.key} video={video}/>)}
            {!data?.elementsToRend.length && <p>Videos not found</p>}
        </div>
    )
}

export default VideosList