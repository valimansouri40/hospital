import React from "react";
import classes from './DoctorPaginate.css';


const DoctorPaginate=(props)=>{
   
    return(
        <div className={classes.page}>
            <button className={classes.btn_page} disabled={props.disabelless} onClick={props.clickless}>back</button>
            <button className={classes.btn_page} disabled={props.disabeladd} onClick={props.clickadd}>next</button>
        </div>
    )
}
export default DoctorPaginate;