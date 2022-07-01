import React from 'react';
import { Route, Routes } from "react-router-dom";
import HomePage from '../Pages/HomePage';
import { routes } from '../Router/routes'
import Layout from './Layout';

function AppRouters() {
    return (
        <Routes>
            <Route path='/' element={<Layout/>}>
                <Route index element={<HomePage/>}/>
                {routes.map( route => 
                    <Route key={route.path} path={route.path} element={<route.component/>}/>
                )}
            </Route>
        </Routes>
    )
}

export default AppRouters