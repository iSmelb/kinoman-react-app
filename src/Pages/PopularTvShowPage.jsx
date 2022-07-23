import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import Loader from '../components/UI/loader/Loader';
import TvShowPageContent from '../components/UI/tvShow_info_reusable/TvShowPageContent';
import { useUpdateTitle } from '../hooks/useUpdateTitle';
import { getPopularTvShow } from '../redux/reducers/tvShowSlice';

function PopularTvShowPage() {
    const {populars, isLoading, error} = useSelector(state => state.tvShow)
    const tvShow = populars?.results
    const [page, setPage] = useState(1)
    const total_pages = populars?.total_pages
    const dispatch = useDispatch()

    const pages = {
        current_page: page,
        total_pages: total_pages,

        changePage: () => {
            setPage(page + 1)
        }
    }

    useEffect(() => {
        dispatch(getPopularTvShow(page))
    }, [page])

    useUpdateTitle('tv-popular')

    return (
        <>
            {isLoading && <Loader/>}
            {error && <div style={{ textAlign: 'center' }}>{error}</div>}
            {tvShow && <TvShowPageContent tvShowList={tvShow} pages={pages} type='popular'/>}
        </>
    )
}

export default PopularTvShowPage