import React from 'react';
import { NavLink } from 'react-router-dom';

import { Button, Container, Typography } from '@material-ui/core';

import { CREATE_CHANNEL_ROUTE } from '../../configs/RoutesUrls';

import useStyles from './styles';

const Main = () => {
    const classes = useStyles();

    return (
        <div >
            <Container component="main" className={classes.paper} maxWidth={false} >
                <NavLink to={CREATE_CHANNEL_ROUTE} className={classes.link}>
                    <Button
                        type="submit"
                        variant="contained"
                        color="primary"
                        size="large"
                        className={classes.btn}
                    >
                        Create a channel
                    </Button >
                </NavLink >
                <Typography component="h1" variant="h4" className={classes.title} >
                    Welcome to Awesome chat
                </Typography >
            </Container >
        </div >
    )
        ;
};

export default Main;
