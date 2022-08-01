import React from 'react'
import { useSearchParams } from 'react-router-dom'
import filterTypeVideo from '../../utils/filterTypeVideo'
import VideosList from './VideosList'
import MediaResultPanel from '../UI/reusable/MediaResultPanel'
import MiniMediaBanner from '../UI/reusable/MiniMediaBanner'

function MediaVideosPageInfo({mediaFile}) {
    const [searchParams] = useSearchParams();
    const videos = filterTypeVideo(mediaFile.videos.results);
    const searchType = searchParams.get('type') || ''
    const sortedVideos = Object.entries(videos).sort((a, b) => a[0] > b[0] ? -1 : 1)
    let videosToRend = []
    if (searchType && !!sortedVideos.length) {
        videosToRend = videos[searchType]
    } else if (!searchType && !!sortedVideos.length) {
        videosToRend = sortedVideos[0][1]
    }

    const data = {
        title: 'videos',
        totalCount: mediaFile.videos.results.length,
        results: sortedVideos,
        elementsToRend: videosToRend,
        type: 'video'
    }

    return (
        <div className='MediaVideosPageInfo'>
            <MiniMediaBanner mediaFile={mediaFile}/>
            <div className='videos_result conteiner'>
                <MediaResultPanel data={data}/>
                <VideosList data={data}/>
            </div>
        </div>
    )
}

export default MediaVideosPageInfo