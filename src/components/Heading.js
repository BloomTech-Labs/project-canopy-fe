import React, {useState} from 'react';
import 'antd/dist/antd.css'
import {Menu, Button, Row, Col} from 'antd';
import styled from 'styled-components';
import Filter from './Filter'
const { SubMenu } = Menu;


export const Heading = () =>{

  const [collapsed, setCollapsed] = useState([true]);
  const [hidden, setHidden] = useState([false])
  function toggleCollapsed(){
    setHidden(!hidden)
    setCollapsed(!collapsed)
  }

  return (
    <div style={{position:'relative'}}>
      <Row>
          <Col span={20}>
              <StyledSpan>Overview of biodiversity in the Congo Basin Rainforest</StyledSpan>
          </Col>
          <Col span={4}>
              <StyledButton onClick={toggleCollapsed}><span>Filter</span></StyledButton>
          </Col>  
      </Row>
      {!hidden == true &&
        <div style={{position:'fixed', top:0, right:0, zIndex:1}}>
          <Filter collapsed={collapsed} toggleCollapsed={toggleCollapsed}/>
        </div>
      }
      
    </div>

  )
}

const StyledButton = styled(Button)`
  background-color: #45735D;
  width:100%;
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

const StyledSpan = styled.span`
  font-size:2em;
  font-weight:bold;
  color:black;
`;