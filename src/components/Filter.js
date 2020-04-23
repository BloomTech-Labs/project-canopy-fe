import React, {useState, useContext} from 'react';
import { Menu, Button } from 'antd';
import styled from 'styled-components';

import { connect } from 'react-redux';
import { setFilterByCountry, setFilterByAllCRB } from '../actions/filter_actions.js'
import { allHotspots, hotspotsByCountry, setThreatsByAll, setThreatsByCountry } from '../actions/table_action.js';

function Filter(props){ 
  const [country, setCountry] = useState(`All`);

  const {
    countries,
    allCRB,
    setFilterByCountry, 
    setFilterByAllCRB,
    allHotspots, 
    hotspotsByCountry, 
    setThreatsByAll,
    setThreatsByCountry
  } = props;


  function applyFilter(e){
    if(e === 'All'){
      setFilterByAllCRB(allCRB);
      allHotspots();
      setThreatsByAll();
    }
    else{
      setFilterByCountry(countries, e);
      hotspotsByCountry(e);
      setThreatsByCountry(e)
    }
    props.toggleCollapsed()
  };

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
            <Menu.Item key="5" onClick={() => setCountry('Equatorial Guinea')}>Equitorial Guinea</Menu.Item>
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
};

const mapStateToProps = (state) => {
  return {
      countries: state.initialReducer.countries,
      habitats: state.initialReducer.habitats,
      allCRB: state.initialReducer.allCRB,
  }
}

export default connect(mapStateToProps, { 
  setFilterByCountry, 
  setFilterByAllCRB,
  allHotspots, 
  hotspotsByCountry, 
  setThreatsByAll,
  setThreatsByCountry })(Filter);

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