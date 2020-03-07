import React from "react";
import JobItem from "./jobitems/JobItem";

const JobList = ({jobs}) => {
    return(
        <div>
            {jobs.map(item => {
                return <JobItem key={item.id} item={item} />
            })}
        </div>
    );
};

export default JobList;