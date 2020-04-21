import React from 'react';
import 'antd/dist/antd.css';
import {Layout, Row, Col} from 'antd';
import {Heading} from './Heading';
import {Overview} from './Overview'
import Table from './Table'
import ThreatTable from './ThreatsTable.js';

import ChartSmall from './ChartSmall'
const {Header, Content} = Layout;

export const Dashboard = () => {
    return(
        <div>
            <Header style={{backgroundColor:'#F0F0F0', height:'15vh'}}>
                
                <div style={{color:'#F0F0F0'}}>Placeholder for search bar and language select</div>
                <Heading />
                    
            </Header>
               
            <Content>
                
                <Overview />
                
                <Row style={{backgroundColor:'#FEFEFE', margin:'2vh 50px', borderRadius:'5px'}}>
                    <Col span={11} style={{margin:'0 auto'}}>
                        <div style={{padding:'2%'}}>
                            <h2 style={{margin:'0', fontSize:'1.3em'}}>Threat Levels by taxonomic class</h2>
                            <span style={{color:'#9F9F9F'}}>Overview of the entire Congo Basin Rainforest</span>
                            <ChartSmall />
                        </div>
                    </Col>
                    <Col span={1} style={{backgroundColor:'#F0F0F0'}}/>
                    <Col span={11} style={{margin:'0 auto'}}>
                        <div style={{padding:'2%'}}>
                            <h2 style={{margin:'0', fontSize:'1.3em'}}>Threatened vs Protected Species</h2>
                            <span style={{color:'#9F9F9F'}}>Overview of the entire Congo Basin Rainforest</span>
                            <ChartSmall />
                        </div>
                    </Col>
                </Row>
                <Row style={{backgroundColor:'#FEFEFE', margin:'2vh 50px', borderRadius:'5px', alignContent:'center'}}>
                   <Table /> 
                </Row>
                <Row style={{backgroundColor:'#FEFEFE', margin:'2vh 50px', borderRadius:'5px', alignContent:'center'}}>
                   <ThreatTable /> 
                </Row>
            </Content>  
        </div>
    )
};

