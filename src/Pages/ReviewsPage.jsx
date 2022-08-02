import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useLocation, useParams, useSearchParams } from 'react-router-dom';
import ReviewsPageInfo from '../components/reviewsPage/ReviewsPageInfo';
import Loader from '../components/UI/loader/Loader';
import { useUpdateTitle } from '../hooks/useUpdateTitle';
import { clearState as clearStateMovie, getMovieFromId, getReviewsForMovie } from '../redux/reducers/movieSlice';
import { clearState, getReviewsForTv, getTvShowFromId } from '../redux/reducers/singleTvShowSlice';

function ReviewsPage() {
    const { id } = useParams()
    const { pathname } = useLocation()
    const [searchParams] = useSearchParams();
    const page = searchParams.get('page')
    const type = pathname.search(/movies/) === -1 ? 'singleTvShow' : 'movie'
    const [prevStateIsClear, setPrevStateIsClear] = useState(false)
    const { error, isLoading } = useSelector(state => state[type])
    const mediaFile = useSelector(state => state[type][type])
    const reviews = useSelector(state => state[type].reviews)
    const title = mediaFile?.title || mediaFile?.name || 'kinoman'
    const dispatch = useDispatch()

    const queryParams = {
        mediaId: id,
        page: page
    }

    useEffect(() => {
        if (type === 'movie') {
            dispatch(getMovieFromId(id))
        } else {
            dispatch(getTvShowFromId(id))
        }
    }, [id])

    useEffect(() => {
        if (type === 'movie') {
            dispatch(getReviewsForMovie(queryParams))
        } else {
            dispatch(getReviewsForTv(queryParams))
        }
        window.scrollTo(0, 0)
    }, [page])

    useUpdateTitle(title + `/reviews/page=${page}`, [id])

    useEffect(() => {
        // флаг который не даёт отображать стейт, пока он не очистится при размонтировании прошлого компонента
        setPrevStateIsClear(true)
        return () => {
            dispatch(clearState())
            dispatch(clearStateMovie())
        }
    }, [])

    return (
        <>
            {isLoading && <Loader/>}
            {error && <div style={{ textAlign: 'center' }}>{error}</div>}
            {prevStateIsClear && mediaFile && <ReviewsPageInfo mediaFile={mediaFile} reviews={reviews} />}
        </>
    )
}

export default ReviewsPage