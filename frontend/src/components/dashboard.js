import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';
import { getData, uniqueBinomial } from '../actions/mapActions.js';
import Map from './mapComponents/map.js';
import MapSearch from './mapComponents/mapSearch.js';

const Dashboard = (props) => {
    const { getData, uniqueBinomial } = props;
    useEffect(() => {
        // only way that we could get the uniqueBinomial action to fire from the getData action was by passing it in as a parameter.
        getData(uniqueBinomial);
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