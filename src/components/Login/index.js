import React from 'react';
import { useFormik } from 'formik';

import {
    Button, Container, FormControl,
    FormHelperText, InputLabel, OutlinedInput
} from '@material-ui/core';

import { useAuth } from '../../hooks/useAuth';

import useStyles from './styles';
import { validationSchemaLogin } from '../../utils/validationSchemas';

const Login = () => {
    const classes = useStyles();

    const {setCurrentUser} = useAuth();

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
            setCurrentUser(fields);

            sessionStorage.setItem('user', JSON.stringify(fields, null, 2));
        }
    });

    return (
        <Container component="main" maxWidth="xs" className={classes.paper} >
            <form className={classes.form} noValidate onSubmit={handleSubmit} >
                <FormControl variant="outlined" fullWidth className={classes.formControl} >
                    <InputLabel shrink htmlFor="email" className={classes.label} >Email</InputLabel >
                    <OutlinedInput
                        error={touched.email && (Boolean(errors.email))}
                        variant="outlined"
                        required
                        fullWidth
                        autoComplete='off'
                        id="email"
                        name="email"
                        value={values.email || ''}
                        onBlur={handleBlur}
                        onChange={handleChange}
                    />
                    {touched.email && (Boolean(errors.email))
                        ? <FormHelperText error className={classes.helperText} >{errors.email}</FormHelperText >
                        : null}
                </FormControl >
                <FormControl variant="outlined" fullWidth className={classes.formControl} >
                    <InputLabel shrink htmlFor="password" className={classes.label} >Password</InputLabel >
                    <OutlinedInput
                        error={touched.email && (Boolean(errors.email))}
                        variant="outlined"
                        required
                        fullWidth
                        id="password"
                        name="password"
                        autoComplete='off'
                        value={values.password || ''}
                        onBlur={handleBlur}
                        onChange={handleChange}
                        // onFocus={onFocus}
                    />
                    {touched.password && (Boolean(errors.password))
                        ? <FormHelperText error className={classes.helperText} >{errors.password}</FormHelperText >
                        : null}
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
