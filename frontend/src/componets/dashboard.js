import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';
import { getData } from '../actions/mapActions.js';
import Map from './mapComponents/map.js';
import MapSearch from './mapComponents/mapSearch.js';

const Dashboard = (props) => {
    const { dataPoints } = props;
    useEffect(() => {
        props.getData();
    }, [])

    return(
        <DashCont>
            <MapSearch />
            <Map dataPoints={dataPoints}/>
        </DashCont>
    )
};

const mapStateToProps = (state) => {
    return {
        dataPoints: state.dataPoints
    }
};

export default connect(mapStateToProps, {getData})(Dashboard);

const DashCont = styled.div`
    display:flex;
`;