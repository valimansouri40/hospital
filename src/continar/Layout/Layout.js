import React  from "react";
import Box from "../../components/UI/box/box";
import classes from './Layout.css';
import hospital from '../../assets/hospital2.jpg';
import doctor from '../../assets/doctor.jpg';
import timerezerv from '../../assets/timerezerv.png';
import authenticate from '../../assets/authenticate.jpg';
import mydoctor from '../../assets/mydoctor.jpg'
import { connect } from "react-redux";
import * as action from '../../store/action/index';
import axios from "axios";
const Layout=(props)=>{
    const {user,logout,role}=props;
    const loguthandller=()=>{
        logout();
      
    }
   
    return(
        <div className={classes.Layout} style={{height:window.innerHeight}}>
            {user?<div className={classes.head} onClick={loguthandller}><Box link='/' img={authenticate}>{'خروج از حساب'}</Box></div>:
            <div className={classes.head} ><Box link='/auth' img={authenticate}>{"اهراز هویت"}</Box></div>}
            <div className={classes.head}><Box link={role === 'admin'?'/builddoctor':'/mydoctor'} img={mydoctor}>{role === 'admin'?'ساخت حساب دکتر':"دکتر های من"}</Box></div>
            <div className={classes.head}><Box link='/doctors' img={doctor}>دکتر ها</Box></div>
            <div className={classes.head} ><Box link='/' img={hospital}>بیمارستان</Box></div>
            {role ==='doctor'? <div className={classes.head}><Box link='/mypatienttime' img={timerezerv}>وقت های مریض من</Box></div>:
            <div className={classes.head}><Box link='/Mydoctorstimes' img={timerezerv}>وقت های دکتر من</Box></div>}
        </div>
    )
}
const mapstatettoprops=state=>{
    return{
        user:state.get.user,
        role:state.get.role
    }
}
const mapdispatchtoprops=dispatch=>{
    return{
        logout:()=>dispatch(action.logoutInit())
    }
}
export default connect(mapstatettoprops,mapdispatchtoprops)(Layout);