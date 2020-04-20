import React, {useState} from 'react';
import { Menu, Button } from 'antd';
import styled from 'styled-components';

export default function Filter(props){ 
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