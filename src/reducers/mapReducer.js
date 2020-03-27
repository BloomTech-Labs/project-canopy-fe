import { GET_DATA,
    UNIQUE_BINOMIAL, 
    FILTER_POINTS} from '../actions/mapActions.js';

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
    searchBinomial: [],
    filteredPoints: {
        "type": "FeatureCollection",
        "crs": {
            "type": "name",
            "properties": {
                "name": "filteredPoints"
            }
        },
        "features": []
    }
};

export const mapReducer = (state = initialState, action) => {
    switch (action.type){
        case GET_DATA:
            return {
                dataPoints: {
                    ...state.dataPoints, 
                    features: action.payload
                },
                searchBinomial: state.searchBinomial,
                filteredPoints: {
                    ...state.filteredPoints
                }
            }
        case UNIQUE_BINOMIAL:
            return {
                dataPoints: {
                    ...state.dataPoints
                },
                searchBinomial: action.payload,
                filteredPoints: {
                    ...state.filteredPoints
                }
            }
        case FILTER_POINTS:
            return {
                dataPoints: {
                    ...state.dataPoints
                },
                searchBinomial: state.searchBinomial,
                filteredPoints: {
                    ...state.filteredPoints,
                    features: action.payload
                }
            }
        default:
            return state;
    }
};