import React from 'react';
import { useHistory } from 'react-router-dom';

import { Button, Container, Typography } from '@material-ui/core';

import { CREATE_CHANNEL_ROUTE } from '../../configs/RoutesUrls';

import useStyles from './styles';

const Main = () => {
    const classes = useStyles();

    const history = useHistory();

    const handleClick = () => {
        history.push(CREATE_CHANNEL_ROUTE);
    };

    return (
        <div >
            <Container component="main" className={classes.container} maxWidth={false} >
                <Button
                    variant="contained"
                    color="primary"
                    size="large"
                    onClick={handleClick}
                    className={classes.btn}
                >
                    Create a channel
                </Button >
                <Typography component="h1" variant="h4" className={classes.title} >
                    Welcome to Awesome chat
                </Typography >
            </Container >
        </div >
    );
};

export default Main;
