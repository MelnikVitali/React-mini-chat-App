import { createTheme } from '@material-ui/core/styles';

import { pxToRem } from './utils/pxToRem';

const theme = createTheme({
    typography: {
        fontFamily: [
            'Roboto',
            'sans-serif'
        ].join(','),
    },
    backgroundColorMessageWrap: '#DCDCDC',
    backgroundColorOwnerWindow: 'rgb(220, 248, 198)',
    colorTimeChat: 'green',
    overrides: {
        MuiCssBaseline: {
            '@global': {
                'html': {
                    boxSizing: 'border-box',
                    width: '100%',
                    height: '100%'
                },
                'html, body': {
                    outline: 'none',
                },
                body: {
                    margin: '0 auto',
                },
                '#root': {
                    display: 'flex',
                    flexDirection: 'column',
                    minHeight: '100%',
                    height: '100vh'
                },
                ':focus': {
                    outline: 'none'
                },
                a: {
                    textDecoration: 'none !important',
                },
            },
        },
        MuiFormLabel: {
            asterisk: {
                display: 'none'
            }
        },
        MuiFormHelperText: {
            root: {
                minHeight: pxToRem(22),
                position: 'absolute',
                bottom: pxToRem(-24),
                left: pxToRem(-10)
            }
        },
        MuiInputBase: {
            root: {
                position: 'relative'
            }
        },
        MuiButton: {
            root: {
                textTransform: 'none'
            }
        },
    },
});

export default theme;
