import React from "react";
import SearchJob from "./SearchJob";
import SearchArea from "./SearchArea";
import SubmitBtn from "./SubmitBtn";

const SearchField = ({
    onTermChange, 
    onFormSubmit, 
    what, 
    setWhat}) => {

    const style = {
        searchWrapper: {
            display:"grid",
            gridTemplateColumns:"repeat(auto-fit, minmax(220px, 1fr))",
            padding:"20px",
            gridGap:"20px",
            alignItems:"center",
        }
    }

    return (
        <>
            <form
                onSubmit={onFormSubmit}
                style={style.searchWrapper}>
                <SearchJob
                    onTermChange={onTermChange} 
                    what={what} 
                />
                {/* <SearchArea /> */}
                <SubmitBtn />
            </form>
        </>
    );
};

export default SearchField;