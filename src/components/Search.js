import React from 'react';
import 'antd/dist/antd.css'
import {Input, Button, Row, Col} from 'antd';
import styled from 'styled-components';

const {Search} = Input;

export const SearchBar = () =>{
    return (
        <Row>
            <Col span={10}>
                <Search
                    placeholder="input search text"
                    onSearch={value => console.log(value)}
                    onChange={placeholder => console.log(placeholder)}
                    style={{borderRadius:'6px'}}
                /> 
            </Col>
            <Col span={4} offset={10}>
                <StyledButton><span>Filter</span></StyledButton>
            </Col>  
        </Row>

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