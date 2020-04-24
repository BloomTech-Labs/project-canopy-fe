import React, {useState} from 'react';
import { connect } from 'react-redux';
import 'antd/dist/antd.css'
import { Layout, Button, Row, Col, Input} from 'antd';
import styled from 'styled-components';
import Filter from './Filter'
import Fuse from 'fuse.js';

const { Header } = Layout;
const { Search } = Input;

const options = {
  shouldSort: true,
  includeScore: true,
  threshold: 0.6,
  location: 0,
  distance: 100,
  minMatchCharLength: 4,
  keys: [
    "className",
    "scientificName",
    "commonName",
    "populationTrend",
    "redlistCategory"
  ]
};

const Heading = props =>{
  const [collapsed, setCollapsed] = useState([true]);
  const [hidden, setHidden] = useState([false])
  function toggleCollapsed(){
    setHidden(!hidden)
    setCollapsed(!collapsed)
  };

  let fuse = [];

  if(props.context === 'species'){
    fuse = new Fuse(props.speciesList, options)
  };

  return (
    <Header style={{backgroundColor:'#F0F0F0', height:'15vh'}}>

      <div style={{position:'relative'}}>
        <Row>
          <Col span={20}>
           { props.context === 'species' &&(
            <Search
              placeholder='Search...'
              onSearch={value => { props.setResults(fuse.search(value)); }}
              style={{ width:'50%', borderRadius:'5px', borderColor:'#F0F0F0' }}
            /> )}
          </Col>
          <Col span={4}>
                <StyledButton onClick={toggleCollapsed}><span>Filter</span></StyledButton>
            </Col>  
        </Row>
        <Row>
            <Col span={22}>
                <StyledSpan>Overview of {`${props.context}`} in {props.title}</StyledSpan>
            </Col>
        </Row>
        {!hidden === true &&
          <div style={{position:'fixed', top:0, right:0, zIndex:1}}>
            <Filter collapsed={collapsed} toggleCollapsed={toggleCollapsed}/>
          </div>
        }
        
      </div>
    </Header>
  )
};

const mapStateToProps = (state) => {
  return {
    title: state.filterReducer.filterTitle
  }
}

export default connect(mapStateToProps,{})(Heading)

const StyledButton = styled(Button)`
  background-color: #324F7B;
  width:100%;
  border-radius:5px;
  padding:0;
  margin:0 auto;
  span {
    padding:0;
    color:#FEFEFE;
    font-style: normal;
    font-weight: bold;
    font-size: 1.5em;
    vertical-align:middle;
  }
  
`;

const StyledSpan = styled.span`
  font-size:2em;
  font-style: normal;
  font-weight:bold;
  color:black;
`;