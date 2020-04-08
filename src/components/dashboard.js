import React, { useEffect } from 'react';
import 'antd/dist/antd.css';
import {Layout} from 'antd';
import styled from 'styled-components';
import {SearchBar} from './Search'
const {Header, Footer, Content} = Layout;

const Dashboard = () => {
    return(
        <div>
            <Header style={{backgroundColor:'#F0F0F0'}}> 
                <SearchBar />
            </Header>

            <Content>
                <p>test</p>
            </Content>  
        </div>
    )
};

export default Dashboard
