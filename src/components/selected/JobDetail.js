import React from "react";
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';

const JobDetail = ({job}) => {
    if(!job) {
        return <p>Loading...</p>
    }

    const style = {
        wrapper: {
            position:"sticky",
            top:0,
            padding:"20px",
        },
        buttonWrapper: {
            width:"100%",
            display:"grid",
            gridTemplateColumns:"repeat(auto-fit, minmax(130px, 1fr))",
            gridGap:"10px",
            paddingTop:20,
        }
    }

    return (
        <div style={style.wrapper}>
            <div>
                <h2>{job.title}</h2>
                <span>{job.company.display_name}</span><br/>
                <div>
                    <span>{job.location.area[2]}</span><br/>
                    <span>{job.location.area[1]}</span><br/>
                </div>
                <div>
                    <span>{job.salary_min}</span>
                </div>
                <div>
                    <p>{job.description}</p>
                </div>
            </div>
            <div style={style.buttonWrapper}>
                <Button variant="outlined" color="primary">Apply</Button>
                <Button variant="outlined" color="secondary">Save</Button>
            </div>
        </div>
    );
};

export default JobDetail;