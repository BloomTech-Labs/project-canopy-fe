import React, { useState, useRef } from 'react';
import ReactMapGL, { Source, Layer } from 'react-map-gl';
import { connect } from 'react-redux';
import { congoPoints, 
    clusterCountLayer, 
    clusterLayer } from './mapLayers/congoPointLayer.js';
import { heatmapLayer,
speciesPoints } from './mapLayers/congoHeatMapLayer.js'


const Map = (props) => {
    const { dataPoints } = props;
    // Sets the starting position of the mapview and controls state to allow for scrolling and zooming in addition to how much of the screen the map takes up
    const [ viewport, setViewport ] = useState({
        longitude: 17.8277,
        latitude: 0,
        zoom: 4.5,
        width: 'calc(100vw - 450px)',
        height: '100vh',
    });

    const mapRef = useRef();
   
    return (
        <div>
            <ReactMapGL 
                {...viewport}
                mapboxApiAccessToken={process.env.REACT_APP_MAPBOX_TOKEN}
                mapStyle="mapbox://styles/mapbox/outdoors-v11"
                onViewportChange={viewport => {
                    setViewport(viewport);
                }}
            >
                {dataPoints.features.length > 0 ?
                    <Source 
                    type="geojson" 
                    data={dataPoints}
                    // cluster={true}
                    // clusterMaxZoom={14}
                    // clusterRadius={50}
                    ref={mapRef}
                    >
                        {/* <Layer {...clusterLayer} />
                        <Layer {...clusterCountLayer} />
                        <Layer {...congoPoints} /> */}
                        <Layer {...heatmapLayer} />
                        <Layer {...speciesPoints} />
                    </Source>
                    : null
                }
            </ReactMapGL>
        </div>
    )
};

const mapStateToProps = (state) => {
    return {
        dataPoints: state.dataPoints
    }
};

export default connect(mapStateToProps, {})(Map);

