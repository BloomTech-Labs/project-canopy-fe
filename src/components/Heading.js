import React, {useState} from 'react';
import 'antd/dist/antd.css'
import { Layout, Button, Row, Col, Input} from 'antd';
import styled from 'styled-components';
import Filter from './Filter'

const { Header } = Layout;
const { Search } = Input;

export const Heading = props =>{


  const [collapsed, setCollapsed] = useState([true]);
  const [hidden, setHidden] = useState([false])
  function toggleCollapsed(){
    setHidden(!hidden)
    setCollapsed(!collapsed)
  }

  return (
    <Header style={{backgroundColor:'#F0F0F0', height:'15vh'}}>

      <div style={{position:'relative'}}>
        <Row>
          <Col span={20}>
            <Search
              placeholder='Search...'
              onChange={value => console.log(value)} // Placeholder for search value functionality
              onSearch={value => console.log(value)} // Placeholder for search functionality, activates on either 'Enter' or clicking icon
              style={{ width:'50%', borderRadius:'5px', borderColor:'#F0F0F0' }}
            />
          </Col>
          <Col span={4}>
                <StyledButton onClick={toggleCollapsed}><span>Filter</span></StyledButton>
            </Col>  
        </Row>
        <Row>
            <Col span={22}>
                <StyledSpan>Overview of {`${props.context}`} in the Congo Basin Rainforest</StyledSpan>
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
}

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