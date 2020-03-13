import React from "react";
import JobItem from "./jobitems/JobItem";

const JobList = ({jobs, onJobSelect}) => {

    const renderList = jobs.map(item => {
        return(
            <JobItem 
                key={item.id} 
                item={item} 
                onJobSelect={onJobSelect} 
            />
        ); 
    })
    return(
        <div>
            {renderList}
        </div>
    );
};

export default JobList;