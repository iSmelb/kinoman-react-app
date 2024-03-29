import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import { clearState, getSeasonDetails, getTvShowFromId } from '../redux/reducers/singleTvShowSlice'
import { useUpdateTitle } from '../hooks/useUpdateTitle';
import SeasonPageInfo from '../components/SeasonPage/SeasonPageInfo'
import Loader from '../components/UI/loader/Loader';

function SeasonPage() {
    const params = useParams()
    const dispatch = useDispatch()
    const { isLoading, error, season, singleTvShow } = useSelector(state => state.singleTvShow)
    const title = singleTvShow?.name || 'kinoman'

    useEffect(() => {
        dispatch(getTvShowFromId(params.id))
    }, [params.id])

    useEffect(() => {
        dispatch(getSeasonDetails(params))
    }, [params.number])

    useUpdateTitle(`${title}/seasons/${season?.name}`, [season?.name])

    useEffect(() => {
        return ()=> dispatch(clearState())
    },[])

    return (
        <>
            {isLoading && <Loader/>}
            {error && <div style={{textAlign: 'center'}}>{error}</div>}
            {!error && season && <SeasonPageInfo />}
        </>
    )
}

export default SeasonPage