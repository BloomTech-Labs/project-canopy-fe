import React from 'react';
import 'antd/dist/antd.css'
import { PageHeader, Row, Col } from 'antd';
import Chart from './Chart'

export const Overview = () => {
    return (
            <PageHeader
                title="Threatened species by taxonomic class"
                style={{backgroundColor:'#FEFEFE', margin:'0 50px', borderRadius:'5px'}}
            >
                <span style={{fontSize:'1em', color:'#9F9F9F'}}>Overview of the entire Congo Basin Rainforest</span>
                <Row>
                    <Col span={4} />
                    <Col span={16}>
                        <Chart />
                    </Col>
                </Row>
            </PageHeader>       
    )
}


