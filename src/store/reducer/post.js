import * as actiontype from '../action/actionType';


export const initialstate={
        error:false,
        loading:false,
        data:null,
        users: null
};

export const Reducer=(state=initialstate, action)=>{
    switch(action.type){
        case actiontype.POSTDOCTOR:
            return{
                ...state,
            }
        case actiontype.POSTTIME:
            return{
                  ...state,
            }
        case actiontype.AUTH:
            return{
                ...state,
                users:action.data
            }
        case actiontype.DOCTORFALLOW:
            return{
                ...state
            }
        default:
            return state;
            
    }
}

export default Reducer;