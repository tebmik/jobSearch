import React from "react";
import TextField from '@material-ui/core/TextField';

const SearchArea = () => {
    const style = {
        searchField: {
            width:"100%",
        }
    }

    return (
        <div noValidate autoComplete="off">
            <TextField
                style={style.searchField} 
                id="outlined-basic" 
                label="Where?" 
                variant="outlined" 
            />
        </div>
    );
};

export default SearchArea;