import React from 'react';
import ReactDOM from 'react-dom';

import { CssBaseline } from '@material-ui/core';
import { ThemeProvider } from '@material-ui/core/styles';

import { AuthProvider } from './authContext';

import theme from './theme';

import App from './App';

const user = JSON.parse(sessionStorage.getItem('user'));

ReactDOM.render(
    <ThemeProvider theme={theme} >
        <CssBaseline />
        {/*wrap root element with context*/}
        <AuthProvider  user={user}>
            <App />
        </AuthProvider >
    </ThemeProvider >,
    document.getElementById('root')
);
