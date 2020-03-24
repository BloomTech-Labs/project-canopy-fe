import React, { useState, useRef } from 'react';
import ReactMapGL, { Marker } from 'react-map-gl';
import { connect } from 'react-redux';
import useSupercluster from 'react-supercluster';


const Map = (props) => {
    const { dataPoints } = props
    const [ viewport, setViewport ] = useState({
        longitude: 17.8277,
        latitude: 0,
        zoom: 4.5,
        width: '100vw',
        height: '100vh',
    });

    const mapRef = useRef();

    const bounds = mapRef.current
    ? mapRef.current
        .getMap()
        .getBounds()
        .toArray()
        .flat()
    : null;
    console.log(bounds)
    // const { clusters, supercluster } = useSupercluster({
    //     points: dataPoints,
    //     zoom: viewport.zoom,
    //     bounds,
    //     // options: { radius: 75, maxzoom: 20}
    // });

    return (
        <div>
            <ReactMapGL 
                {...viewport}
                mapboxApiAccessToken={process.env.REACT_APP_MAPBOX_TOKEN}
                mapStyle="mapbox://styles/mapbox/outdoors-v11"
                onViewportChange={viewport => {
                    setViewport(viewport);
                }}
                ref={mapRef}
            >
                {/* {clusters.map((clust, i) => {
                    const [longitude, latitude] = clust.geometry.coordinates;
                    const { cluster, point_count } = clust.properties;
                    if(cluster){
                        return(
                            <Marker
                            key={cluster.id}
                            longitude={longitude}
                            latitude={latitude}
                            >
                                <div 
                                    classname='cluster-marker'
                                    // style={{
                                    //     width: `${10 + (point_count / dataPoints.length) * 20}px`,
                                    //     height: `${10 + (point_count / dataPoints.length) * 20}px`
                                    //   }}
                                >
                                    {point_count}
                                </div>
                            </Marker>
                        )
                    } else {
                        return (
                            <Marker 
                                key={i}
                                longitude={longitude}
                                latitude={latitude}
                            >
                                <div>DATA</div>
                            </Marker>
                        )
                    }
                })} */}

                {/* {dataPoints.length > 0 ? (
                    dataPoints.map((point, i) => 
                        (
                        <Marker 
                            key={i}
                            longitude={point.geometry.coordinates[0]}
                            latitude={point.geometry.coordinates[1]}
                        >
                            <div>DATA</div>
                        </Marker>
                    ))
                ) : null } */}
            </ReactMapGL>
        </div>
    )
};

// const mapStateToProps = (state) => {
//     return {
//         dataPoints: state.dataPoints
//     }
// };

// export default connect(mapStateToProps, {})(Map);
export default Map;
