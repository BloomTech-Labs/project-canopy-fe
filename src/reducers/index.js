import { combineReducers } from 'redux';
import { chartReducer } from './chart_reducer.js';
import { tableReducer } from './table_reducer.js';
import { threatReducer } from './threats_reducer';
import { speciesReducer } from './species_reducer';

export default combineReducers({
    chartReducer,
    tableReducer,
    threatReducer,
    speciesReducer
})