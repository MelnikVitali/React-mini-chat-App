import { makeStyles } from '@material-ui/core';

import { pxToRem } from '../../utils/pxToRem';

const useStyles = makeStyles((theme) => ({
    nickName: {
        paddingBottom: pxToRem(4),
        textTransform: 'capitalize'
    },
    messageWrap: {
        backgroundColor: theme.backgroundColorMessageWrap,
        margin: `${pxToRem(3)} ${pxToRem(32)}`,
        padding: `${pxToRem(4)} ${pxToRem(10)}`,
        borderRadius: pxToRem(5),
        maxWidth: '70%',
        float: 'left',
        overflow: 'hidden',
        wordWrap: 'normal',
        textOverflow: 'ellipsis'
    },
    own: {
        backgroundColor: theme.backgroundColorOwnerWindow,
        float: 'right'
    },
    time: {
        color: theme.colorTimeChat,
        fontSize: pxToRem(10),
        textAlign: 'right'
    }
}));

export default useStyles;
