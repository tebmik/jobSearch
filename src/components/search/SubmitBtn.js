import React from "react";
import Button from '@material-ui/core/Button';


const SubmitBtn = () => {
    const style = {
        buttonWrapper:{
            display:"grid",
            justifySelf:"center",
            maxWidth:247,
            width:"100%",
        }
    }

    return (
        <div style={style.buttonWrapper}>
            <Button
                type="submit" 
                variant="contained" 
                color="primary">
                Find Jobs
            </Button>
        </div>
    );
};

export default SubmitBtn;