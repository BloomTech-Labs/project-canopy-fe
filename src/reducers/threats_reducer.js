import {
    ALL_THREATS,
    THREATS_BY_COUNTRY
} from '../actions/threats_actions.js';

const initialState = {
    threats: []
};

export const threatReducer = (state = initialState, action) => {
    switch(action.type) {
        case ALL_THREATS:
            return {
                threats: action.payload
            }
        case THREATS_BY_COUNTRY:
            return {
                threats: action.payload
            }
        default:
            return state;
    }
};