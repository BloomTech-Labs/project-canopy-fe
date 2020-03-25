import { GET_DATA } from '../actions/mapActions.js';

// setting up blind state boilerplate
// We don't know what we are expecting exactly yet, so we are setting up an example to be quickly modified.

const initialState = {
    dataPoints: []
};

export const mapReducer = (state = initialState, action) => {
    switch (action.type){
        case GET_DATA:
            return {
                dataPoints: action.payload
            }
        default:
            return state;
    }
};