import React, { useState, useEffect } from "react";
import { APP_ID, APP_KEY } from "../config/keys";
import JobList from "./jobs/JobList";
import SearchField from "./search/SearchField";
import JobDetail from "./selected/JobDetail";

const Main = () => {
    const [ jobs, setJobs ] = useState([]);
    const [ what, setWhat ] = useState("");
    const [ selectedJob, setSelectedJob ] = useState(null);

    // deafault job fetch 
    useEffect(() => {
        const onJobSearch = async () => {
            const response = await fetch(
                `http://api.adzuna.com/v1/api/jobs/gb/search/1?app_id=${APP_ID}&app_key=${APP_KEY}`
            );
            const data = await response.json();
            setJobs(data.results);
            console.log(data.results);
            setSelectedJob(data.results[0]);
        }
        onJobSearch();
    }, [])
    

    const onTermChange = e => {
        setWhat(e.target.value);
        console.log(e.target.value);
    }

    const onFormSubmit = async (e) => {
        e.preventDefault();
        const response = await fetch(
            `http://api.adzuna.com/v1/api/jobs/gb/search/1?app_id=${APP_ID}&app_key=${APP_KEY}&what=${what}`
        );
        const data = await response.json();
        setWhat(data.results);
        console.log(what);
        console.log(data.results[0]);
        setWhat("");
        setJobs(data.results);
        setSelectedJob(data.results[0]);
    }
    
    const onJobSelect = (job) => {
        setSelectedJob(job)
        console.log(job);
    }
    
    const style = {
        bodyGrid: {
            display:"grid",
            gridTemplateColumns:"1fr 1fr",
        }
    }
    return (
        <div>
            <SearchField 
                onTermChange={onTermChange}
                onFormSubmit={onFormSubmit}
                what={what}
                setWhat={setWhat}
            />
            <div style={style.bodyGrid}>
                <div>
                    <JobList 
                        jobs={jobs}
                        onJobSelect={onJobSelect} />
                </div>
                <div>
                    <JobDetail jobs={jobs} job={selectedJob}/>
                </div>
            </div>
            
        </div>
    );
};

export default Main;