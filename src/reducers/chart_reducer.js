import { 
    ALL_COUNTS,
    COUNTRY_COUNTS 
} from '../actions/chart_actions.js'

const initialState = {
    threatenedCounts: [],
    allCounts: [],
    vulnerable: [],
    endangered: [],
    critically_endangered: []
};

export const chartReducer = (state = initialState, action) => {
    switch(action.type) {
        case ALL_COUNTS:
            return {
                threatenedCounts: action.payload.threatCounts,
                allCounts: action.payload.all_counts,
                vulnerable: action.payload.threatenedBreakdown.vulnerable,
                endangered: action.payload.threatenedBreakdown.endangered,
                critically_endangered: action.payload.threatenedBreakdown.critically_endangered
            }
        case COUNTRY_COUNTS:
            return {
                threatenedCounts: action.payload.threatenedCounts,
                allCounts: action.payload.allCounts,
                vulnerable: action.payload.vulnerable,
                endangered: action.payload.endangered,
                critically_endangered: action.payload.critically_endangered
            }
        default:
            return state;
    }
};