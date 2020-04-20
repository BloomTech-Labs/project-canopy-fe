import { 
    ALL_TABLE_DATA,
    COUNTRY_TABLE_DATA
} from '../actions/table_action.js';

const initialState = {
    tableData: []
};

export const tableReducer = (state = initialState, action) => {
    switch(action.type) {
        case ALL_TABLE_DATA:
            return {
                tableData: action.payload,
            }
        case COUNTRY_TABLE_DATA:
            return {
                tableData: action.payload
            }
        default:
            return state;
    }
}