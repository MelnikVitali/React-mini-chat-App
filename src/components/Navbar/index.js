import React from 'react';

import { AppBar, Toolbar, Typography } from '@material-ui/core';

import useStyles from './styles';

const Navbar = () => {
    const classes = useStyles();

    return (
        <AppBar position="static" className={classes.appBar} >
            <Toolbar >
                <Typography variant="h6" className={classes.title} >
                    React mini chat App
                </Typography >
            </Toolbar >
        </AppBar >
    );
};

export default Navbar;
