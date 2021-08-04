import { makeStyles } from '@material-ui/core';

import { pxToRem } from '../../utils/pxToRem';

const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
        flexWrap: 'wrap',
    },
    paper: {
        paddingBottom: theme.spacing(14),
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        flex: '1 0 auto',
    },

    form: {
        width: '100%', // Fix IE 11 issue.
        marginTop: theme.spacing(1),
    },
    textField: {
        margin: theme.spacing(2, 0),
        position:'relative'
    },
    btn: {
        margin: theme.spacing(2, 0, 2),
        textTransform: 'capitalize',
        lineHeight: 1.2,
        borderRadius: pxToRem(30),
        float: 'right'
    },
    label: {
        position: 'relative',
        left: pxToRem(-10),
        fontSize: pxToRem(21),
        fontWeight: 400,
    },
    link: {
        alignSelf: 'flex-start',
    },
    errorLabel: {
        color: theme.palette.primary
    },
    helperText: {
        position: 'absolute',
        bottom: pxToRem(5),
        left: pxToRem(-10)

    }
}));

export default useStyles;
