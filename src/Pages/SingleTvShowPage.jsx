import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import SingleTvShowInfo from '../components/SingleTvShowInfo';
import Loader from '../components/UI/loader/Loader';
import { useUpdateTitle } from '../hooks/useUpdateTitle';
import { clearState, getTvShowFromId } from '../redux/reducers/singleTvShowSlice';

function SingleTvShowPage() {
    const params = useParams()
    const [prevStateIsClear, setPrevStateIsClear] = useState(false)
    const tvShowId = params.id
    const dispatch = useDispatch()
    const { singleTvShow, isLoading, error } = useSelector(state => state.singleTvShow)
    
    useEffect(() => {
        dispatch(getTvShowFromId(tvShowId))
        window.scrollTo(0, 0)
    }, [tvShowId])

    useEffect(() => {
        // флаг который не даёт отображать стейт, пока он не очистится при размонтировании прошлого компонента
        setPrevStateIsClear(true) 
        return () => dispatch(clearState())
    },[])

    useUpdateTitle(singleTvShow?.name, [singleTvShow])

    return (
        <>
            {isLoading && <div><Loader/></div>}
            {error && <h1>{error}</h1>}
            {prevStateIsClear && singleTvShow && <SingleTvShowInfo/>}
        </>
    )
}

export default SingleTvShowPage