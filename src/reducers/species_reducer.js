import { 
    FILTER_SPECIES,
} from '../actions/species_action.js';

const initialState = {
    threatenedSpecies: [],
    allSpecies: [],
};

export const speciesReducer = (state = initialState, action) => {
    switch(action.type) {
        case FILTER_SPECIES:
            return {
                threatenedSpecies: action.payload.threatened,
                allSpecies: action.payload.allSpecies,
            }
       
        default:
            return state;
    };
}