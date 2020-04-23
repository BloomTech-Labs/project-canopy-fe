import { combineReducers } from 'redux';
import { chartReducer } from './chart_reducer.js';
import { tableReducer } from './table_reducer.js';
import { speciesReducer } from './species_reducer.js';
import { filterReducer } from './filter_reducer.js';
import { initialReducer } from './initial_state.js';

export default combineReducers({
    initialReducer,
    filterReducer,
    chartReducer,
    tableReducer,
    speciesReducer
})