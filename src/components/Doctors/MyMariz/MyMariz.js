import React, { useEffect, useState } from "react";
import classes from '../MyDoctorTime/MyDoctorTime.css';
import { connect } from "react-redux";
import * as action from '../../../store/action/index';
import Button from '../../UI/Input/Button/Button'


const MyMariz=(props)=>{
    const {onmariz,role,time,user}=props;
    useEffect(()=>{
        if(user){
            onmariz(user._id);
        }
        
    },[onmariz, user]);
  
    const backhandller=()=>{
        props.history.push('/');
    }
     
     let fg= new Date().toLocaleString();
    
    return(
<div  style={{minHeight:window.innerHeight}} className={classes.Doctors}>
            <header className={classes.header}>
               <div className={classes.head}> <Button clicked={backhandller}>برگشت به خانه</Button></div>
            </header>
            <div className={classes.time}>
                {time?time.map((mp)=>(<div className={classes.time_box} key={mp._id}>
                    <p className={classes.tmDoc}>{fg[0]+''+fg[1]+''+fg[2]+''+fg[3]+'/'+mp.timeDoctor[0] + '/' + mp.timeDoctor[8]+ ''+ mp.timeDoctor[9] + ' ' + ' ' + mp.timeDoctor.split(' ')[3] }</p>
                    
                   
                      <p className={classes.docName}>{mp.user.Name}</p>

                </div>)):null}
            </div>
            </div>
    );
}

const mapstatettoprops=state=>{
    return{
        time:state.get.mariz,
        role: state.get.role,
        user:state.get.user
    }
}
const mapdispatchtoprops=dispatch=>{
    return{
        onmariz:(id)=>dispatch(action.getMariz(id))
    }
}
export default connect(mapstatettoprops,mapdispatchtoprops)(MyMariz);
