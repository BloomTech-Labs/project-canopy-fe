import React from 'react';
import 'antd/dist/antd.css'
import {Button, Row, Col} from 'antd';
import styled from 'styled-components';


export const Heading = () =>{
    return (
        <Row>
            <Col span={20}>
                <StyledSpan>Overview of biodiversity in the Congo Basin Rainforest</StyledSpan>
            </Col>
            <Col span={4}>
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

const StyledSpan = styled.span`
  font-size:2em;
  font-weight:bold;
  color:black;
`;