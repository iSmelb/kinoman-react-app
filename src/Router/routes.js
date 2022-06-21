import CollectionsIdPage from "../Pages/CollectionsIdPage";
import HomePage from "../Pages/HomePage";
import MovieIdPage from "../Pages/MovieIdPage";
import PopularMoviesPage from "../Pages/PopularMoviesPage";
import SearchPage from "../Pages/SearchPage";
import NowPlayingMoviesPage from "../Pages/NowPlayingMoviesPage";
import UpComingMoviesPage from "../Pages/UpComingMoviesPage";
import TopRatedMoviesPage from "../Pages/TopRatedMoviesPage";

export const routes = [
    {path: '/', component: HomePage},
    {path: '/movies/popular', component: PopularMoviesPage},
    {path: '/movies/playing-now', component: NowPlayingMoviesPage},
    {path: '/movies/up-coming', component: UpComingMoviesPage},
    {path: '/movies/top-rated', component: TopRatedMoviesPage},
    {path: '/movies/:id', component: MovieIdPage},
    {path: '/collections/:id', component: CollectionsIdPage},
    {path: '/search/:type', component: SearchPage},
    {path: '/search', component: SearchPage}
]