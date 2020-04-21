import { 
    GET_THREATENED_SPECIES,
    SPECIES_BY_COUNTRY,
    GET_ALL_SPECIES,
    ALL_SPECIES_BY_COUNTRY
} from '../actions/species_action.js';

const initialState = {
    ThreatenedSpecies: [],
    filteredThreatened: [],
    allSpecies: [],
    filteredAllSpecies: []
};

export const speciesReducer = (state = initialState, action) => {
    switch(action.type) {
        case GET_THREATENED_SPECIES:
            return {
                ...state,
                ThreatenedSpecies: action.payload,
                filteredThreatened: action.payload
            }
        case SPECIES_BY_COUNTRY:
            return {
                ...state,
                filteredThreatened: action.payload
            }
        case GET_ALL_SPECIES:
            return {
                ...state,
                allSpecies: action.payload,
                filteredAllSpecies: action.payload
            }
        case ALL_SPECIES_BY_COUNTRY:
            return {
                ...state,
                filteredAllSpecies: action.payload
            }
        default:
            return state;
    };
}