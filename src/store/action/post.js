import axios from 'axios';
import * as action from './actionType';

export const postdoctor=()=>{
    return{
        type:action.POSTDOCTOR
    }
}

export const postdoctorinit=(data)=>{
    return dispatch=>{
         fetch('/doctors',{
             body:data,
             method:"POST"
         }
        ).then(resp=>{return resp.json()}).then((res)=>{
            dispatch(postdoctor())
            if(res.data){
                window.location.reload()
                window.location.replace('/');
            }
        }).catch(err=>{
          
        })
    }
}
export const postTime=()=>{
    return{
        type:action.POSTTIME
    }
}
export const postTimeInit=(id,userid)=>{
    return dispatch=>{
        

       axios.post(`http://localhost:8000/api/v1/time/${id}/${userid}`
   ).then((res)=>{
       
       dispatch(postTime())
       if(res.data.data){
           window.location.replace('/')
        window.location.reload()
       }
      
   }).catch(err=>{
    
   })
    }
}
export const authenticate=(data)=>{
    return{
        type: action.AUTH,
        data:data
    }
}
export const setauthenticate=(data, bol)=>{
    return dispatch=>{
        let auth = 'sineup';
        if(!bol){
            auth= 'login'
        }  
        axios.post(`/user/${auth}`,data).then(res=>{
            if(res.data.data){
               window.location.replace('/')
               setTimeout(() => {
                window.location.reload(); 
               }, 2000);
              
            }
            dispatch(authenticate(res.data));
          
            localStorage.setItem('idDoctor', res.data.data.user._id);
            
        }).catch(err=>{
          
        })
    }
}

export const logoutInit=()=>{
    return dispatch=>{
        axios.post('/user/logout').then(res=>{
         
            localStorage.clear('idDoctor');
             window.location.reload();
        }).catch(err=>{
     
        })
    }
}

export const postFallow=()=>{
    return{
        type:action.DOCTORFALLOW
    }
}
export const postFallowInit=(id,userid)=>{
    return dispatch=>{
        

       axios.post(`/fallow/${id}/${userid}`
   ).then((res)=>{
     
       dispatch(postFallow())
       if(res.data.data){
  
        window.location.reload()
       }
      
   }).catch(err=>{
     
   })
    }
}