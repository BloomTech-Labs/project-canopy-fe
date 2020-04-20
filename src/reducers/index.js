import { combineReducers } from 'redux';
import { chartReducer } from './chart_reducer.js';
import { tableReducer } from './table_reducer.js';
import { reducer as original_reducer } from './original_reducer.js';

export default combineReducers({
    chartReducer,
    tableReducer,
    original_reducer
})