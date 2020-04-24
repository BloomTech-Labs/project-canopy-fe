export const SET_FILTER = 'SET_FILTER';
export const SET_FILTER_S = 'SET_FILTER_TITLE'

export const setFilterByCountry = (countries_data, country, title) => dispatch => {
    console.log(title)
    countries_data.map(countryObj => {
        if(countryObj.country.toLowerCase() === country.toLowerCase()){
            dispatch({ type: SET_FILTER, payload: { data:countryObj, title:title }})
        }
    })
};

export const setFilterByAllCRB = (CRB_data, title) => dispatch => {
    dispatch({ type: SET_FILTER, payload:{ data:CRB_data, title:title} })
};


