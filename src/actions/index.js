import axios from 'axios';

export const GET_THREATENED_COUNTS_START="GET_THREATENED_COUNTS_START";
export const GET_THREATENED_COUNTS_SUCCESS="GET_THREATENED_COUNTS_SUCCESS"
export const GET_THREATENED_COUNTS_FAILED="GET_THREATENED_COUNTS_FAILED"

export const GET_THREATENED_COUNTS_BY_HABITAT_START="GET_THREATENED_COUNTS_BY_HABITAT_START";
export const GET_THREATENED_COUNTS_BY_HABITAT_SUCCESS="GET_THREATENED_COUNTS_BY_HABITAT_SUCCESS"
export const GET_THREATENED_COUNTS_BY_HABITAT_FAILED="GET_THREATENED_COUNTS_BY_HABITAT_FAILED"

export const GET_THREATENED_COUNTS_BY_COUNTRY_START="GET_THREATENED_COUNTS_BY_COUNTRY_START";
export const GET_THREATENED_COUNTS_BY_COUNTRY_SUCCESS="GET_THREATENED_COUNTS_BY_COUNTRY_SUCCESS"
export const GET_THREATENED_COUNTS_BY_COUNTRY_FAILED="GET_THREATENED_COUNTS_BY_COUNTRY_FAILED"


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



export const getThreatenedCountsByHabitat=()=>(dispatch)=>{
    dispatch({type:GET_THREATENED_COUNTS_BY_HABITAT_START})
    return axios.get("http://localhost:5000/th_s/habitatClassCount")
    .then(response=>{
        dispatch({
            type:GET_THREATENED_COUNTS_BY_HABITAT_SUCCESS,
            payload:response
        })

    })
    .catch(err=>{
        dispatch({
            type:GET_THREATENED_COUNTS_BY_HABITAT_FAILED,
            payload:err
        })
        
    })
} 



export const getThreatenedCountsByCountry=()=>(dispatch)=>{
    dispatch({type:GET_THREATENED_COUNTS_BY_COUNTRY_START})
    return axios.get("http://localhost:5000/th_s/CountryClassCounts")
    .then(response=>{
        dispatch({
            type:GET_THREATENED_COUNTS_BY_COUNTRY_SUCCESS,
            payload:response
        })

    })
    .catch(err=>{
        dispatch({
            type:GET_THREATENED_COUNTS_BY_COUNTRY_FAILED,
            payload:err
        })
        
    })
} 

