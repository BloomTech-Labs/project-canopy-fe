import React from 'react';
import styled from 'styled-components';

const ThreatBar = ({redlistCategory}) => {
    let threatColor = '';

    if(redlistCategory === 'Critically Endangered'){
        threatColor = '#EE404E'
    } else if (redlistCategory === 'Endangered'){
        threatColor = '#FEA482'
    } else if (redlistCategory === 'Vulnerable'){
        threatColor = '#FED0A3'
    }

    return(
        <Bar style={{backgroundColor:threatColor}}/>
    )
};

export default ThreatBar;

const Bar = styled.div`
    width:100%; 
    height:8px; 
    border-radius:0 0 4px 4px;
`

