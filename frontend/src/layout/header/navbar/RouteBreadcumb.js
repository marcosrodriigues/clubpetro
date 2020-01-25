import React from 'react';

import { Switch, Route } from 'react-router-dom';

function RouteBreadcumb() {

    const routes = [
        { path: '/dashboard', text: 'Dashboard' },
        { path: '/resgates', text: 'Resgates' },
        { path: '/antifraude', text: 'Anti-Fraude' }, 
        { path: '/vendas', text: 'Vendas' },
        { path: '/relatorios', text: 'Relatórios' },
        { path: '/perfil', text: 'Perfil' },
        { path: '/campanhas', text: 'Campanhas' },
        { path: '/', text: 'Dashboard'},
    ]

    return (
        <Switch>
            {routes.map((route, index) => {
                return (
                    <Route 
                        key={index}
                        path={route.path}
                        children={route.text}
                    />
                )
            })}
        </Switch>
    )
}

export default RouteBreadcumb;