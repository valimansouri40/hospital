import React from "react";
import classes from './Button.css';

const button =(props)=>{
    console.log(props.disabl)
    return(
    <button className={classes.Button} disabled={props.disabl}  onClick={props.clicked}>{props.children}</button>
)}
export default button;