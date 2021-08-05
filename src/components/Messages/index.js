import React, { useRef, useEffect } from 'react';
import clsx from 'clsx';

import { Grid, Typography } from '@material-ui/core';

import { useAppContext } from '../../context/store';

import useStyles from './styles';

const Messages = () => {
    const classes = useStyles();

    const {state} = useAppContext();
    const {messages} = state;

    const messagesEndRef = useRef(null);

    const scrollToBottom = () => {
        messagesEndRef.current.scrollIntoView({behavior: 'smooth'})
    }

    useEffect(scrollToBottom, [messages]);

    return (
        <Grid container justifyContent="center" alignContent="flex-start" >
            {messages.map((message) =>
                <Grid key={message.id} item xs={11} >
                    <div
                        className={clsx(
                            classes.messageWrap,
                            state.currentUser.id === message.currentUserId ? classes.own : ''
                        )}
                    >
                        <Typography
                            variant="subtitle2"
                            className={classes.nickName}
                        >
                            {message.nickName}</Typography >
                        <Typography variant="body1" >
                            {message.text}
                        </Typography >
                        <Typography className={classes.time} >
                            <time >{message.createdTime}</time >
                        </Typography >
                    </div >
                </Grid >
            )}

            <div ref={messagesEndRef} />
        </Grid >
    )
};

export default Messages;
