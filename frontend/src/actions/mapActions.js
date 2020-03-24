import Axios from 'axios';


// setting up blind action boilerplate
// We don't know what we are expecting exactly yet, so we are setting up an example to be quickly modified.
export const GET_DATA = 'GET_DATA';

export const getData = () => dispatch => {
    Axios.get('http://localhost:5000/point_data')
        .then(res => {
            console.log(res)
            // changes the data to geoJSON formatting
            const geojsonPoints = res.data.map(data => {
                // Destructuring the data object, seperating the longitude/latitude from the rest of the properties.
                const {longitude, latitude, ...properties} = data
                return {
                    type: 'Feature',
                    // cluster:false is a value used for the useSuperCluster hook to attempt to improve performance of plotting datapoints.
                    properties: {...properties, cluster: false},
                    geometry: {
                        type: 'Point',
                        coordinates: [longitude, latitude]
                    }
                }
            })
            // the .slice is to limit the data to the first 100 items of the array.
            dispatch({ type: GET_DATA, payload: geojsonPoints.slice(0, 100)})
        })
        .catch(err => {
            console.log('could not retrieve data', err)
        })
};