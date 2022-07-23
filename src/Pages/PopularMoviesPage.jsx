import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import MoviesPageContent from '../components/UI/movie_info_reusable/MoviesPageContent';
import Loader from '../components/UI/loader/Loader';
import { getPopularMovies } from '../redux/reducers/moviesSlice';
import { useUpdateTitle } from '../hooks/useUpdateTitle';

function PopularMoviesPage() {
    const {populars, isLoading, error}  = useSelector(state => state.movies)
    const movies = populars?.results
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
        dispatch(getPopularMovies(page))
    }, [page])

    useUpdateTitle('movies-popular')

    return (
        <>
            {isLoading && <Loader/>}
            {error && <div style={{ textAlign: 'center' }}>{error}</div>}
            {movies && <MoviesPageContent movies={movies} pages={pages} type='popular'/>}
        </>
    )
}

export default PopularMoviesPage