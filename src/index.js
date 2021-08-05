import React from 'react';
import ReactDOM from 'react-dom';

import { CssBaseline } from '@material-ui/core';
import { ThemeProvider } from '@material-ui/core/styles';

import theme from './theme';

import { ContextProvider } from './context/store';

import App from './App';

ReactDOM.render(
    <ThemeProvider theme={theme} >
        <CssBaseline />
        {/*wrap root element with context*/}
        <ContextProvider >
            <App />
        </ContextProvider >
    </ThemeProvider >,
    document.getElementById('root')
);
