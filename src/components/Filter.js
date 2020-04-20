import React, {useState} from 'react';
import { Menu, Button } from 'antd';
import styled from 'styled-components';

import { connect } from 'react-redux';
import { allCounts, countryCounts } from '../actions/chart_actions.js';
import { getAllTableData, countryTableData } from '../actions/table_action.js';

function Filter(props){ 

  const {
    allCounts, 
    countryCounts,
    getAllTableData,
    countryTableData
  } = props;

  const [country, setCountry] = useState(`All`);

  function applyFilter(e){
    props.toggleCollapsed()
    if(e == 'All'){
      allCounts(); 
      getAllTableData();
    }
    else{
      countryCounts(e)
      countryTableData(e)
    }
    console.log(e)
  }  

  return (
        <Menu
          mode="inline"
          inlineCollapsed={props.collapsed}
          selectable='true'
          multiple='true'
          style={{width:'20vw', height:'100vh'}}
        >
          <Menu.ItemGroup
            key="sub1"
            title={<h1>Country of Occurence</h1>}
          >
            <Menu.Item key="1" onClick={() => setCountry('Cameroon')}>Cameroon</Menu.Item>
            <Menu.Item key="2" onClick={() => setCountry('Gabon')}>Gabon</Menu.Item>
            <Menu.Item key="3" onClick={() => setCountry('Congo')}>Republic of Congo</Menu.Item>
            <Menu.Item key="4" onClick={() => setCountry('Congo, The Democratic Republic of the')}>Democratic Republic of Congo (DRC)</Menu.Item>
            <Menu.Item key="5" onClick={() => setCountry('Equitorial Guinea')}>Equitorial Guinea</Menu.Item>
            <Menu.Item key="6" onClick={() => setCountry('Central African Republic')}>Central African Republic (CAR)</Menu.Item>
            <Menu.Item key="7" onClick={() => setCountry('All')}>All Countries</Menu.Item>
          </Menu.ItemGroup>
          <StyledButton onClick={() =>
              applyFilter(country)
          }>
              <span>Apply Filter</span>
          </StyledButton>
        </Menu>
    );
}

export default connect(null, { allCounts, countryCounts, getAllTableData, countryTableData })(Filter);

const StyledButton = styled(Button)`
  background-color: #45735D;
  width:50%;
  border-radius:5px;
  padding:0;
  margin:0 auto;
  span {
    padding:0;
    color:#FEFEFE;
    font-weight: bold;
    font-size: 1.5em;
    vertical-align:middle;
  }
  
`;