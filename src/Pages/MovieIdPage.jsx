import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import MovieIdPageInfo from '../components/movieIdPage/MovieIdPageInfo';
import Loader from '../components/UI/loader/Loader';
import { useUpdateTitle } from '../hooks/useUpdateTitle';
import { clearState, getMovieFromId } from '../redux/reducers/movieSlice';

function MovieIdPage() {
    const params = useParams()
    const { movie, isLoading, error } = useSelector(state => state.movie)
    const [prevStateIsClear, setPrevStateIsClear] = useState(false)
    const movieId = params.id
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(getMovieFromId(movieId))
        window.scrollTo(0, 0)   
        return () => dispatch(clearState())
    }, [movieId])

    useEffect(() => {
        setPrevStateIsClear(true)
    },[movieId])

    useUpdateTitle(movie?.title, [movie])

    return (
        <>
            {isLoading && <Loader/>}
            {error && <div style={{ textAlign: 'center' }}>{error}</div>}
            {prevStateIsClear && movie && <MovieIdPageInfo/>}
        </>
    )
}

export default MovieIdPage;
