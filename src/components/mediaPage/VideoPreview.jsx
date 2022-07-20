import React from 'react'
import { useDispatch } from 'react-redux'
import { changeKeyForMovie, togglePlayer } from '../../redux/reducers/playerSlice'

function VideoPreview({ video }) {
    const dispatch = useDispatch()
    const openPlayer = (e) => {
        dispatch(changeKeyForMovie(e.target.dataset.keymovie))
        dispatch(togglePlayer())
        document.body.classList.add('stop-scrolling')
    }

    return (
        <div className='videoPreview'>
            <div
                className='poster'
                style={{ 
                    backgroundImage: `url('https://i.ytimg.com/vi/${video.key}/hqdefault.jpg')`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center'
                }}
                data-keymovie={video.key}
                onClick={openPlayer}
            />
            <div className='info'>
                <h3>
                    <a target='_blank' rel="noreferrer" href={`https://www.youtube.com/watch?v=${video.key}`}>
                        {video.name}
                    </a>
                </h3>
                <h4>{video.type} | {video.published_at.slice(0,10)}</h4>
            </div>
        </div>
    )
}

export default VideoPreview