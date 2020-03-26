import { GET_DATA,
    UNIQUE_BINOMIAL } from '../actions/mapActions.js';

// initialState set up in geoJSON boilerplate format, data in geojson format should be pushed into the "features" array
const initialState = {
    dataPoints: {
        "type": "FeatureCollection",
        "crs": {
            "type": "name",
            "properties": {
                "name": "dataPoints"
            }
        },
        "features": []
    },
    searchBinomial: []
};

export const mapReducer = (state = initialState, action) => {
    switch (action.type){
        case GET_DATA:
            return {
                dataPoints: {
                    ...state.dataPoints, 
                    features:action.payload
                },
                searchBinomial: state.searchBinomial
            }
        case UNIQUE_BINOMIAL:
            return {
                dataPoints:{
                    ...state.dataPoints
                },
                searchBinomial: action.payload
            }
        default:
            return state;
    }
};