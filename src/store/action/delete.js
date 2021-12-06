import axios from 'axios';
import * as action from './actionType';

export const deleteDoctorInit=(id)=>{
    return dispatch=>{
        axios.delete(`https://hospital-app-mern.herokuapp.com/api/v1/doctors/${id}`).then(res=>{
          
        }).catch(er=>{
            
        })
    }
}

export const deleteTimeDoctorInit=(id)=>{
    return dispatch=>{
        axios.delete(`https://hospital-app-mern.herokuapp.com/api/v1/time/${id}`).then(res=>{
    
            if(res.data.data){
  
                window.location.reload()
               }
        }).catch(er=>{
           
        })
    }
}

export const deleteFallowDoctorInit=(id)=>{
    return dispatch=>{
        axios.delete(`/fallow/${id}`).then(res=>{
            console.log(res)
            if(res.data.data){
  
                window.location.reload()
               }
        }).catch(er=>{
            console.log(er)
        })
    }
}