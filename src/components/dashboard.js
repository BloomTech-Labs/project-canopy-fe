import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';
import { getData, uniqueBinomial } from '../actions/mapActions.js';
import Map from './mapComponents/map.js';
import MapSearch from './mapComponents/mapSearch.js';

const Dashboard = (props) => {
    const { getData, uniqueBinomial } = props;
    useEffect(() => {
        // the best way to create a list of unique binomal names without it affected search persformance was to fire the uniqueBinomal action in a .then after the getData() fetches the data
        console.log('this is getData', getData)
        getData()
            .then(geojsonPoints => {
                uniqueBinomial(geojsonPoints)
            })
    }, [])

    return(
        <DashCont>
            <MapSearch />
            <Map />
        </DashCont>
    )
};

const mapStateToProps = (state) => {
    return {
        dataPoints: state.dataPoints
    }
};

export default connect(mapStateToProps, {
    getData,
    uniqueBinomial
})(Dashboard);

const DashCont = styled.div`
    display:flex;
`;