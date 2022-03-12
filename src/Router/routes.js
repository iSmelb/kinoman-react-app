import CollectionsIdPage from "../Pages/CollectionsIdPage";
import HomePage from "../Pages/HomePage";
import Movie from "../Pages/Movie";
import MovieIdPage from "../Pages/MovieIdPage";
import Selections from "../Pages/Selections";
import Serials from "../Pages/Serials";

export const routes = [
    {path: '/', component: HomePage},
    {path: '/movies', component: Movie},
    {path: '/serials', component: Serials},
    {path: '/selections', component: Selections},
    {path: '/movies/:id', component: MovieIdPage},
    {path: '/collections/:id', component: CollectionsIdPage}
]