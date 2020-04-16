import React, {useState} from 'react';
import 'antd/dist/antd.css'
import {Menu, Button, Row, Col} from 'antd';
import styled from 'styled-components';
import {
  MenuUnfoldOutlined,
  MenuFoldOutlined,
} from '@ant-design/icons';

const { SubMenu } = Menu;


export const Heading = () =>{

  const [collapsed, setCollapsed] = useState([false]);
  function toggleCollapsed(){
    setCollapsed(!collapsed)
  }

  return (
    <div>
      <Row>
          <Col span={20}>
              <StyledSpan>Overview of biodiversity in the Congo Basin Rainforest</StyledSpan>
          </Col>
          <Col span={4}>
              <StyledButton onClick={toggleCollapsed}><span>Filter</span></StyledButton>
          </Col>  
      </Row>
      <Filter collapsed={collapsed} toggleCollapsed={toggleCollapsed}/>
    </div>

  )
}

function Filter(props){ 
  return (
        <Menu
          mode="inline"
          inlineCollapsed={props.collapsed}
          selectable='true'
          multiple='true'
          style={{position:'fixed', float:'right', top:0, zIndex:1 }}
        >
          <Menu.ItemGroup
            key="sub1"
            title={<h1>Country of Occurence</h1>}
          >
            <Menu.Item key="1">Cameroon</Menu.Item>
            <Menu.Item key="2">Gabon</Menu.Item>
            <Menu.Item key="3">Republic of Congo</Menu.Item>
            <Menu.Item key="4">Democratic Republic of Congo (DRC)</Menu.Item>
            <Menu.Item key="5">Equitorial Guinea</Menu.Item>
            <Menu.Item key="6">Central African Republic (CAR)</Menu.Item>
          </Menu.ItemGroup>
          <StyledButton onClick={props.toggleCollapsed}><span>Apply Filter</span></StyledButton>
        </Menu>
    );
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