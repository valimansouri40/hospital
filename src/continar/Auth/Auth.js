import React, { useEffect, useState }  from "react";
import { connect } from "react-redux";
import Form from "../../components/Form/Form";
import * as action from "../../store/action";
import classes from './Auth';


const Auth =(props)=>{
    const [auth, setauth]= useState({
        Name:{
            tag:'input',
            elementtype:{
                type:'email',
                placeholder:'نام خود را وارد کنید'
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
        passwordConfirm:{
            tag:'input',
            elementtype:{
                type:'email',
                placeholder:'تایید پسوورد خود را وارد کنید'
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
    const [sine, chsine]= useState(true)
    useEffect(()=>{
           if(!sine){
               
               setauth({  Email:{
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
            },})
           } else{
               setauth({
                Name:{
                    tag:'input',
                    elementtype:{
                        type:'email',
                        placeholder:'نام خود را وارد کنید'
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
                passwordConfirm:{
                    tag:'input',
                    elementtype:{
                        type:'email',
                        placeholder:'تایید پسوورد خود را وارد کنید'
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
           }
    },[sine])
    const [error,seterror]=useState(false);
    const {onauth,user}=props;
    const senddata=()=>{
        
        
       let data;
        if(!sine){
            data={
                Email:auth.Email.value,
                Password:auth.Password.value}
        }else{
            data={
                Email:auth.Email.value,
                Password:auth.Password.value,
                passwordConfirm: auth.passwordConfirm.value,
                Name: auth.Name.value
            }
        }
 
        onauth(data, sine);
    
       setTimeout(() => {
     
        if(window.location.pathname !== '/'){
            
                seterror(true)
                setTimeout(() => {
                    seterror(false)
                }, 5000);
            
            // props.history.push('/');
            // window.location.reload();
        }
        // else{
        //     seterror(true)
        //     setTimeout(() => {
        //         seterror(false)
        //     }, 5000);
        // } 
       }, 3000);
        
    }

   const changehan=()=>{
       chsine(e=>!e);

   }
  
   
   const ss=<span style={{fontSize:'2.5vh',color:'blue',textDecoration:'underline'}} 
   onClick={changehan}>{sine? 'ورود به حساب':'ایجاد حساب'}</span>
    return(
        <div className={classes.Auth}>
            
            <Form formData={auth} setformData={setauth} warn={false} error={error} clicked={senddata} >
                {ss}
                </Form>
        </div>

        );

};
const mapstatetoprops=state=>{
    return{
        user:state.post.users
    }
}
const mapdispatchtoprops=dispatch=>{
    return{
        onauth: (data, sine)=>dispatch(action.setauthenticate(data,sine))

    }
}
export default connect(mapstatetoprops,mapdispatchtoprops)(Auth);
