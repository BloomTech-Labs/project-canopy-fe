import axios from 'axios';

const url = process.env.REACT_APP_BACKENDURL
    ? process.env.REACT_APP_BACKENDURL
    : "http://localhost:5000";

export const INITIAL_SET_FILTER = 'INITIAL_SET_FILTER'
export const GET_COUNTRIES = 'GET_COUNTRIES';
export const GET_HABITATS = 'GET_HABITATS';
export const GET_ALL_CRB = 'GET_ALL_CRB';

export const getCountries = () => dispatch => {
    axios.get(`${url}/api/data/by/country`)
        .then(res => {
            dispatch({ type: GET_COUNTRIES, payload: res.data })
        })
        .catch(err => {
            console.log(err)
        })
};
export const getHabitats = () => dispatch => {
    axios.get(`${url}/api/data/by/habitat`)
        .then(res => {
            dispatch({ type: GET_HABITATS, payload: res.data })
        })
        .catch(err => {
            console.log(err)
        })
};
export const getAllCRB = () => dispatch => {
    axios.get(`${url}/api/data/by/all`)
        .then(res => {
            dispatch({ type: GET_ALL_CRB, payload: res.data })
            dispatch({ type: INITIAL_SET_FILTER, payload: res.data })
        })
        .catch(err => {
            console.log(err)
        })
};

