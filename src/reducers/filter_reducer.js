import { SET_FILTER } from '../actions/filter_actions.js';
import { INITIAL_SET_FILTER } from '../actions/initial_actions.js';

const initialState = {
    filterBy: {},
    filterTitle: 'the Congo Basin Rainforest'
};

export const filterReducer = (state = initialState, action) => {
    switch(action.type) {
        case SET_FILTER:
            return {
                filterBy: action.payload.data,
                filterTitle: action.payload.title
            }
        case INITIAL_SET_FILTER:
            return{
                ...state,
                filterBy: action.payload
            }
        default:
            return state;
    }
};