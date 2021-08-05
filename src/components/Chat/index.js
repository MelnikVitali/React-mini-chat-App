import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';

import {
    Button, Container, Grid, Typography,
    Paper, FormControl, OutlinedInput
} from '@material-ui/core';

import { useAppContext } from '../../context/store';
import { types } from '../../context/types';

import { LOGIN_ROUTE } from '../../configs/RoutesUrls';

import Messages from '../Messages';

import useStyles from './styles';

const Chat = () => {
    const classes = useStyles();

    const [message, setMessage] = useState('');

    const history = useHistory();

    const {dispatch} = useAppContext();

    const sendMessage = (e) => {
        e.preventDefault();
        if (message.trim() === '') return;
        dispatch({type: types.SEND_MESSAGE, message});

        setMessage('');

        setTimeout(() => {
            dispatch({type: types.SEND_DUMMY_MESSAGE})
        }, 1500)
        return false;
    };

    const handleEnter = e => {
        if (e.keyCode === 13 && !e.shiftKey) {
            sendMessage(e);
        }
        return false;
    };

    const logout = () => {
        dispatch({type: types.REMOVE_CHANNEL});

        history.push(LOGIN_ROUTE);
    };

    return (
        <Container component="main" className={classes.container} >
            <Grid container justifyContent="space-between" alignItems="center" wrap="nowrap" >
                <Grid item >
                    <Typography component="h1" variant="h4" className={classes.title} >
                        Your awesome channel
                    </Typography >
                </Grid >
                <Grid item >
                    <Button
                        type="submit"
                        variant="contained"
                        color="primary"
                        size="large"
                        onClick={logout}
                    >
                        Logout
                    </Button >
                </Grid >
            </Grid >

            <Paper className={classes.messagesPaper} >
                <Messages />
            </Paper >

            <form onSubmit={sendMessage} className={classes.form} >
                <FormControl
                    variant="outlined"
                    className={classes.formControl}
                >
                    <OutlinedInput
                        className={classes.input}
                        multiline
                        maxRows={2}
                        id="component-outlined"
                        value={message}
                        placeholder="Type your message"
                        onChange={e => setMessage(e.target.value)}
                        onKeyDown={handleEnter}
                    />
                </FormControl >
                <Button
                    type="submit"
                    color="primary"
                    variant={'outlined'}
                    className={classes.btnSend}
                >
                    Send
                </Button >
            </form >
        </Container >
    );
};

export default Chat;
