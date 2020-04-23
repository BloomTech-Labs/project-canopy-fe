import { 
    SET_FILTER,
} from '../actions/filter_actions.js';

const initialState = {
    filterBy: {},
};

export const filterReducer = (state = initialState, action) => {
    switch(action.type) {
        case SET_FILTER:
            return {
                filterBy: action.payload         
            }

        default:
            return state;
    }
};