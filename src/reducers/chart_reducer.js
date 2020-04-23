import { 
    CHART_COUNTS,
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
        case CHART_COUNTS:
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