import { 
    GET_ALL_SPECIES,
    SPECIES_BY_COUNTRY
} from '../actions/species_action.js';

const initialState = {
    allSpecies: [],
    filteredSpecies: []
};

export const speciesReducer = (state = initialState, action) => {
    switch(action.type) {
        case GET_ALL_SPECIES:
            return {
                allSpecies: action.payload,
                filteredSpecies: action.payload
            }
        case SPECIES_BY_COUNTRY:
            return {
                ...state,
                filteredSpecies: action.payload
            }
        default:
            return state;
    };
}