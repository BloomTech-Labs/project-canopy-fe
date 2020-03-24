import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import Map from './mapComponents/map.js';
import { getData } from '../actions/mapActions.js';

const Dashboard = (props) => {
    const { dataPoints } = props;
    useEffect(() => {
        props.getData();
    }, [])
    return(
        <>
        {dataPoints.length > 0 ?
        <Map dataPoints={dataPoints}/>
        :
        <h1>Please wait, data is loading...</h1>
        }
        </>
    )
};

const mapStateToProps = (state) => {
    return {
        dataPoints: state.dataPoints
    }
};

export default connect(mapStateToProps, {getData})(Dashboard);