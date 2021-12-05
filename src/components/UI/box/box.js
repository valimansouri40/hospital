import React from "react";
import { NavLink } from "react-router-dom";
import classes from './box.css';

const Box=(props)=>{

    return(
        <NavLink to={props.link}> <div  className={classes.box_home}>
                    
           <img className={classes.box_img} src={props.img}/>
            <h2 className={classes.box_h2}>{props.children}</h2>
            {props.praghraf?<p className={classes.box_praghraf}>{props.children}</p>:null}
            
             </div></NavLink>
    );
}
export default Box;