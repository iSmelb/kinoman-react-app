import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Loader from '../components/UI/loader/Loader';
import TvShowPageContent from '../components/UI/tvShow_info_reusable/TvShowPageContent';
import { useUpdateTitle } from '../hooks/useUpdateTitle';
import { getTopRatedTvShow } from '../redux/reducers/tvShowSlice';

function TopRatedTvShowPage() {
    const {topRated, isLoading, error} = useSelector(state => state.tvShow)
    const tvShow = topRated?.results
    const [page, setPage] = useState(1)
    const total_pages = topRated?.total_pages
    const dispatch = useDispatch()

    const pages = {
        current_page: page,
        total_pages: total_pages,

        changePage: () => {
            setPage(page + 1)
        }
    }

    useEffect(() => {
        dispatch(getTopRatedTvShow(page))
    }, [page])

    useUpdateTitle('tv top-rated')

    return (
        <>
            {isLoading && <Loader/>}
            {error && <div style={{ textAlign: 'center' }}>{error}</div>}
            {tvShow && <TvShowPageContent tvShowList={tvShow} pages={pages} type='topRated'/>}
        </>
    )
}

export default TopRatedTvShowPage