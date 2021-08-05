import {
    CHAT_ROUTE, CREATE_CHANNEL_ROUTE,
    LOGIN_ROUTE, MAIN_ROUTE
} from './configs/RoutesUrls';

import Login from './components/Login';
import Main from './components/Main';
import CreateChannelModal from './components/CreateChannelModal';
import Chat from './components/Chat';

export const publicRoutes = [
    {
        path: LOGIN_ROUTE,
        Component: Login
    },
];

export const privateRoutes = [
    {
        path: MAIN_ROUTE,
        Component: Main
    },
    {
        path: CREATE_CHANNEL_ROUTE,
        Component: CreateChannelModal
    },
    {
        path: CHAT_ROUTE,
        Component: Chat
    },
];