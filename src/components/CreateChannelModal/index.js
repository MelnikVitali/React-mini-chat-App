import React, { useReducer } from 'react';
import { useFormik } from 'formik';
import { NavLink } from 'react-router-dom';
import { v4 as uuidv4 } from 'uuid';

import {
    Button, Container, TextField
} from '@material-ui/core';
import useStyles from './styles';
import { CHAT_ROUTE } from '../../configs/RoutesUrls';
import { validationSchemas } from '../../utils/validationSchemas';

const CreateChannelModal = () => {
    const classes = useStyles();

    const idChannel = uuidv4();



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
            const data = {
                id: idChannel,
                ...fields
            };
            console.log(data);
            // setCurrentUser(fields);
            //
            // sessionStorage.setItem('user', JSON.stringify(fields, null, 2));
        }
    });

    return (
        <Container component="main" maxWidth="lg" className={classes.paper} >
            <form className={classes.form} noValidate onSubmit={handleSubmit} >
                <TextField
                    error={touched.title && Boolean(errors.title)}
                    variant="outlined"
                    required
                    fullWidth
                    className={classes.textField}
                    id="title"
                    label="Channel title..."
                    helperText={(touched.title && errors.title)
                        ? errors.title
                        : ''}
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
                    helperText={touched.description ? errors.description : ''}
                    name="description"
                    type="text"
                    value={values.description}
                    onBlur={handleBlur}
                    onChange={handleChange}

                />

                <NavLink to={`${CHAT_ROUTE}/${idChannel}`} className={classes.link} >
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
                </NavLink >
            </form >
        </Container >
    );
};

export default CreateChannelModal;
