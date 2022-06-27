import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import Loader from '../components/UI/loader/Loader';
import { getTvShowFromId } from '../redux/reducers/singleTvShowSlice';
import { useUpdateTitle } from '../hooks/useUpdateTitle';
import SingleTvShowInfo from '../components/SingleTvShowInfo'

function SingleTvShowPage() {
    const params = useParams()
    const tvShowId = params.id
    const dispatch = useDispatch()
    const { singleTvShow, isLoading, error } = useSelector(state => state.singleTvShow)

    useEffect(() => {
        dispatch(getTvShowFromId(tvShowId))
        window.scrollTo(0, 0)
    }, [tvShowId])

    useUpdateTitle(singleTvShow?.name, [singleTvShow])

    return (
        <>
            {isLoading && <div><Loader/></div>}
            {error && <h1>{error}</h1>}
            {singleTvShow && <SingleTvShowInfo/>}
        </>
    )
}

export default SingleTvShowPage