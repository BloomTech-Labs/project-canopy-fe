import { combineReducers } from 'redux';
import { chartReducer } from './chart_reducer.js';
import { tableReducer } from './table_reducer.js';

export default combineReducers({
    chartReducer,
    tableReducer,
})