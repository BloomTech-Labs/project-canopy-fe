import { 
    GET_HOTSPOT_TABLE_DATA,
    GET_THREATS_TABLE_DATA
} from '../actions/table_action.js';

const initialState = {
    hotspot_tableData: [],
    threats_tableData: [],

};

export const tableReducer = (state = initialState, action) => {
    switch(action.type) {
        case GET_HOTSPOT_TABLE_DATA:
            return {
                ...state,
                hotspot_tableData: action.payload,
            }
        case GET_THREATS_TABLE_DATA:
            return {
                ...state,
                threats_tableData: action.payload
            }
        default:
            return state;
    }
}