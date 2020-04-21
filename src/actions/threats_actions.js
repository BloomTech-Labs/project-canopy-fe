import axios from 'axios';

const url = process.env.REACT_APP_BACKENDURL
    ? process.env.REACT_APP_BACKENDURL
    : "http://localhost:5000";

export const ALL_THREATS = 'ALL_THREATS';
export const THREATS_BY_COUNTRY = 'THREATS_BY_COUNTRY';

export const getAllThreats = () => dispatch => {
    axios.get(`${url}/api/threats`)
        .then(res => {
            dispatch({ type: ALL_THREATS, payload: res.data })
        })
        .catch(err => {
            console.log(err);
        })
};

export const getThreatsByCountry = (country) => dispatch => {
    axios.get(`${url}/api/threats/country/${country}`)
        .then(res => {
            dispatch({ type: ALL_THREATS, payload: res.data })
        })
        .catch(err => {
            console.log(err);
        })
};