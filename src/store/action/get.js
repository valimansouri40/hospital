import axios from 'axios';
import * as action from './actionType';

export const getdoctor=(data,length)=>{
    return{
        type:action.GETDOCTOR,
        data:data,
        length:length
    }
}

export const getdoctorinit=(page)=>{
    return dispatch=>{
        fetch(`/doctors?page=${page}&limit=8`
        ).then(resp=>{return resp.json()}).then((res)=>{
           
            dispatch(getdoctor(res.data.doctor,res.length))
        }).catch(err=>{
        
        })
    }
}
export const getTime=(data)=>{
    return{
        type:action.GETTIME,
        data:data
    }
}

export const getTimeInit=(id)=>{
    return dispatch=>{
        
        fetch(`/time/${id}`,{
            method:'GET',
        }).then(response=>{return response.json()}).then(res=>{
         
            dispatch(getTime(res.data));
        }).catch(err=>{
          
        })
    }
}
export const getUser=(data)=>{
    return{
        type:action.GETUSER,
        data:data
    }
}

export const getUserInit=()=>{
    return dispatch=>{
        let id='1234';
        let hj=localStorage.getItem('idDoctor');
        if(hj){
            id= hj.toString();
        }
       
        fetch(`/user/getme/${id}`,{
            method:"GET",
            headers:{'Content-Type':'aplication/json'}
        }).then(res=>{return res.json()}).then(response=>{
          
            dispatch(getUser(response.data))
        }).catch(er=>{
           
        })
    }
}

export const mariz=(data)=>{

    return{
        type:action.MARIZ,
        data:data
    }
}
export const getMariz=(id)=>{
    return dispatch=>{
        fetch(`/time/doctor/${id}`,{
            method:"GET",
            headers:{'Content-Type':'aplication/json'}
        }).then(res=>{return res.json()}).then(response=>{
     
            dispatch(mariz(response.data))

        }).catch(er=>{
         
        })
    }
}
export const onetime=(data)=>{
    return{
        type:action.GETONETIMEDOCTOR,
        data:data
    }
}

export const OneTimeInit=(idu,idd)=>{
    return dispatch=>{
        fetch(`/time/${idu}/${idd}`).then(response=>{return response.json()}).then(res=>{
          
            dispatch(onetime(res.data))
        }).catch(er=>{
        })
    }
}

export const fallow=(data)=>{

    return{
        type:action.DOCTORFALLOWGET,
        data:data
    }
}
export const getfallow=(id)=>{
    return dispatch=>{
        fetch(`/fallow/${id}`,{
            method:"GET",
            headers:{'Content-Type':'aplication/json'}
        }).then(res=>{return res.json()}).then(response=>{
            dispatch(fallow(response.data))

        }).catch(er=>{
        })
    }
}