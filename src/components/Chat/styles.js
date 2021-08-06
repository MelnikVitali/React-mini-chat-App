import { makeStyles } from '@material-ui/core';

import { pxToRem } from '../../utils/pxToRem';

const useStyles = makeStyles((theme) => ({
    container: {
        height: '100%',
        overflow: 'hidden',
        paddingTop: pxToRem(20),
        flexDirection: 'column'
    },
    title: {
        fontWeight: 600,
        letterSpacing: pxToRem(0.6),
        [theme.breakpoints.down('xs')]: {
            fontSize: pxToRem(22),
            letterSpacing: pxToRem(0)
        },
    },
    messagesPaper: {
        flexGrow: 1,
        height: 'calc(100vh - 265px)',
        marginTop: 20,
        marginBottom: 20,
        overflowY: 'scroll',
        padding: ' 10px 0'
    },
    form: {
        width: '100%',
        display: 'flex'
    },
    formControl: {
        flexGrow: 1,
        marginRight: pxToRem(-2)
    },
    input: {
        borderRadius: `${pxToRem(4)} 0 0 ${pxToRem(4)}`,
        borderRight: '0px',
    },
    btnSend: {
        boxSizing: 'border-box',
        paddingLeft: pxToRem(35),
        paddingRight: pxToRem(35),
        fontSize: 'pxToRem(16) !important',
        borderRadius: `0 ${pxToRem(4)}  ${pxToRem(4)} 0`,
        border: `2px solid ${theme.palette.primary.main}`,
        '&:hover': {
            border: `2px solid ${theme.palette.primary.light}`
        }
    }
}));

export default useStyles;
