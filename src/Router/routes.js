import CollectionsIdPage from "../Pages/CollectionsIdPage";
import HomePage from "../Pages/HomePage";
import MovieIdPage from "../Pages/MovieIdPage";
import PopularMoviesPage from "../Pages/PopularMoviesPage";
import SearchPage from "../Pages/SearchPage";
import NowPlayingMoviesPage from "../Pages/NowPlayingMoviesPage";
import UpComingMoviesPage from "../Pages/UpComingMoviesPage";
import TopRatedMoviesPage from "../Pages/TopRatedMoviesPage";
import PopularTvShowPage from "../Pages/PopularTvShowPage";
import AiringTodayTvShowPage from "../Pages/AiringTodayTvShowPage";
import OnTheAirTvShowPage from '../Pages/OnTheAirTvShowPage'
import TopRatedTvShowPage from "../Pages/TopRatedTvShowPage";
import PopularPeoplePage from "../Pages/PopularPeoplePage";
import SingleTvShowPage from "../Pages/SingleTvShowPage";
import PersonIdPage from "../Pages/PersonIdPage"
import NotFoundPage from "../Pages/NotFoundPage";

export const routes = [
    // {path: '/', component: HomePage},
    {path: '/movies/popular', component: PopularMoviesPage},
    {path: '/movies/playing-now', component: NowPlayingMoviesPage},
    {path: '/movies/up-coming', component: UpComingMoviesPage},
    {path: '/movies/top-rated', component: TopRatedMoviesPage},
    {path: '/movies/:id', component: MovieIdPage},
    {path: '/tv/popular', component: PopularTvShowPage},
    {path: '/tv/airing-today', component: AiringTodayTvShowPage},
    {path: '/tv/on-the-air', component: OnTheAirTvShowPage},
    {path: '/tv/top-rated', component: TopRatedTvShowPage},
    {path: '/tv/:id', component: SingleTvShowPage},
    {path: '/people/popular', component: PopularPeoplePage},
    {path: '/people/:id', component: PersonIdPage},
    {path: '/collections/:id', component: CollectionsIdPage},
    {path: '/search/:type', component: SearchPage},
    {path: '/search', component: SearchPage},
    {path: '*', component: NotFoundPage},
    
]