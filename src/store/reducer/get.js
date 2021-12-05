import * as actiontype from '../action/actionType';


export const initialstate={
        error:false,
        loading:false,
        data:null,
        Time:null,
        user:null,
        role:null,
        mariz:null,
        oneTime:false,
        length:null,
        getFallow:null
};

export const Reducer=(state=initialstate, action)=>{
    switch(action.type){
        case actiontype.GETDOCTOR:
            return{
                ...state,
                data:action.data,
                length:action.length
            }
        case actiontype.GETTIME:
            return{
                ...state,
                Time:action.data
            }
        case actiontype.GETUSER:
            return{
                ...state,
                user:action.data,
                role:action.data.role
            }
        case actiontype.MARIZ:
            return{
                ...state,
                mariz: action.data
            }
        case actiontype.GETONETIMEDOCTOR:
            let ty= false;
            if(action.data.length !== 0){
                ty= true
            }
            return{
                ...state,
                oneTime:ty
            }
        case actiontype.DOCTORFALLOWGET:
            return{
                ...state,
                getFallow: action.data
            }
        default:
            return state;
    }
}

export default Reducer;