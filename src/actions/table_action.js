import axios from 'axios';

const url = process.env.REACT_APP_BACKENDURL
    ? process.env.REACT_APP_BACKENDURL
    : "http://localhost:5000";

export const GET_HOTSPOT_TABLE_DATA = 'GET_HOTSPOT_TABLE_DATA';
export const GET_THREATS_TABLE_DATA = 'GET_THREATS_TABLE_DATA';


export const allHotspots = () => dispatch => {
    axios.get(`${url}/api/biodiversity`)
        .then(res => {
            dispatch({ type: GET_HOTSPOT_TABLE_DATA, payload: tableDataFormatter(res.data) })
        })
        .catch(err => {
            console.log(err);
        })
};

export const hotspotsByCountry = (country) => dispatch => {
    axios.get(`${url}/api/biodiversity/${country}`)
        .then(res => {
            dispatch({ type: GET_HOTSPOT_TABLE_DATA, payload: tableDataFormatter(res.data) })
        })
        .catch(err => {
            console.log(err);
        })
};

function tableDataFormatter(data){
    return data.map(habitat => {
        const split = habitat.habitat.split('-')
        habitat.habitat = split[0].trim();
        habitat.description = split[1].trim();
        return habitat
    })
};

export const setThreatsByAll = () => dispatch => {
    axios.get(`${url}/api/threats`)
        .then(res => {
            dispatch({ type: GET_THREATS_TABLE_DATA, payload: res.data })
        })
        .catch(err => {
            console.log(err);
        })
};

export const setThreatsByCountry = (country) => dispatch => {
    axios.get(`${url}/api/threats/country/${country}`)
        .then(res => {
            dispatch({ type: GET_THREATS_TABLE_DATA, payload: res.data })
        })
        .catch(err => {
            console.log(err);
        })
};