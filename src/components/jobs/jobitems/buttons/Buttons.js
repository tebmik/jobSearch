import React from "react";
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles(theme => ({
  root: {
    '& > *': {
      margin: theme.spacing(1),
    },
  },
}));

const Buttons = () => {
    const classes = useStyles()
    const style = {
        buttonWrapper: {
            width:"100%",
            display:"grid",
            gridTemplateColumns:"1fr 1fr",
            gridGap:"10px",
            paddingTop:20,
        }
    }
    return (
        <div style={style.buttonWrapper} classes={classes.root}>
            <Button variant="outlined" color="primary">Save</Button>
            <Button variant="outlined" color="secondary">Remove</Button>
        </div>
    );
};

export default Buttons;