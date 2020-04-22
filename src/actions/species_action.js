import axios from 'axios';

const url = process.env.REACT_APP_BACKENDURL
    ? process.env.REACT_APP_BACKENDURL
    : "http://localhost:5000";

export const SPECIES_BY_COUNTRY = 'SPECIES_BY_COUNTRY';
export const GET_THREATENED_SPECIES = 'GET_THREATENED_SPECIES';
export const GET_ALL_SPECIES = 'GET_ALL_SPECIES';
export const ALL_SPECIES_BY_COUNTRY = 'ALL_SPECIES_BY_COUNTRY'

export const getThreatenedSpecies = () => dispatch => {
    axios.get(`${url}/api/species/by/country`)
        .then(res => {
            const allSpecies = [];
            res.data.map(country => {
                country.species.map(animal => {
                    allSpecies.push(animal)
                })
            })
            dispatch({ type: GET_THREATENED_SPECIES, payload: allSpecies })
        })
        .catch(err => {
            console.log(err);
        })
};

export const allSpeciesData = () => dispatch => {
    axios.get(`${url}/api/species/by/all`)
    .then(res => {
        dispatch({ type: GET_ALL_SPECIES, payload: res.data })
    })
    .catch(err => {
        console.log(err)
    })
};

export const filterAllSpeciesByCountry = (country) => dispatch => {
    axios.get(`${url}/api/species/by/country-all`)
        .then(res => {
            let data = []
            res.data.map(item => {
                if(item.country.toLowerCase() === country.toLowerCase()){
                    data = item.species
                }
            })
            dispatch({ type: ALL_SPECIES_BY_COUNTRY, payload: data})
        })
}

export const filterSpeciesByCountry = (speciesData, country) => dispatch => {
    const filteredSpecies = speciesData.filter(item => item.country.toLowerCase() === country.toLowerCase())
    dispatch({ type: SPECIES_BY_COUNTRY, payload: filteredSpecies })
}