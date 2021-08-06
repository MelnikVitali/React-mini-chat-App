import { makeStyles } from '@material-ui/core';

import { pxToRem } from '../../utils/pxToRem';

const useStyles = makeStyles((theme) => ({
    menuButton: {
        marginRight: theme.spacing(2),
    },
    title: {
        paddingLeft: pxToRem(20),
        flexGrow: 1,
    },
}));

export default useStyles;
