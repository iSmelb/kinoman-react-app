import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useLocation, useParams } from 'react-router-dom';
import MediaImagesPageInfo from '../components/MediaImagesPageInfo';
import Loader from '../components/UI/loader/Loader';
import { useUpdateTitle } from '../hooks/useUpdateTitle';
import { clearState as clearStateMovie, getMovieFromId } from '../redux/reducers/movieSlice';
import { clearState, getTvShowFromId } from '../redux/reducers/singleTvShowSlice';

function MediaImagesPage() {
    const { id } = useParams()
    const { pathname, search } = useLocation()
    const mediaType = pathname.search(/movies/) === -1 ? 'singleTvShow' : 'movie'
    const [prevStateIsClear, setPrevStateIsClear] = useState(false)
    const { error, isLoading } = useSelector(state => state[mediaType])
    const mediaFile = useSelector(state => state[mediaType][mediaType])
    const title = mediaFile?.title || mediaFile?.name
    const dispatch = useDispatch()

    useEffect(() => {
        if (mediaType === 'movie') {
            dispatch(getMovieFromId(id))
        } else {
            dispatch(getTvShowFromId(id))
        }
    }, [id])

    useUpdateTitle(`${pathname.replace(/\d+/, title)}/${search}`, [mediaFile, pathname, search])

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
            {isLoading && <div><Loader /></div>}
            {error && <div style={{ textAlign: 'center' }}>{error}</div>}
            {prevStateIsClear && mediaFile && <MediaImagesPageInfo mediaFile={mediaFile}/>}
        </>
    )
}

export default MediaImagesPage