import React, { useEffect } from 'react';
import 'antd/dist/antd.css';
import {Layout, Row} from 'antd';
import styled from 'styled-components';
import {SearchBar} from './Search';
import {Overview} from './Overview'
const {Header, Footer, Content} = Layout;

export const Dashboard = () => {
    return(
        <div>
            <Header style={{backgroundColor:'#F0F0F0'}}> 
                <SearchBar />
            </Header>
        
            <Content>
                <Overview />
            </Content>  
        </div>
    )
};

