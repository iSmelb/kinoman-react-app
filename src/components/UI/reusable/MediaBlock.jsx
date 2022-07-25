import TabPanelUnstyled from '@mui/base/TabPanelUnstyled'
import TabsListUnstyled from '@mui/base/TabsListUnstyled'
import TabsUnstyled from '@mui/base/TabsUnstyled'
import TabUnstyled from '@mui/base/TabUnstyled'
import { useState } from 'react'
import { useDispatch } from 'react-redux'
import { Link } from 'react-router-dom'
import { changeKeyForMovie, togglePlayer } from '../../../redux/reducers/playerSlice'

function MediaBlock({images, videos}) {
    const arrTrailers = videos.filter(video => video.type === 'Trailer' || video.type === 'Teaser')
    const [linkToAllContent, setLinkToAllContent] = useState('media/posters')
    const dispatch = useDispatch()

    const openPlayer = (e) => {
        dispatch(togglePlayer())
        dispatch(changeKeyForMovie(e.target.dataset.keymovie))
        document.body.classList.add('stop-scrolling')
    }

    const changeLinkToShowAll = (e) => {
        setLinkToAllContent('media/' + e.target.dataset.name)
    }

    return (
        <section className='media'>
            <TabsUnstyled defaultValue={0}>
                <h3>Media</h3>
                <TabsListUnstyled>
                    <TabUnstyled data-name='posters' onChange={changeLinkToShowAll}>
                        Posters {images.posters.length}
                    </TabUnstyled>
                    <TabUnstyled data-name='backdrops' onChange={changeLinkToShowAll}>
                        Backdrops {images.backdrops.length}
                    </TabUnstyled>
                    <TabUnstyled data-name='video' onChange={changeLinkToShowAll}>
                        Video {videos.length}
                    </TabUnstyled>
                </TabsListUnstyled>
                <div className='showAll'>
                    <Link className='showAll_link' to={linkToAllContent}>Show All</Link>
                </div>
                <div className='content'>
                    <TabPanelUnstyled className='posters' value={0}>
                        {images.posters.map((poster, index) => (index < 8) &&
                            <div key={index + poster.file_path}>
                                <img loading='lazy' src={`https://www.themoviedb.org/t/p/w220_and_h330_face${poster.file_path}`} alt="poster" />
                            </div>
                        )}
                    </TabPanelUnstyled>
                    <TabPanelUnstyled className='backdrops' value={1}>
                        {images.backdrops.map((backdrop, index) => (index < 3) &&
                            <div key={index + backdrop.file_path}>
                                <img loading='lazy' src={`https://www.themoviedb.org/t/p/w533_and_h300_bestv2/${backdrop.file_path}`} alt="backdrop" />
                            </div>
                        )}
                    </TabPanelUnstyled>
                    <TabPanelUnstyled className='video' value={2}>
                        {arrTrailers.map((video, index) => (index < 4) &&
                            <div
                                key={video.key}
                                style={{ backgroundImage: `url('https://i.ytimg.com/vi/${video.key}/hqdefault.jpg')`, backgroundSize: 'cover'}}
                                data-keymovie={video.key}
                                onClick={openPlayer}
                            />)}
                    </TabPanelUnstyled>
                </div>
            </TabsUnstyled>
        </section>
    )
}

export default MediaBlock