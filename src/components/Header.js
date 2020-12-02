import React from 'react';
import Typography from '@material-ui/core/typography';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    root: {
        fontFamily: "Playfair Display",
        margin: theme.spacing(3, 0, 2),
        textAlign: "center",
        fontSize: "4rem",
        color: "CornflowerBlue",
        textShadow: "1px 1px DarkBlue"
    }
}))

export default function Header(){

    const styles = useStyles();

    return (
        <Typography className={styles.root} component="h1" variant="h5">
            React form
        </Typography>
    )
}
