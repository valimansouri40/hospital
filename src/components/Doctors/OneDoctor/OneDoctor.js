import React, { useEffect, useState } from "react";
import classes from './OneDoctor.css';
import { connect } from "react-redux";
import { useParams, useLocation } from "react-router";
import finder from "../../UI/finder/finder";
import Button from '../../UI/Input/Button/Button';
import * as action from '../../../store/action/index';

const OneDoctor=(props)=>{
    const {getdoctor ,posttime,getUser, oneTime}=props;
       
    
    const datehandller=(id)=>{
        console.log(window.location.pathname,)
        //window.location.pathname = '/'
        //console.log(getUser._id)
        if(getUser){
            props.posttime(id, getUser._id);
        }
         
         
         window.location.reload()
         window.location.replace('/')
    }
    const param= useParams().id;

    // useEffect(()=>{
    //     if(getUser){ononetime(param, getUser._id)}
    // },[ononetime]);
    let doc;
   if(getdoctor){
    doc= getdoctor.filter(e=> e._id === param);
    
   }
   let date= new Date() * 1;
   const df= finder(getdoctor, param)
  

    return(
        <div style={{height:window.innerHeight,width:'100%'}} className={classes.OneDoctor}>
            {df?df.map((doc)=>(<div className={classes.screen} >
              <div className={classes.doc_imgbox}>
              <img className={classes.doc_img} src={`data:image/jpg;base64,${doc.photo}`} />
                  </div>  
                <div className={classes.doc_box}>
                    <div className={classes.doc_block}> 
                        <h1 className={classes.doc_span1}>اسم کوچک :</h1> 
                        <span className={classes.doc_span2}>{doc.fristName}</span> 
                    </div>
                    <div className={classes.doc_block}> 
                        <span className={classes.doc_span1}>اسم بزرگ :</span> 
                        <span className={classes.doc_span2}>{doc.lastName}</span> 
                    </div>
                    <div className={classes.doc_block}> 
                        <span className={classes.doc_span1}>تخصص :</span> 
                        <span className={classes.doc_span2}>{doc.field}</span> 
                    </div>
                    <div className={classes.doc_block}> 
                        <span className={classes.doc_span1}>رزومه :</span> 
                        <span className={classes.doc_span2}>{doc.rezome}</span> 
                    </div>
                    <div className={classes.doc_block}> 
                        <Button clicked={()=>datehandller(doc._id)} disabl={oneTime}> گرفتن وقت دکتر  </Button>
                    </div>
                </div>
            </div>)):null}
        </div>
    );
}
const mapstatetoprops=state=>{
    return{
        getdoctor:state.get.data,
        getUser: state.get.user,
        oneTime: state.get.oneTime
    }
}
const mapdispatchtoprops=dispatch=>{
    return{
        posttime: (id,userid)=>dispatch(action.postTimeInit(id, userid)),
        
    }
}

export default connect(mapstatetoprops,mapdispatchtoprops)(OneDoctor);