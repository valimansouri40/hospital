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
    return async dispatch=>{
       await axios.get(`https://hospital-app-mern.herokuapp.com/api/v1/doctors?page=${1}&limit=10`
        ).then((res)=>{
          
            dispatch(getdoctor(res.data.data.doctor,res.length))
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
        
        fetch(`"https://hospital-app-mern.herokuapp.com/api/v1"/time/${id}`,{
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
       
     fetch(`https://hospital-app-mern.herokuapp.com/api/v1/user/getme/${id}`,{
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
        fetch(`https://hospital-app-mern.herokuapp.com/api/v1/time/doctor/${id}`,{
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
        fetch(`https://hospital-app-mern.herokuapp.com/api/v1/time/${idu}/${idd}`).then(response=>{return response.json()}).then(res=>{
          
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
        fetch(`https://hospital-app-mern.herokuapp.com/api/v1/fallow/${id}`,{
            method:"GET",
            headers:{'Content-Type':'aplication/json'}
        }).then(res=>{return res.json()}).then(response=>{
            dispatch(fallow(response.data))

        }).catch(er=>{
        })
    }
}