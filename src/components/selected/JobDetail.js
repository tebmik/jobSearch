import React from "react";
import RoomIcon from '@material-ui/icons/Room';
import WorkOutlineIcon from '@material-ui/icons/WorkOutline';
import PaymentIcon from '@material-ui/icons/Payment';
import Divider from '@material-ui/core/Divider';

import Button from '@material-ui/core/Button';

const JobDetail = ({job}) => {
    if(!job) {
        return <p>Loading...</p>
    }

    const salaryStr = () => 
        job.salary_max > job.salary_min 
            ? 
                <p>{`Salary: £${job.salary_min} / £${job.salary_max} Dependent on experience`}</p> 
            : 
                <p>{`Salary: £${job.salary_min}`}</p>

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
        }, 
        titleWrapper: {
            paddingBottom: "10px"
        },
        title: {
            marginBottom:0,
            color:"#2d2d2d",
            fontSize:"23px"
        }, 
        titleSub: {
            fontSize:"14px",
            color:"#2d2d2d",
        },
        divider: {
            margin:"0 0 10px 0"
        }, 
        locationWrapper: {
            margin:"4px 0 16px",
            display:"grid",
            alignItems:"center",
            gridTemplateColumns:"26px auto",
        },
        icon:{
            fontSize:"24px", 
            color: "#a4a4a4"
        },
        location: {
            color:"#2d2d2d",
            fontSize:"16px",
            margin:"0 0 0 16px",
            textTransform:"capitalize"
        },
        desriptionWrapper: {
            margin:"14px 0"
        },
        desciption: {
            color:"#2d2d2d",
            fontSize:"14px"
        },
        contractType: {
            color:"#2d2d2d",
            fontSize:"16px",
            textTransform:"capitalize"
        },
    }


    let string = job.created;
    let dateStr = 
        string.substring(0, string.length - 10)
        .split("-")
        .reverse()
        .join("-");

    return (
        <div style={style.wrapper}>
            <div>
                <div style={style.titleWrapper}>
                    <h3 style={style.title}>{job.title}</h3>
                    <span style={style.titleSub}>{job.company.display_name}</span><br/>
                </div>
                <Divider style={style.divider} />
                <div style={style.locationWrapper}>
                    <RoomIcon style={style.icon} />
                    <span style={style.location}>{job.location.display_name}</span>
                </div>
                <div style={style.locationWrapper}>
                    <WorkOutlineIcon style={style.icon} />
                    <span style={style.location}>{`${job.contract_time}, ${job.contract_type}`}</span>
                </div>
                <div style={style.locationWrapper}>
                    <PaymentIcon style={style.icon} />
                    <span style={style.location}>£{job.salary_min}</span>
                </div>
                <div style={style.descriptionWrapper}>
                    <p style={style.description}>{job.description}</p>
                </div>
                <div>
                    <p style={style.contractType}>
                        {`Job Types: 
                        ${job.contract_time},  
                        ${job.contract_type}`}
                    </p>
                </div>
                <div>
                    <p>{salaryStr()}</p>
                </div>
                <div>
                    <span>{`Date Posted: ${dateStr}`}</span>
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