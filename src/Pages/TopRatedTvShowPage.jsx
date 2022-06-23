import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import Loader from '../components/UI/loader/Loader';
import TvShowPageContent from '../components/UI/tvShow_info_reusable/TvShowPageContent';
import { useUpdateTitle } from '../hooks/useUpdateTitle';
import { getPopularTvShow, getTopRatedTvShow } from '../redux/reducers/tvShowSlice';

function TopRatedTvShowPage() {
    const {topRated, isLoading, error} = useSelector(state => state.tvShow)
    const tvShow = topRated?.results
    const dispatch = useDispatch()
    const [page, setPage] = useState(1)

    const changePage = () => {
        setPage(page + 1)
    }

    useEffect(() => {
        dispatch(getTopRatedTvShow(page))
    }, [page])

    useUpdateTitle('tv top-rated')

    return (
        <>
            {isLoading && <Loader/>}
            {error && <div>{error}</div>}
            {tvShow && <TvShowPageContent tvShowList={tvShow} changePage={changePage} type='topRated'/>}
        </>
    )
}

export default TopRatedTvShowPage