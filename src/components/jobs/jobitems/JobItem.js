import React from "react";
import Buttons from "./buttons/Buttons";

const JobItem = ({item, onJobSelect, key}) => {

    const style = {
        wrapper: {
            border:"1px solid rgba(0,0,0,0.2)",
            borderTopRightRadius:"20px",
            borderTopLeftRadius:"20px",
            padding:"20px",
            margin:"20px 20px 0 20px",
            maxHeight:"280px",
            maxWidth:"280px",
            overflow:"hidden",
            cursor:"pointer"
        },
        btnWrapper: {
            borderBottom:"1px solid rgba(0,0,0,0.2)",
            borderRight:"1px solid rgba(0,0,0,0.2)",
            borderLeft:"1px solid rgba(0,0,0,0.2)",
            borderBottomRightRadius:"20px",
            borderBottomLeftRadius:"20px",
            maxHeight:"280px",
            maxWidth:"280px",
            padding:"0 20px 20px 20px",
            margin:"0 20px"
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
        descriptionWrapper: {
            maxHeight:100,
            overflow:"hidden",
        },
        description : {
            color:"#767676",
            fontSize:"18px",
        },
    }

    const handleDelete = () => {
        console.log(`Delete ${item.id}?`);
    }
    return (
        <>
            <div
                onClick={() => onJobSelect(item)} 
                style={style.wrapper}>
                <h2 style={style.title}>{item.title}</h2>
                <span style={style.companyName}>{item.company.display_name}</span><br/>
                <div style={style.locationWrapper}>
                    <span style={style.locationArea}>{item.location.area[2]}</span><br/>
                    <span style={style.locationArea}>{item.location.area[1]}</span><br/>
                </div>
                <div style={style.salaryWrapper}>
                    <span style={style.salary}>£{item.salary_min}</span>
                </div>
                {/* <div style={style.descriptionWrapper}>
                    <p style={style.description}>{item.description}</p>
                </div> */}
            </div>
            <div style={style.btnWrapper}>
                <Buttons handleDelete={handleDelete} item={item.id}/>
            </div>
        </>
    );
};

export default JobItem;