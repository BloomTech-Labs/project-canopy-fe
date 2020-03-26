import Axios from 'axios';

// We don't know what we are expecting exactly yet, so we are setting up an example to be quickly modified.
export const GET_DATA = 'GET_DATA';
export const UNIQUE_BINOMIAL ="UNIQUE_BINOMIAL";


export const getData = (unique) => dispatch => {
    Axios.get('http://localhost:5000/point_data/congo_coordinates')
    .then(res => {
        console.log(res)
            // changes the data to geoJSON formatting
            const geojsonPoints = res.data.map(data => {
                // Destructuring the data object, seperating the longitude/latitude from the rest of the properties.
                const {longitude, latitude, ...properties} = data
                return {
                    type: 'Feature',
                    // cluster:false is a value used for the useSuperCluster hook to attempt to improve performance of plotting datapoints.
                    properties: {...properties},
                    geometry: {
                        type: 'Point',
                        coordinates: [longitude, latitude]
                    }
                }
            });
            // this is the uniqueBinomial action
            unique(geojsonPoints);
            dispatch({ type: GET_DATA, payload: geojsonPoints })
        })
        .catch(err => {
            console.log('could not retrieve data', err)
        })
};

export const uniqueBinomial = (datapoints) => dispatch => {
    // grabbing the binomial names from the data
    const binomialNames = datapoints.map(species => {
        return species.properties.binomial
    })
    // filtering for unique binomial names
    const binomialsUnique = binomialNames.filter((name, i) => {
        return binomialNames.indexOf(name) == i
    });

    dispatch({ type: UNIQUE_BINOMIAL, payload: binomialsUnique })
};
