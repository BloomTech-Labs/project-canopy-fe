import axios from 'axios';

export const GET_THREATENED_COUNTS_START="GET_THREATENED_COUNTS_START";
export const GET_THREATENED_COUNTS_SUCCESS="GET_THREATENED_COUNTS_SUCCESS"
export const GET_THREATENED_COUNTS_FAILED="GET_THREATENED_COUNTS_FAILED"


export const getThreatenedCounts=()=>(dispatch)=>{
    dispatch({type:GET_THREATENED_COUNTS_START})
    return axios.get("http://localhost:5000/th_s/tax/classCount")
    .then(response=>{
        dispatch({
            type:GET_THREATENED_COUNTS_SUCCESS,
            payload:response
        })

    })
    .catch(err=>{
        dispatch({
            type:GET_THREATENED_COUNTS_FAILED,
            payload:err
        })
        
    })
} 