import React from 'react';
import 'antd/dist/antd.css'
import { PageHeader, Row, Col } from 'antd';
import Chart from './Chart'

export const Overview = (props) => {
    return (
            <PageHeader
                title="Threatened species by taxonomic class"
                style={{backgroundColor:'#FEFEFE', margin:'0 50px', borderRadius:'5px'}}
            >
                <span style={{fontSize:'1em', color:'#9F9F9F'}}>Overview of {`${props.title}`}</span>
                <Row style={{margin:'2% 0 1% 0'}}>
                    <Col span={4} />
                    <Col span={16}>
                        <Chart />
                    </Col>
                </Row>
            </PageHeader>       
    )
}


