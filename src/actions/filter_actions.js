export const SET_FILTER = 'SET_FILTER'

export const setFilterByCountry = (countries_data, country) => dispatch => {
    countries_data.map(countryObj => {
        if(countryObj.country.toLowerCase() === country.toLowerCase()){
            dispatch({ type: SET_FILTER, payload: countryObj })
        }
    })
};

export const setFilterByAllCRB = (CRB_data) => dispatch => {
    dispatch({ type: SET_FILTER, payload: CRB_data })
};


