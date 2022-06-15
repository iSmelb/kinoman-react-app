import CollectionsIdPage from "../Pages/CollectionsIdPage";
import HomePage from "../Pages/HomePage";
import MovieIdPage from "../Pages/MovieIdPage";
import PopularMoviesPage from "../Pages/PopularMoviesPage";
import SearchPage from "../Pages/SearchPage";

export const routes = [
    {path: '/', component: HomePage},
    {path: '/movies/popular', component: PopularMoviesPage},
    {path: '/movies/:id', component: MovieIdPage},
    {path: '/collections/:id', component: CollectionsIdPage},
    {path: '/search/:type', component: SearchPage},
    {path: '/search', component: SearchPage}
]