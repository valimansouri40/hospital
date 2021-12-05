import React, { useEffect, useRef, useState } from "react";
import classes from './Doctors.css';
import Button from '../UI/Input/Button/Button';
import doctor from '../../assets/mydoctor.jpg';
import { connect, useSelector } from "react-redux";
import DoctorPaginateD from './DoctorPaginate/DoctorPaginate'
import { Link } from "react-router-dom";
import * as action from "../../store/action/index";


const Doctors=(props)=>{
    const [page,setpage]=useState(1);
    const [disabeladd, setdisable]=useState(false);
    const [disabelless, setdisableless]=useState(false);
        const {getdoctor,ondeleteD,role,length,user, ongetdoctor,onfallow}=props;
        const lng=(length * 10)/10;
        const lnpage= length / 10;
        
        useEffect(()=>{
            ongetdoctor(page);

           
                if(lnpage <= page){
                setdisable(true)
            }else if(lng < 10){
                setdisable(true)
            }
            else{
                setdisable(false)
            }

            if(page === 1){
                setdisableless(true)
            }else{
                setdisableless(false)
            }
        },[ongetdoctor,page,length,disabelless,disabeladd])

        const backhandller=()=>{
            props.history.push('/');
        }
        const delethandller=(id)=>{
        
            ondeleteD(id);
            window.location.reload();
        }
        
      

        
        const paginationadd=()=>{
            if(lng > 10){
                if(lnpage >= page){
                    setpage(e=> e + 1);
                }
                
            }
            
            
            
        }
       
        
        const paginationless=()=>{
            if(page > 1){
                setpage(e=>{return e-1});
            }
        
            
           
        }
        
      
       const onetimehandller=(id)=>{
                if(user){
                    props.ononetime(id,user._id)
                }
            
       }

       const fallowhadller=(id)=>{
           if(user){
            onfallow(id , user._id)
           }
       }
     
    return(
        <div  style={{minHeight:window.innerHeight}} className={classes.Doctors}>
            <header className={classes.header}>
               <div className={classes.head}> <Button clicked={backhandller}>برگشت به خانه</Button></div>
            </header>
           <div className={classes.doctor}>
           {getdoctor?getdoctor.map((mp)=>(<div className={classes.doc} key={mp.id}>
                    {role === 'admin'?<span className={classes.zab} onClick={()=>delethandller(mp._id)}>X</span>:null}
                    <img className={classes.docto_img} src={`data:image/jpg;base64,${mp.photo}`}/>
                    <div className={classes.sharh}>
                        <h3 className={classes.h3}>
                            {mp.fristName + ' ' + mp.lastName}
                        </h3>
                        <p className={classes.p_sharh}>{mp.rezome}</p>
                      <Link to={`/doctor/${mp._id}`} >  <Button clicked={()=>onetimehandller(mp._id)}>بیشتر</Button></Link>
                    </div>
                    <div className={classes.fallow}>
                        <Button clicked={()=>fallowhadller(mp._id)}>دنبال کردن </Button>
                    </div>
                </div>)):null}
                <DoctorPaginateD clickadd={paginationadd} clickless={paginationless} disabeladd={disabeladd} disabelless={disabelless}></DoctorPaginateD>
            </div>
        </div>
    );
}
const mapstatetoprops=state=>{
    return{
        getdoctor: state.get.data ,
        role:state.get.role,
        length: state.get.length,
        user:state.get.user
    }
}
const mapdispatchtoprops=dispatch=>{
    return{
        ondeleteD:(id)=>dispatch(action.deleteDoctorInit(id)),
        ongetdoctor:(id)=>dispatch(action.getdoctorinit(id)),
        ononetime: (idu,idd)=> dispatch(action.OneTimeInit(idu, idd)) ,
        onfallow: (idu, idd)=> dispatch(action.postFallowInit(idu,idd))
    }
}

export default connect(mapstatetoprops,mapdispatchtoprops)(Doctors);