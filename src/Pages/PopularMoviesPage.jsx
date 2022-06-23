import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import MoviesPageContent from '../components/UI/movie_info_reusable/MoviesPageContent';
import Loader from '../components/UI/loader/Loader';
import { getPopularMovies } from '../redux/reducers/moviesSlice';
import { useUpdateTitle } from '../hooks/useUpdateTitle';

function PopularMoviesPage() {
    const {populars, isLoading, error}  = useSelector(state => state.movies)
    const movies = populars?.results
    const dispatch = useDispatch()
    const [page, setPage] = useState(1)

    const nextPage = () => {
        setPage(page + 1)
    }

    useEffect(() => {
        dispatch(getPopularMovies(page))
    }, [page])

    useUpdateTitle('movies-popular')

    return (
        <>
            {isLoading && <Loader/>}
            {error && <div>{error}</div>}
            {movies && <MoviesPageContent movies={movies} changePage={nextPage} type='popular'/>}
        </>
    )
}

export default PopularMoviesPage