import React from "react";
import Input from "../UI/Input/Input";
import classes from './Form.css';
import Button from '../UI/Input/Button/Button';
const Form=(props)=>{
        const {formData,setformData,warn} = props;
        
        let objform= [];
        for(let key in formData){
            objform.push({
                id:key,
                config: formData[key]            
            })
        }

        const changeHandller=(e,id)=>{
            const change={
                ...formData,
                [id]:{
                    ...formData[id],
                    value: e.target.value,
                    touch:true,
                    
                }
            }
            
            setformData(change);
    
        }

        

        const inputForm= <div className={classes.box_input}>
            {objform.map((mp)=>(
            <Input value={mp.config.value} elType={mp.config.elementtype} elChange={(e)=>changeHandller(e, mp.id)}/>
        ))}
        {props.photo? props.photo:null}
        <Button clicked={props.clicked}>clicked</Button>
        </div>
        const errorMessage= <p className={classes.error}>چنین حسابی وجود ندارد</p>
    return(
        <div className={classes.Form} style={{height:window.innerHeight, position:'relative'}}>
          {inputForm}
            {props.children}
            {props.error?errorMessage:null}
        </div>
    );
}
export default Form;