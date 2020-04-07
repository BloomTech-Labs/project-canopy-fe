import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';


const Dashboard = (props) => {
    useEffect(() => {
        
    }, [])

    return(
        <DashCont>  
           <p>Dash Content</p>
        </DashCont>
    )
};

export default Dashboard

const DashCont = styled.div`
    display:flex;
    width:84.1%;
`;