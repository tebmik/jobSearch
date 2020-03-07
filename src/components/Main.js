import React, { useState, useEffect } from "react";
import { APP_ID, APP_KEY } from "../config/keys";
import JobList from "./jobs/JobList";

const Main = () => {
    const [ jobs, setJobs ] = useState([]);

    useEffect(() => {
        const onJobSearch = async () => {
            const response = await fetch(
                `http://api.adzuna.com/v1/api/jobs/gb/search/1?app_id=${APP_ID}&app_key=${APP_KEY}&content-type=application/json`
            );
            const data = await response.json();
            setJobs(data.results);
            console.log(data.results);
        }
        onJobSearch();
    }, [])
    return (
        <div>
            <JobList jobs={jobs} />
        </div>
    );
};

export default Main;