import { makeStyles } from '@material-ui/core';

import { pxToRem } from '../../utils/pxToRem';

const useStyles = makeStyles((theme) => ({
    container: {
        height: '100vh',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        flex: '1 0 auto',
    },
    title: {
        paddingBottom: theme.spacing(22),
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        textAlign: 'center',
        flex: '1 0 auto',
        fontWeight: 600,
        letterSpacing: pxToRem(0.6)
    },
    btn: {
        margin: theme.spacing(4, 3, 2),
        alignSelf: 'flex-start',
        paddingLeft: pxToRem(30),
        paddingRight: pxToRem(30),
        borderRadius: pxToRem(18)
    }
}));

export default useStyles;
