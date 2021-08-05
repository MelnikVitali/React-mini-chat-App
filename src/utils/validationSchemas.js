import * as Yup from 'yup';

export const validationSchemas = Yup.object({
    title: Yup.string()
        .min(2, 'Channel title must be at least 2 characters long')
        .required('Please enter a channel title'),
    description: Yup.string()
        .min(2, 'Channel description must be at least 2 characters long')
        .required('Please enter a channel description'),
});

export const validationSchemaLogin = Yup.object({
    email: Yup.string()
        .email('Enter correct email')
        .required('Enter your email'),
    password: Yup.string()
        .min(6, 'Password must be at least 6 characters long')
        .required('Enter your password'),
});
