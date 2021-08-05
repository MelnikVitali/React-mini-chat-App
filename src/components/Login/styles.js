import { makeStyles } from '@material-ui/core';

import { pxToRem } from '../../utils/pxToRem';

const useStyles = makeStyles((theme) => ({
    container: {
        paddingBottom: theme.spacing(14),
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        flex: '1 0 auto',
    },
    form: {
        width: '100%',
        marginTop: theme.spacing(1),
    },
    formControl: {
        paddingBottom: pxToRem(28)
    },
    label: {
        position: 'relative',
        left: pxToRem(-10),
        fontSize: pxToRem(21),
        fontWeight: 400,
        color: theme.palette.text.primary
    },
    btn: {
        margin: theme.spacing(0, 0, 2),
        textTransform: 'capitalize',
        paddingLeft:pxToRem(30),
        paddingRight:pxToRem(30),
        float: 'right'
    }
}));

export default useStyles;
