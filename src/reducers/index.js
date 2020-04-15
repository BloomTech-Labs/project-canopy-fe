import {GET_THREATENED_COUNTS_START,GET_THREATENED_COUNTS_FAILED,GET_THREATENED_COUNTS_SUCCESS,
GET_THREATENED_COUNTS_BY_HABITAT_START,GET_THREATENED_COUNTS_BY_HABITAT_SUCCESS,GET_THREATENED_COUNTS_BY_HABITAT_FAILED,
GET_THREATENED_COUNTS_BY_COUNTRY_START,GET_THREATENED_COUNTS_BY_COUNTRY_SUCCESS,GET_THREATENED_COUNTS_BY_COUNTRY_FAILED,
GET_ALL_SPECIES_COUNTS_BY_COUNTRY} from '../actions/index'

export const initialState = {
   allCountsByClass:[],
   threatendCountsByClass:[],
   threatenedCountsByHabitat:[],
   threatenedCountsByCountry:[],
    allSpeciesCountsByCountry:[]
};


export const reducer = (state = initialState, action) => {
    switch(action.type){
        // case GET_THREATENED_COUNTS_START:
        //     return {
        //         ...state,
        //     }
        case GET_THREATENED_COUNTS_SUCCESS:
            return {
                ...state,
                allCountsByClass: action.payload.data.allSpeciesCounts,
                threatendCountsByClass: action.payload.data.threatenedCounts
            }
        // case GET_THREATENED_COUNTS_FAILED:
        //     return {
        //         ...state,
        //     }
        // case GET_THREATENED_COUNTS_BY_HABITAT_START:
        //     return {
        //         ...state,
        //     }
        case GET_THREATENED_COUNTS_BY_HABITAT_SUCCESS:
            return {
                ...state,
                threatenedCountsByHabitat: action.payload
            }
        // case GET_THREATENED_COUNTS_BY_HABITAT_FAILED:
        //     return {
        //         ...state,
        //     }
        // case GET_THREATENED_COUNTS_BY_COUNTRY_START:
        //     return {
        //         ...state,
        //     }
        case GET_THREATENED_COUNTS_BY_COUNTRY_SUCCESS:
            return {
                ...state,
                threatenedCountsByCountry: action.payload
            }
        // case GET_THREATENED_COUNTS_BY_COUNTRY_FAILED:
        //     return {
        //         ...state,
        //     }
        case GET_ALL_SPECIES_COUNTS_BY_COUNTRY:
            return {
                ...state,
                allSpeciesCountsByCountry: action.payload
            }
        default:
            return state;
    }
}

