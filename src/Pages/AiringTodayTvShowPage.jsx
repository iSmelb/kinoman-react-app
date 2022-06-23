import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Loader from '../components/UI/loader/Loader';
import TvShowPageContent from '../components/UI/tvShow_info_reusable/TvShowPageContent';
import { useUpdateTitle } from '../hooks/useUpdateTitle';
import { getAiringTodayTvShow } from '../redux/reducers/tvShowSlice';

function AiringTodayTvShowPage() {
    const {airingToday, isLoading, error} = useSelector(state => state.tvShow)
    const tvShow = airingToday?.results
    const dispatch = useDispatch()
    const [page, setPage] = useState(1)

    const changePage = () => {
        setPage(page + 1)
    }

    useEffect(() => {
        dispatch(getAiringTodayTvShow(page))
    }, [page])

    useUpdateTitle('tv-airing today')

    return (
        <>
            {isLoading && <Loader/>}
            {error && <div>{error}</div>}
            {tvShow && <TvShowPageContent tvShowList={tvShow} changePage={changePage} type='airingToday'/>}
        </>
    )
}

export default AiringTodayTvShowPage