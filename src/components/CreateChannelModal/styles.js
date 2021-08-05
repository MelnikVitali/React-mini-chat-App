import { makeStyles } from '@material-ui/core';

import { pxToRem } from '../../utils/pxToRem';

const useStyles = makeStyles((theme) => ({
    container: {
        height: '100vh',
        paddingBottom: theme.spacing(14),
        paddingTop: pxToRem(20),
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
    },
    title: {
        alignSelf: 'flex-start',
        fontWeight: 600,
        letterSpacing: pxToRem(0.6),
        [theme.breakpoints.down('xs')]: {
            fontSize: pxToRem(22),
            letterSpacing: pxToRem(0)
        },
    },
    form: {
        width: '100%',
        marginTop: theme.spacing(6),
    },
    textField: {
        margin: theme.spacing(2, 0)
    },
    btn: {
        float: 'right',
        margin: theme.spacing(2, 0, 2),
        borderRadius: pxToRem(30),
        textTransform: 'capitalize',
        lineHeight: 1.2
    }
}));

export default useStyles;
