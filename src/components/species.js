import React from 'react'
import { Layout, Row, Col } from 'antd';
import { Heading } from './Heading';
import { SpeciesCard } from './speciesCard'

const {Header, Content} = Layout;


export const Species = () => {
    return (
        <div>
            <Header style={{backgroundColor:'#F0F0F0', height:'15vh'}}>
                
                <div style={{color:'#F0F0F0'}}>Placeholder for search bar and language select</div>
                <Heading context={'species'}/>
                    
            </Header>
            
            <Content>
                <Row>
                    <Col offset={1} span={22}>
                        <SpeciesCard />
                    </Col>
                </Row>
            </Content>

        </div>
    )
}