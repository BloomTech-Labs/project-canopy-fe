import React from 'react';
import 'antd/dist/antd.css'
import { PageHeader, Statistic, Row, Col } from 'antd';
import popTrend1 from './assets/popTrend1.svg';
import popTrend2 from './assets/popTrend2.svg';
import styled from 'styled-components';

const flip = {
    display:'flex',
    flexDirection:'column-reverse',
    textAlign:'center'
}

export const Overview = () => {
    return (
            <PageHeader
                subTitle="Overview" 
                style={{backgroundColor:'#FEFEFE', margin:'0 50px', borderRadius:'5px'}}
            >
                <Row >
                    <Col span={4}>
                        <Statistic title="Countries" value={6} style={flip} valueStyle={{fontSize:'2rem', fontWeight:'bold'}} />
                    </Col>
                    <Col span={4}>
                        <Statistic title="Species" value={6622} style={flip} valueStyle={{fontSize:'2rem', fontWeight:'bold'}} />
                    </Col>
                    <Col span={4}>
                        <Statistic title="Threatened Species" value={1104} style={flip} valueStyle={{fontSize:'2rem', fontWeight:'bold'}} />
                    </Col>
                    <Col span={4}>
                        <Statistic title="Habitats" value={15} style={flip} valueStyle={{fontSize:'2rem', color:'black', fontWeight:'bold'}} />
                    </Col>
                    <Col span={4}>
                        <Statistic title="Threats" value={2586} style={flip} valueStyle={{fontSize:'2rem', fontWeight:'bold'}} />
                    </Col>
                    <Col span={4}>
                        <Statistic title={<img src={popTrend1} />}  value={'Population Trend'} style={{textAlign:'center', marginTop:'4px'}} valueStyle={{fontSize:'1em', color:'rgba(0, 0, 0, 0.45)', marginBottom:'8px'}}/>  
                    </Col>
                </Row>
            </PageHeader>       
    )
}
