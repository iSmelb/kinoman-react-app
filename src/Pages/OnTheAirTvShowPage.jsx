import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Loader from '../components/UI/loader/Loader';
import TvShowPageContent from '../components/UI/tvShow_info_reusable/TvShowPageContent';
import { useUpdateTitle } from '../hooks/useUpdateTitle';
import { getOnTheAirTvShow } from '../redux/reducers/tvShowSlice';

function OnTheAirTvShowPage() {
    const {onTheAir, isLoading, error} = useSelector(state => state.tvShow)
    const tvShow = onTheAir?.results
    const [page, setPage] = useState(1)
    const total_pages = onTheAir?.total_pages
    const dispatch = useDispatch()

    const pages = {
        current_page: page,
        total_pages: total_pages,

        changePage: () => {
            setPage(page + 1)
        }
    }

    useEffect(() => {
        dispatch(getOnTheAirTvShow(page))
    }, [page])

    useUpdateTitle('tv-on the air')

    return (
        <>
            {isLoading && <Loader/>}
            {error && <div>{error}</div>}
            {tvShow && <TvShowPageContent tvShowList={tvShow} type='onTheAir' pages={pages}/>}
        </>
    )
}

export default OnTheAirTvShowPage