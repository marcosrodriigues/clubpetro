import React from 'react';

import { Switch, Route } from "react-router-dom/cjs/react-router-dom"
import Dashboard from "./pages/dashboard/Dashboard"
import Antifraude from './pages/antifraude/Antifraude'

function RoutesConfig() {
    const routes = [
        {
            path: '/',
            exact: true,
            main: () => <Dashboard />
        }, 
        {
            path: '/dashboard',
            main: () => <Dashboard /> 
        },
        {
            path: '/antifraude',
            main: () => <Antifraude />
        }
    ]

    return (
        <Switch>
            {routes.map((route, index) => (
                <Route 
                    key={index}
                    path={route.path}
                    exact={route.exact}
                    children={<route.main />}
                />
            ))}
        </Switch>
    )
}

export default RoutesConfig