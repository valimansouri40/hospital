import axios from 'axios';
import * as action from './actionType';

export const deleteDoctorInit=(id)=>{
    return dispatch=>{
        axios.delete(`/doctors/${id}`).then(res=>{
          
        }).catch(er=>{
            
        })
    }
}

export const deleteTimeDoctorInit=(id)=>{
    return dispatch=>{
        axios.delete(`/time/${id}`).then(res=>{
    
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