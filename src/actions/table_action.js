import axios from 'axios';

const url = process.env.REACT_APP_BACKENDURL
    ? process.env.REACT_APP_BACKENDURL
    : "http://localhost:5000";

export const ALL_TABLE_DATA = 'ALL_TABLE_DATA';
export const COUNTRY_TABLE_DATA = 'COUNTRY_TABLE_DATA'

export const getAllTableData = () => dispatch => {
    axios.get(`${url}/api/biodiversity`)
        .then(res => {
            dispatch({ type: ALL_TABLE_DATA, payload: tableDataFormatter(res.data) })
        })
        .catch(err => {
            console.log(err);
        })
};

export const countryTableData = (country) => dispatch => {
    axios.get(`${url}/api/biodiversity/${country}`)
        .then(res => {
            dispatch({ type: COUNTRY_TABLE_DATA, payload: tableDataFormatter(res.data)})
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