import React from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';

import { filterPoints } from '../../actions/mapActions.js';

const searchResults = ({results, dataPoints, filterPoints}) => {

    
    return (
        <div>
            <h1>Search Results!</h1>
            {results.map((result, i) => {
                return (
                <Result key={i} onClick={() => {
                    filterPoints(result.item, dataPoints)
                }}>
                    <h3>
                        {result.item}
                    </h3>
                </Result>
                )
            })}
        </div>
    )
};

const mapStateToProps = (state) => {
    return {
        dataPoints: state.dataPoints
    }
};

export default connect(mapStateToProps, { filterPoints })(searchResults);

const Result = styled.div`
    height: 75px;
    &:hover {
        background-color: lightgrey;
    }
`;