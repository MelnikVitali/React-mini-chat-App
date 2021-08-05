import React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';

import { privateRoutes, publicRoutes } from '../../routes';

import { CHAT_ROUTE, LOGIN_ROUTE, MAIN_ROUTE } from '../../configs/RoutesUrls';

import { useAppContext } from '../../context/store';


const AppRouter = () => {
    const {state: {currentUser}} = useAppContext();

    return currentUser ? (
            <Switch >
                {privateRoutes.map(({path, Component}) =>
                    <Route
                        key={path}
                        path={path === CHAT_ROUTE ? `${CHAT_ROUTE}/:id` : path}
                        component={Component}
                        exact={true}
                    />
                )}

                <Redirect to={MAIN_ROUTE} />
            </Switch >
        )
        :
        (
            <Switch >
                {publicRoutes.map(({path, Component}) =>
                    <Route
                        key={path}
                        path={path}
                        component={Component}
                        exact={true} />
                )}
                <Redirect to={LOGIN_ROUTE} />
            </Switch >
        );
};

export default AppRouter;
