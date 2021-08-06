import React from 'react';
import { useFormik } from 'formik';
import { useHistory } from 'react-router-dom';
import { v4 as uuidv4 } from 'uuid';

import {
    Button, Container, TextField, Typography
} from '@material-ui/core';

import { CHAT_ROUTE } from '../../configs/RoutesUrls';

import { useAppContext } from '../../context/store';
import { types } from '../../context/types';

import { validationSchemas } from '../../utils/validationSchemas';

import useStyles from './styles';

const CreateChannelModal = () => {
    const classes = useStyles();

    const history = useHistory();

    const {dispatch} = useAppContext();

    const {
        handleSubmit, handleChange,
        values, errors, isValid,
        touched, handleBlur
    } = useFormik({
        initialValues: {
            title: '',
            description: '',
        },
        validationSchema: validationSchemas,
        onSubmit: fields => {
            const idChannel = uuidv4();

            dispatch({type: types.ADD_CHANNEL, id: idChannel, ...fields});

            history.push(`${CHAT_ROUTE}/${idChannel}`);
        }
    });

    return (
        <Container component="main" maxWidth="lg" className={classes.container} >
            <Typography component="h1" variant="h4" className={classes.title} >
                New channel
            </Typography >
            <form className={classes.form} noValidate onSubmit={handleSubmit} >
                <TextField
                    error={touched.title && Boolean(errors.title)}
                    variant="outlined"
                    required
                    fullWidth
                    className={classes.textField}
                    id="title"
                    label="Channel title..."
                    helperText={errors.title ? errors.title : ''}
                    name="title"
                    type="text"
                    autoComplete="off"
                    value={values.title}
                    onBlur={handleBlur}
                    onChange={handleChange}
                />
                <TextField
                    error={touched.description && Boolean(errors.description)}
                    variant="outlined"
                    required
                    fullWidth
                    autoComplete="off"
                    className={classes.textField}
                    id="text"
                    label="Channel description"
                    helperText={errors.description ? errors.description : ''}
                    name="description"
                    type="text"
                    value={values.description}
                    onBlur={handleBlur}
                    onChange={handleChange}

                />
                <Button
                    disabled={!isValid}
                    type="submit"
                    variant="contained"
                    color="primary"
                    size="large"
                    className={classes.btn}
                >
                    Create
                </Button >
            </form >
        </Container >
    );
};

export default CreateChannelModal;
