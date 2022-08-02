import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useLocation, useParams } from 'react-router-dom';
import MediaVideosPageInfo from '../components/mediaPage/MediaVideosPageInfo';
import Loader from '../components/UI/loader/Loader';
import { useUpdateTitle } from '../hooks/useUpdateTitle';
import { clearState as clearStateMovie, getMovieFromId } from '../redux/reducers/movieSlice';
import { clearState, getTvShowFromId } from '../redux/reducers/singleTvShowSlice';

function MediaVideoPage() {
    const { id } = useParams()
    const { pathname, search } = useLocation()
    const mediaType = pathname.search(/movies/) === -1 ? 'singleTvShow' : 'movie'
    const [prevStateIsClear, setPrevStateIsClear] = useState(false)
    const { error, isLoading } = useSelector(state => state[mediaType])
    const mediaFile = useSelector(state => state[mediaType][mediaType])
    const title = mediaFile?.title || mediaFile?.name || 'kinoman'
    const dispatch = useDispatch()

    useEffect(() => {
        if (mediaType === 'movie') {
            dispatch(getMovieFromId(id))
        } else {
            dispatch(getTvShowFromId(id))
        }
    }, [id])

    useUpdateTitle(`${pathname.replace(/\d+/, title).slice(1)}/${search}`, [mediaFile, pathname, search])

    useEffect(() => {
        // флаг который не даёт отображать стейт, пока он не очистится при размонтировании прошлого компонента
        setPrevStateIsClear(true)
        return () => {
            dispatch(clearState())
            dispatch(clearStateMovie())
        }
    }, [])

    return (
        <>
            {isLoading && <Loader/>}
            {error && <div style={{ textAlign: 'center' }}>{error}</div>}
            {prevStateIsClear && mediaFile && <MediaVideosPageInfo mediaFile={mediaFile}/>}
        </>
    )
}

export default MediaVideoPage