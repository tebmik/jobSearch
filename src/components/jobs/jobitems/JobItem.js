import React from "react";

const JobItem = ({item}) => {

    const style = {
        wrapper: {
            border:"1px solid rgba(0,0,0,0.2)",
            borderRadius:"20px",
            padding:"20px",
            margin:"20px",
            maxHeight:"280px",
            maxWidth:"280px",
            overflow:"hidden",
        },
        title: {
            fontWeight:"bold",
            fontSize:"18px",
            color:"2D2D2D",
            margin:0,
        },
        companyName: {
            fontSize:"16px",
            color:"#2D2D2D",
        },
        locationWrapper: {
            padding:"12px 0 0 0",
        },
        locationArea: {
            fontSize:"16px",
            color:"#2D2D2D",
        },
        salaryWrapper: {
            padding:"12px 0 0 0",
        },
        salary: {
            fontSize:"16px",
            color:"#2D2D2D",
            fontWeight:"bold",
        },
        description : {
            color:"#767676",
            fontSize:"23px",
        },
    }

    

    return (
        <div style={style.wrapper}>
            <h2 style={style.title}>{item.title}</h2>
            <span style={style.companyName}>{item.company.display_name}</span><br/>
            <div style={style.locationWrapper}>
                <span style={style.locationArea}>{item.location.area[2]}</span><br/>
                <span style={style.locationArea}>{item.location.area[1]}</span><br/>
            </div>
            <div style={style.salaryWrapper}>
                <span style={style.salary}>£{item.salary_min}</span>
            </div>
            <p style={style.desription}>{item.description}</p>
        </div>
    );
};

export default JobItem;