import Axios from 'axios';


// setting up blind action boilerplate
// We don't know what we are expecting exactly yet, so we are setting up an example to be quickly modified.
export const GET_DATA = 'GET_DATA';

export const getData = () => dispatch => {
    Axios.get('SOME ENDPOINT')
        .then(res => {
            console.log(res)
            dispatch({ type: GET_DATA, payload: res.data})
        })
        .catch(err => {
            console.log('could not retrieve data', err)
        })
};