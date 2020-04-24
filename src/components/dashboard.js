import React from 'react';
import 'antd/dist/antd.css';
import {Layout, Row, Col} from 'antd';
import { connect } from 'react-redux';
import Heading from './Heading';
import {Overview} from './Overview';
import styled from 'styled-components'
import Table from './Table';
import ThreatTable from './ThreatsTable.js';
import AllSpeciesTable from './allSpeciesTable';
import ChartSmall from './ChartSmall'

const { Content} = Layout;

const Dashboard = (props) => {
    return(
        <div>
   
            <Heading context={'biodiversity'}/>

               
            <Content>
                
                <Overview title={props.title}/>
                
                <Row style={{backgroundColor:'#FEFEFE', margin:'2vh 50px', borderRadius:'5px'}}>
                    <SmallChartComponent TitleContext={'Threat Levels by taxonomic class'} title={props.title}/>
                    <Col span={1} style={{backgroundColor:'#F0F0F0'}}/>
                    <SmallChartComponent TitleContext={'Threatened vs Protected Species'} title={props.title}/>
                </Row>
                <Row style={{backgroundColor:'#FEFEFE', margin:'2vh 50px', borderRadius:'5px', alignContent:'center'}}>
                   <Table /> 
                </Row>
                <Row style={{backgroundColor:'#FEFEFE', margin:'2vh 50px', borderRadius:'5px', alignContent:'center'}}>
                   <ThreatTable /> 
                </Row>
                <Row style={{backgroundColor:'#FEFEFE', margin:'2vh 50px', borderRadius:'5px', alignContent:'center'}}>
                   <AllSpeciesTable /> 
                </Row>
            </Content>  
        </div>
    )
};

const mapStateToProps = (state) => {
    return {
      title: state.filterReducer.filterTitle
    }
  }

export default connect(mapStateToProps, {})(Dashboard)

const ChartTitle = styled.h2`
    margin:0;
    font-size:1.3em;
`
const ChartSubTitle = styled.span`
    color:#9F9F9F;
`

const SmallChartComponent = props => {
    return (
        <Col span={11} style={{margin:'0 auto'}}>
            <div style={{padding:'2%'}}>
                <ChartTitle>{`${props.TitleContext}`}</ChartTitle>
                <ChartSubTitle>Overview of {`${props.title}`}</ChartSubTitle>
                <ChartSmall />
            </div>
        </Col>
    )
}
