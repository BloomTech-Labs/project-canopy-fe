import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';
import Table, { TableSetup } from './Table'

const Dashboard = (props) => {
    useEffect(() => {
        
    }, [])

    return(
        <DashCont>  
           <TableSetup />
        </DashCont>
    )
};

export default Dashboard

const DashCont = styled.div`
    display:flex;
    width:84.1%;
`;