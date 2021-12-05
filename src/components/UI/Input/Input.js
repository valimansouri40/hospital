import React, { Fragment } from "react";
import classes from './Input.css';

const Input=(props)=>{
   
    let inputType= null;
    switch(props.type){
        case 'input':
            inputType= <input className={classes.input} 
            {...props.elType} {...props.value} onChange={props.elChange} />
        case 'texterea':
            inputType= <textarea className={classes.input} 
            {...props.elType} {...props.value} onChange={props.elChange} />
        default:
                inputType= <input className={classes.input}
                 {...props.elType} {...props.value} onChange={props.elChange} />
    }
    return(
        <React.Fragment>
            {inputType}
        </React.Fragment>
    )
}

export default Input;