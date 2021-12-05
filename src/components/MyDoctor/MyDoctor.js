import React, { useEffect } from "react";
import classes from '../Doctors/Doctors.css';
import Button from '../UI/Input/Button/Button';

import { connect } from "react-redux";
import * as action from '../../store/action/index';

const MyDoctor=(props)=>{
        const {ondelete,ongetfallow,user,getFallow}=props;

        useEffect(()=>{
            if(user){
                ongetfallow(user._id);
            }
        },[ongetfallow,user])
       
        const backhandller=()=>{
            props.history.push('/');
        }
        
        const unfallowhandller=(id)=>{
           
                ondelete(id);
        }

    return(
        <div  style={{minHeight:window.innerHeight}} className={classes.Doctors}>
            <header className={classes.header}>
               <div className={classes.head}> <Button clicked={backhandller}>برگشت به خانه</Button></div>
            </header>
            <div className={classes.doctor}>
               { getFallow? getFallow.map((mp)=><div className={classes.doc}>
                    <img className={classes.docto_img} src={`data:image/jpg;base64,${mp.doctor.photo}`}/>
                    <div className={classes.sharh}>
                        <h3 className={classes.h3}>
                            {mp.doctor.fristName + " " + mp.doctor.lastName}
                        </h3>
                        <p className={classes.p_sharh}>{mp.doctor.rezome}</p>
                        <Button>بیشتر</Button>
                    </div>
                    <div className={classes.fallow}>
                        <Button clicked={()=>unfallowhandller(mp._id)}>حذف دکتر </Button>
                    </div>
                    </div>):null}
                
            </div>
        </div>
    );
}
const mapstatetoprops=state=>{
    return{
        user: state.get.user,
        getFallow: state.get.getFallow
    }
}
const mapdispatchtoprops=dispatch=>{
    return{
        ondelete: (id)=> dispatch(action.deleteFallowDoctorInit(id)),
        ongetfallow:(id)=> dispatch(action.getfallow(id)),
    }
}
export default connect(mapstatetoprops, mapdispatchtoprops)(MyDoctor);