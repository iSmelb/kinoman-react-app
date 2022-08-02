import TabPanelUnstyled from '@mui/base/TabPanelUnstyled';
import TabsListUnstyled from '@mui/base/TabsListUnstyled';
import TabsUnstyled from '@mui/base/TabsUnstyled';
import TabUnstyled from '@mui/base/TabUnstyled';
import { LinearProgress } from '@mui/material';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import MainBanner from '../components/homePage/MainBanner';
import PopularMovies from '../components/UI/movie_info_reusable/PopularMovies';
import PopularTvShow from '../components/UI/tvShow_info_reusable/PopularTvShow';
import { useUpdateTitle } from '../hooks/useUpdateTitle';
import { getPopularMovies } from '../redux/reducers/moviesSlice';
import { getPopularTvShow } from '../redux/reducers/tvShowSlice';

function HomePage() {
    const dispatch = useDispatch()
    const page = 1
    
    useEffect(() => {
        dispatch(getPopularMovies(page))
        dispatch(getPopularTvShow(page))
    },[])

    useUpdateTitle('kinoman')

    return (
        <>
            <MainBanner/>
            <div className='popular_home_page conteiner'>
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
