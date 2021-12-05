import React, { useEffect, useState } from "react";
import classes from './MyDoctorTime.css';
import { connect } from "react-redux";
import * as action from '../../../store/action/index';
import Button from '../../UI/Input/Button/Button'


const MyDoctorTime=(props)=>{
    const {ongetTimeDoctor,role,ondeleteTD,time,user}=props;
    useEffect(()=>{
        
        if(user){
            const vali= user._id
          
            ongetTimeDoctor(vali);
        }
        
    },[ongetTimeDoctor,user]);



 
    const backhandller=()=>{
        props.history.push('/');
    }
    const deletehandller=(id)=>{
        ondeleteTD(id)
        window.location.reload();
    }   
 
     let fg= new Date().toLocaleString();
  
    return(
<div  style={{minHeight:window.innerHeight}} className={classes.Doctors}>
            <header className={classes.header}>
               <div className={classes.head}> <Button clicked={backhandller}>برگشت به خانه</Button></div>
            </header>
            <div className={classes.time}>
            {time?time.map((mp)=>(<div className={classes.time_box} key={mp._id}>
                    {role === 'user'?<span className={classes.zab} onClick={()=>deletehandller(mp._id)}>X</span>:null}
                    <p className={classes.tmDoc}>{fg[0]+''+fg[1]+''+fg[2]+''+fg[3]+'/'+mp.timeDoctor[0] + '/' + mp.timeDoctor[8]+ ''+ mp.timeDoctor[9] + ' ' + ' ' + mp.timeDoctor.split(' ')[3] }</p>
                    
                    <p className={classes.rezome}>{mp.doctor.rezome} igjoifoiguofugoigufoigufugofiugofiuou</p>
                      <p className={classes.docName}>{mp.doctor.fristName + ' ' + mp.doctor.lastName}</p>

                </div>)):null}
            </div>
            </div>
    );
}

const mapstatettoprops=state=>{
    return{
        time:state.get.Time,
        role: state.get.role,
        user:state.get.user
    }
}
const mapdispatchtoprops=dispatch=>{
    return{
        ondeleteTD:(id)=>dispatch(action.deleteDoctorInit(id)),
        ongetTimeDoctor:(id)=>dispatch(action.getTimeInit(id))
    }
}
export default connect(mapstatettoprops,mapdispatchtoprops)(MyDoctorTime);
// {mp.doctor.map((doc)=>(<div className={classes.docData}><p className={classes.rezome}>fgfgfgf</p>
//     <p className={classes.docName}>fgfd</p></div>))}