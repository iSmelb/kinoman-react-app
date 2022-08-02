import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import SeasonsPageInfo from '../components/seasonsPage/SeasonsPageInfo';
import Loader from '../components/UI/loader/Loader';
import { useUpdateTitle } from '../hooks/useUpdateTitle';
import { clearState, getTvShowFromId } from '../redux/reducers/singleTvShowSlice';

function SeasonsPage() {
    const {id} = useParams()
    const [prevStateIsClear, setPrevStateIsClear] = useState(false)
    const dispatch = useDispatch()
    const {error, isLoading, singleTvShow} = useSelector(state => state.singleTvShow)
    const title = singleTvShow?.name || 'kinoman'

    useEffect(() => {
        dispatch(getTvShowFromId(id))
    },[id])

    useUpdateTitle(title + '/seasons', [singleTvShow])
    
    useEffect(() => {
        // флаг который не даёт отображать стейт, пока он не очистится при размонтировании прошлого компонента
        setPrevStateIsClear(true)
        return () => dispatch(clearState())
    },[])

    return (
        <>
            {isLoading && <Loader/>}
            {error && <div style={{ textAlign: 'center' }}>{error}</div>}
            {prevStateIsClear && singleTvShow && <SeasonsPageInfo/>}
        </>
        
    )
}

export default SeasonsPage