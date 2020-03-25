import { combineReducers } from "redux";
import { mapReducer } from '../reducers/mapReducer.js';

// only one reducer currently, will switch to using/exporting combineReducers once we have more than one set up.
export default mapReducer;


// export default combineReducers({
//     mapReducer,

// }