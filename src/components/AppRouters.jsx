import React from 'react';
import { Route, Routes } from "react-router-dom";
import { routes } from '../Router/routes'

function AppRouters() {
    return (
        <Routes>
            {routes.map( route => 
                <Route key={route.path} path={route.path} element={<route.component/>}/>
            )}
        </Routes>
    )
}

export default AppRouters