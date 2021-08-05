import React from 'react';
import { useFormik } from 'formik';

import {
    Button, Container, FormControl,
    InputLabel, TextField
} from '@material-ui/core';

import { useAppContext } from '../../context/store';
import { types } from '../../context/types';

import { validationSchemaLogin } from '../../utils/validationSchemas';
import useStyles from './styles';

const Login = () => {
    const classes = useStyles();

    const {dispatch} = useAppContext();

    const {
        handleSubmit, handleChange,
        values, errors, isValid,
        touched, handleBlur
    } = useFormik({
        initialValues: {
            email: '',
            password: '',
        },
        validationSchema: validationSchemaLogin,
        onSubmit: fields => {
            const currentUser = {
                nickName: fields.email.split('@')[0],
                ...fields
            };

            dispatch({type: types.SET_CURRENT_USER, currentUser});

            sessionStorage.setItem('currentUser', JSON.stringify(currentUser.nickName, null, 2));
        }
    });

    return (
        <Container component="main" maxWidth="xs" className={classes.container} >
            <form className={classes.form} noValidate onSubmit={handleSubmit} >
                <FormControl variant="outlined" fullWidth className={classes.formControl} >
                    <InputLabel shrink htmlFor="email" className={classes.label} >Email</InputLabel >
                    <TextField
                        error={touched.email && (Boolean(errors.email))}
                        variant="outlined"
                        required
                        fullWidth
                        autoComplete="off"
                        helperText={errors.email ? errors.email : ''}
                        id="email"
                        name="email"
                        value={values.email || ''}
                        onBlur={handleBlur}
                        onChange={handleChange}
                    />
                </FormControl >
                <FormControl variant="outlined" fullWidth className={classes.formControl} >
                    <InputLabel shrink htmlFor="password" className={classes.label} >Password</InputLabel >
                    <TextField
                        error={touched.password && (Boolean(errors.password))}
                        variant="outlined"
                        required
                        fullWidth
                        id="password"
                        name="password"
                        autoComplete="off"
                        helperText={errors.password ? errors.password : ''}
                        value={values.password || ''}
                        onBlur={handleBlur}
                        onChange={handleChange}
                    />
                </FormControl >
                <Button
                    disabled={!isValid}
                    type="submit"
                    variant="contained"
                    color="primary"
                    size="large"
                    className={classes.btn}
                >
                    Login
                </Button >
            </form >
        </Container >
    );
};

export default Login;
