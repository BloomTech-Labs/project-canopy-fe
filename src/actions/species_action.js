import axios from 'axios';

const url = process.env.REACT_APP_BACKENDURL
    ? process.env.REACT_APP_BACKENDURL
    : "http://localhost:5000";

export const SPECIES_BY_COUNTRY = 'SPECIES_BY_COUNTRY';
export const GET_ALL_SPECIES = 'ALL_SPECIES';

export const getAllSpecies = () => dispatch => {
    axios.get(`${url}/api/species/by/country`)
        .then(res => {
            const allSpecies = [];
            res.data.map(country => {
                country.species.map(animal => {
                    allSpecies.push(animal)
                })
            })
            dispatch({ type: GET_ALL_SPECIES, payload: allSpecies })
        })
        .catch(err => {
            console.log(err);
        })
};

export const filterSpeciesByCountry = (speciesData, country) => dispatch => {
    const filteredSpecies = speciesData.filter(item => item.country.toLowerCase() === country.toLowerCase())
    dispatch({ type: SPECIES_BY_COUNTRY, payload: filteredSpecies })
}