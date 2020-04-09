import {GET_THREATENED_COUNTS_START,GET_THREATENED_COUNTS_FAILED,GET_THREATENED_COUNTS_SUCCESS} from '../actions/index'

export const initialState={
   threatenedCounts:[]
};


export const reducer=(state=initialState, action)=>{
    switch(action.type){
        case GET_THREATENED_COUNTS_START:
            return {
                ...state,
            }
        case GET_THREATENED_COUNTS_SUCCESS:
            return {
                ...state,
                threatenedCounts: action.payload
            }
        case GET_THREATENED_COUNTS_FAILED:
            return {
                ...state,
            }
        default:
            return state;
    }
}

