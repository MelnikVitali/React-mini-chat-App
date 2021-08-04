import { makeStyles } from '@material-ui/core';

import { pxToRem } from '../../utils/pxToRem';

const useStyles = makeStyles((theme) => ({
    paper: {
        height: '100vh',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        flex: '1 0 auto',
    },

    title: {
        flex: '1 0 auto',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        textAlign: 'center',
        paddingBottom: theme.spacing(22),
        fontWeight: 600,
        letterSpacing: pxToRem(0.6)
    },
    formControl: {
        position: 'relative',
        paddingBottom: pxToRem(28)
    },
    btn: {
        margin: theme.spacing(4, 3, 2),
        textTransform: 'none',
        lineHeight: 1.3,
        borderRadius: pxToRem(30)
    },
    link: {
        alignSelf: 'flex-start',
    },
    label: {
        position: 'relative',
        fontSize: pxToRem(21),
        fontWeight: 400,
    },
    errorLabel: {
        color: theme.palette.primary
    },
    helperText: {
        position: 'absolute',
        bottom: pxToRem(6),
    }
}));

export default useStyles;
