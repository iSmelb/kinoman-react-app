import { useLayoutEffect } from 'react';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useLocation, useParams } from 'react-router-dom';
import CastPageInfo from '../components/CastPageInfo';
import Loader from '../components/UI/loader/Loader';
import { useUpdateTitle } from '../hooks/useUpdateTitle';
import { getMovieFromId, clearState as clearStateMovie} from '../redux/reducers/movieSlice';
import { clearState, getTvShowFromId } from '../redux/reducers/singleTvShowSlice';

function CastPage() {
    const {id} = useParams()
    const {pathname} = useLocation()
    const dispatch = useDispatch()
    const type = pathname.search(/movies/) === -1 ? 'singleTvShow' : 'movie'
    const {error, isLoading} = useSelector(state => state[type])
    const credits = useSelector(state => type === 'movie' ?  state[type][type]?.credits : state[type][type]?.aggregate_credits)
    const mediaFile = useSelector(state => type === 'movie' ?  state[type][type] : state[type][type])
    const title = mediaFile?.title || mediaFile?.name

    useEffect(() => {

        if (type === 'movie') {
            dispatch(getMovieFromId(id))
        } else {
            dispatch(getTvShowFromId(id))
        }
        
    },[id])

    useUpdateTitle(title + '/cast', [mediaFile])

    // useLayoutEffect( () => {
    //     console.log('clear')
    //      dispatch(clearState())
    // },[])

    // useEffect(() => {
    //     return () => dispatch(clearState())
    //         //dispatch(clearState())
    //         //dispatch(clearStateMovie())
        
    // },[])

    return (
        <>
            {isLoading && <div><Loader/></div>}
            {error && <h1>{error}</h1>}
            {mediaFile && <CastPageInfo mediaFile={mediaFile} credits={credits} />}
        </>
        
    )
}

export default CastPage