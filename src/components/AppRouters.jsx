import React from 'react';
import { Route, Routes } from "react-router-dom";
import Layout from './Layout';
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
import CastPage from "../Pages/CastPage"
import SeasonsPage from "../Pages/SeasonsPage"
import SeasonPage from "../Pages/SeasonPage";
import ReviewsPage from "../Pages/ReviewsPage";
import MediaImagesPage from "../Pages/MediaImagesPage";
import MediaVideoPage from "../Pages/MediaVideoPage";
import LinksPanel from './shortcartBar/LinksPanel';
import RegisterPage from '../Pages/RegisterPage';
import LoginPage from '../Pages/LoginPage';
import UserPage from '../Pages/UserPage';
import RessetPasswordPage from '../Pages/RessetPasswordPage'
import RequireAuth from '../hoc/RequireAuth';

function AppRouters() {
    return (
        <Routes>
            <Route path='/' element={<Layout />}>
                <Route index element={<HomePage />} />
                <Route path='movies/popular' element={<PopularMoviesPage />} />
                <Route path='movies/playing-now' element={<NowPlayingMoviesPage />} />
                <Route path='movies/up-coming' element={<UpComingMoviesPage />} />
                <Route path='movies/top-rated' element={<TopRatedMoviesPage />} />
                <Route path='movies/:id' element={<LinksPanel />}>
                    <Route index element={<MovieIdPage />} />
                    <Route path='cast' element={<CastPage />} />
                    <Route path='reviews' element={<ReviewsPage />} />
                    <Route path='media/posters' element={<MediaImagesPage />} />
                    <Route path='media/backdrops' element={<MediaImagesPage />} />
                    <Route path='media/video' element={<MediaVideoPage />} />
                </Route>
                <Route path='tv/popular' element={<PopularTvShowPage />} />
                <Route path='tv/airing-today' element={<AiringTodayTvShowPage />} />
                <Route path='tv/on-the-air' element={<OnTheAirTvShowPage />} />
                <Route path='tv/top-rated' element={<TopRatedTvShowPage />} />
                <Route path='tv/:id' element={<LinksPanel />}>
                    <Route index element={<SingleTvShowPage />} />
                    <Route path='cast' element={<CastPage />} />
                    <Route path='reviews' element={<ReviewsPage />} />
                    <Route path='seasons' element={<SeasonsPage />} />
                    <Route path='seasons/:number' element={<SeasonPage />} />
                    <Route path='media/posters' element={<MediaImagesPage />} />
                    <Route path='media/backdrops' element={<MediaImagesPage />} />
                    <Route path='media/video' element={<MediaVideoPage />} />
                </Route>
                <Route path='people/popular' element={<PopularPeoplePage />} />
                <Route path='people/:id' element={<PersonIdPage />} />
                <Route path='collections/:id' element={<CollectionsIdPage />} />
                <Route path='search/:type' element={<SearchPage />} />
                <Route path='search' element={<SearchPage />} />
                <Route path='register' element={<RegisterPage />} />
                <Route path='login' element={<LoginPage />} />
                <Route path='resset-password' element={<RessetPasswordPage />} />
                <Route path='user' element={
                    <RequireAuth>
                        <UserPage />
                    </RequireAuth>
                } />
                <Route path='*' element={<NotFoundPage />} />
            </Route>
        </Routes>
    )
}

export default AppRouters