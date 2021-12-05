import React, { useState } from "react";
import { connect } from "react-redux";
import Form from '../Form/Form';
import classes from './build.css';
import * as action from '../../store/action/index';
const  BuildDoctor=(props)=>{
    const [auth, setauth]= useState({
        fristName:{
            tag:'input',
            elementtype:{
                type:'text',
                placeholder:'اسم کوچک خود را وارد کنید'
            },
            elementconfig:{
                require:true,
                max:25,
                min: 8,
                email: true
            },
            value:'',
            touch:false,
            validation: false
        },
        lastName:{
            tag:'input',
            elementtype:{
                type:'email',
                placeholder:'اسم بزرگ خود را وارد کنید'
            },
            elementconfig:{
                require:true,
                max:25,
                min: 8,
                email: true
            },
            value:'',
            touch:false,
            validation: false
        },
        Email:{
            tag:'input',
            elementtype:{
                type:'email',
                placeholder:'ایمیل خود را وارد کنید'
            },
            elementconfig:{
                require:true,
                max:25,
                min: 8,
                email: true
            },
            value:'',
            touch:false,
            validation: false
        },
        Password:{
            tag:'input',
            elementtype:{
                type:'email',
                placeholder:'پسوورد خود را وارد کنید'
            },
            elementconfig:{
                require:true,
                max:25,
                min: 8,
                email: true
            },
            value:'',
            touch:false,
            validation: false
        },
        rezome:{
            tag:'input',
            elementtype:{
                type:'email',
                placeholder:'رزومه خود را وارد کنید'
            },
            elementconfig:{
                require:true,
                max:25,
                min: 8,
                email: true
            },
            value:'',
            touch:false,
            validation: false
        },
        field:{
            tag:'input',
            elementtype:{
                type:'email',
                placeholder:'رشته خود را وارد کنید'
            },
            elementconfig:{
                require:true,
                max:25,
                min: 8,
                email: true
            },
            value:'',
            touch:false,
            validation: false
        }
    })
    const {onpostdoctor}=props;
    const [img,setimg]=useState()
    const buildhandller=()=>{
        const data=new FormData();
        data.append('lastName', auth.lastName.value);
        data.append('fristName', auth.fristName.value);
        data.append('field', auth.field.value);
        data.append('rezome', auth.rezome.value);
        data.append('Email', auth.Email.value);
        data.append('Password', auth.Password.value);
        data.append('photo', img);

        onpostdoctor(data);
    }
        const imgdhandller=(e)=>{
            setimg(e.target.files[0])
            
        }
        const photo=<div >
            <label for='photo' className={classes.getPhoto}>
                    عکس خود را وارد کنید
            </label>
            <input type='file' style={{display:'none'}} id='photo' name='photo'  onChange={imgdhandller} />
        </div>
   
    return(
        <div className={classes.Auth}>
            <Form formData={auth} setformData={setauth} photo={photo} clicked={buildhandller}  ></Form>
        </div>

        );
}
const mapstatetoprops=state=>{
    return{

    }
}
const mapdispatchprops=dispatch=>{
    return{
        onpostdoctor:(data)=>dispatch(action.postdoctorinit(data))
    }
}
export default connect(mapstatetoprops,mapdispatchprops)(BuildDoctor);