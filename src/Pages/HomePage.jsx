import React, { useEffect, useState } from 'react';
import SearchPanel from '../components/search/SearchPanel';
import { useDispatch, useSelector } from 'react-redux';
import PopularMovies from '../components/UI/movie_info_reusable/PopularMovies';
import { getPopularMovies } from '../redux/reducers/moviesSlice';
import PopularTvShow from '../components/UI/tvShow_info_reusable/PopularTvShow';
import { getPopularTvShow } from '../redux/reducers/tvShowSlice';
import TabsUnstyled from '@mui/base/TabsUnstyled';
import TabsListUnstyled from '@mui/base/TabsListUnstyled';
import TabPanelUnstyled from '@mui/base/TabPanelUnstyled';
import TabUnstyled from '@mui/base/TabUnstyled';

function HomePage() {
    const dispatch = useDispatch()
    const page = 1

    const bgPath = useSelector(state => state.movies.populars?.results[2].backdrop_path)

    useEffect(() => {
        dispatch(getPopularMovies(page))
        dispatch(getPopularTvShow(page))
    }, [])

    return (
        <>
            <div className='banner_bg_home_page' style={bgPath && {
                backgroundImage: `linear-gradient( to right, rgba(6, 17, 26, 0.8) 0%, rgba(6, 17, 26, 0.8) 100%), url('http://image.tmdb.org/t/p/w1920_and_h800_multi_faces/${bgPath}')`,
                backgroundSize: 'cover',
                //backgroundPosition: 'center'
            }}>
                <div className='banner_home_page conteiner'>
                    <h1>
                        Welcome.
                        <br />
                        Immerse yourself in the world of movies and TV series, find something for you.
                    </h1>
                    <SearchPanel />
                </div>
            </div>
            <div className={`popular_home_page conteiner`}>
                <TabsUnstyled defaultValue={0}>
                    <TabsListUnstyled>
                        <TabUnstyled>TV Show</TabUnstyled>
                        <TabUnstyled>Movies</TabUnstyled>
                    </TabsListUnstyled>
                    <TabPanelUnstyled value={0}>
                        <PopularTvShow />
                    </TabPanelUnstyled>
                    <TabPanelUnstyled value={1}>
                        <PopularMovies />
                    </TabPanelUnstyled>
                </TabsUnstyled>
            </div>
        </>
    )
}

export default HomePage;
