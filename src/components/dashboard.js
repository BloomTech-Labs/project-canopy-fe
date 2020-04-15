import React from 'react';
import 'antd/dist/antd.css';
import {Layout, Row, Col} from 'antd';
import {Heading} from './Heading';
import {Overview} from './Overview'
import {AreaCard} from './AreaCards';
import {dummyData} from '../dummy';
import Table from './Table'

import ChartSmall from './ChartSmall'
const {Header, Content} = Layout;

export const Dashboard = () => {
    return(
        <div>
            <Header style={{backgroundColor:'#F0F0F0', height:'15vh'}}>
                
                <div>Placeholder for search bar and language select</div>
                <Heading />
                    
            </Header>
               
            <Content>
                
                <Overview />
                
                <Row style={{backgroundColor:'#FEFEFE', margin:'2vh 50px', borderRadius:'5px', height:'30vh'}}>
                    <Col span={2} />
                    <Col span={8}>
                        <ChartSmall />
                    </Col>
                    <Col span={8} offset={2}>
                        <ChartSmall />
                    </Col>
                </Row>
                <Row style={{backgroundColor:'#FEFEFE', margin:'2vh 50px', borderRadius:'5px', alignContent:'center'}}>
                   <Table /> 
                </Row>
            </Content>  
        </div>
    )
};

