import { useEffect, useLayoutEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useLocation, useParams } from 'react-router-dom';
import CastPageInfo from '../components/CastPageInfo';
import Loader from '../components/UI/loader/Loader';
import { useUpdateTitle } from '../hooks/useUpdateTitle';
import { getMovieFromId, clearState as clearStateMovie} from '../redux/reducers/movieSlice';
import { getTvShowFromId, clearState} from '../redux/reducers/singleTvShowSlice';

function CastPage() {
    const {id} = useParams()
    const [prevStateIsClear, setPrevStateIsClear] = useState(false)
    const {pathname} = useLocation()
    const dispatch = useDispatch()
    const type = pathname.search(/movies/) === -1 ? 'singleTvShow' : 'movie'
    const {error, isLoading} = useSelector(state => state[type])
    const credits = useSelector(state => type === 'movie' ?  state[type][type]?.credits : state[type][type]?.aggregate_credits)
    const mediaFile = useSelector(state => type === 'movie' ?  state[type][type] : state[type][type])
    const title = mediaFile?.title || mediaFile?.name || 'kinoman'
    
    useEffect(() => {
        if (type === 'movie') {
            dispatch(getMovieFromId(id))
        } else {
            dispatch(getTvShowFromId(id))
        }
    },[id])

    useUpdateTitle(title + '/cast', [mediaFile])
    
    useEffect(() => {
        // флаг который не даёт отображать стейт, пока он не очистится при размонтировании прошлого компонента
        setPrevStateIsClear(true)
        return () => {
            dispatch(clearState())
            dispatch(clearStateMovie())
        }
    },[])

    return (
        <>
            {isLoading && <div><Loader/></div>}
            {error && <h1>{error}</h1>}
            {prevStateIsClear && mediaFile && <CastPageInfo mediaFile={mediaFile} credits={credits} />}
        </>
        
    )
}

export default CastPage