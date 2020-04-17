import axios from 'axios';
const url = process.env.REACT_APP_BACKENDURL
    ? process.env.REACT_APP_BACKENDURL
    : "http://localhost:5000";

export const GET_ALL_SPECIES_COUNTS_BY_COUNTRY="GET_ALL_SPECIES_COUNTS_BY_COUNTRY"

export const GET_THREATENED_COUNTS_START="GET_THREATENED_COUNTS_START";
export const GET_THREATENED_COUNTS_SUCCESS="GET_THREATENED_COUNTS_SUCCESS"
// export const GET_THREATENED_COUNTS_FAILED="GET_THREATENED_COUNTS_FAILED"

export const GET_THREATENED_COUNTS_BY_HABITAT_START="GET_THREATENED_COUNTS_BY_HABITAT_START";
export const GET_THREATENED_COUNTS_BY_HABITAT_SUCCESS="GET_THREATENED_COUNTS_BY_HABITAT_SUCCESS"
// export const GET_THREATENED_COUNTS_BY_HABITAT_FAILED="GET_THREATENED_COUNTS_BY_HABITAT_FAILED"

export const GET_THREATENED_COUNTS_BY_COUNTRY_START="GET_THREATENED_COUNTS_BY_COUNTRY_START";
export const GET_THREATENED_COUNTS_BY_COUNTRY_SUCCESS="GET_THREATENED_COUNTS_BY_COUNTRY_SUCCESS"
// export const GET_THREATENED_COUNTS_BY_COUNTRY_FAILED="GET_THREATENED_COUNTS_BY_COUNTRY_FAILED"


// export const getThreatenedCounts=()=>(dispatch)=>{
//     console.log(process.env.REACT_APP_BACKENDURL)
//     dispatch({type:GET_THREATENED_COUNTS_START})

//     return axios.get(`${url}/th_s/classCount`)
//     .then(response=>{
//         dispatch({
//             type:GET_THREATENED_COUNTS_SUCCESS,
//             payload:response
//         })

//     })
//     .catch(err=>{
//         // dispatch({
//         //     type:GET_THREATENED_COUNTS_FAILED,
//         //     payload:err
//         // })
        
//     })
// } 



// export const getThreatenedCountsByHabitat=()=>(dispatch)=>{
//     dispatch({type:GET_THREATENED_COUNTS_BY_HABITAT_START})

//     return axios.get(`${url}/th_s/habitatClassCount`)
//     .then(response=>{
//         dispatch({
//             type:GET_THREATENED_COUNTS_BY_HABITAT_SUCCESS,
//             payload:response
//         })

//     })
//     .catch(err=>{
//         // dispatch({
//         //     type:GET_THREATENED_COUNTS_BY_HABITAT_FAILED,
//         //     payload:err
//         // })
        
//     })
// } 



// export const getThreatenedCountsByCountry=()=>(dispatch)=>{
//     dispatch({type:GET_THREATENED_COUNTS_BY_COUNTRY_START})

//     return axios.get(`${url}/th_s/CountryClassCounts`)
//     .then(response=>{
//         dispatch({
//             type:GET_THREATENED_COUNTS_BY_COUNTRY_SUCCESS,
//             payload:response
//         })

//     })
//     .catch(err=>{
//         // dispatch({
//         //     type:GET_THREATENED_COUNTS_BY_COUNTRY_FAILED,
//         //     payload:err
//         // })
        
//     })
// } 

// export const getAllSpeciesCountsByCountry = () => (dispatch) => {
//     return axios.get("https://projectcanopybackend.herokuapp.com/th_s/allcountryclasscount")
//     .then(response => {
//         dispatch({
//             type:GET_ALL_SPECIES_COUNTS_BY_COUNTRY,
//             payload:response
//         })
//     })
//     .catch(err => {
//         // dispatch({
//         //     type:GET_THREATENED_COUNTS_FAILED,
//         //     payload:err
//         // })
        
//     })
// } 