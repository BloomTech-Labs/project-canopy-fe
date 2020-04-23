import {
    GET_COUNTRIES,
    GET_HABITATS,
    GET_ALL_CRB,
} from '../actions/initial_actions.js'

const initialState = {
    countries: [],
    habitats: [],
    allCRB: [],
}

export const initialReducer = (state = initialState, action) => {
    switch(action.type) {
        case GET_COUNTRIES:
            return {
                ...state,
                countries: action.payload
            }
        case GET_HABITATS:
            return {
                ...state,
                habitats: action.payload
            }
        case GET_ALL_CRB:
            return {
                ...state,
                allCRB: action.payload
            }
        default:
            return state;
    }
};