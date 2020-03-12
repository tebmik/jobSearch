import React from "react";
import TextField from '@material-ui/core/TextField';

const SearchJob = ({onTermChange, what}) => {

    const style = {
        searchField: {
            width:"100%",
        }
    }

    return (
        <div noValidate autoComplete="off">
            <TextField
                onChange={onTermChange}
                style={style.searchField} 
                id="outlined-basic" 
                label="What?" 
                variant="outlined" 
                value={what}
            />
        </div>
    );
};

export default SearchJob;