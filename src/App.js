import React from 'react';
import 'antd/dist/antd.css';
import { Route, Switch } from 'react-router-dom';
import { Layout, Row, Col } from 'antd';
import styled from 'styled-components';

<<<<<<< HEAD
import { Dashboard } from './components/Dashboard.js';
import { Nav } from './components/Nav';
=======
import {Dashboard} from './components/dashboard.js';
import {Nav} from './components/Nav'

>>>>>>> 35cf9d079bde62cdabd777a57d4fa36502952d90

function App() {
  return (
    <Layout>
      <Nav />
      <Layout style={{ backgroundColor: '#F0F0F0', height: '100vh' }}>
        <Dashboard />
      </Layout>
    </Layout>
  );
}

export default App;
