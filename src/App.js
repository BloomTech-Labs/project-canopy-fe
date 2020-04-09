import React from 'react';
import 'antd/dist/antd.css';
import { Route, Switch } from 'react-router-dom';
import { Layout, Row, Col } from 'antd';
import styled from 'styled-components';

import { Dashboard } from './components/Dashboard.js';
import { Nav } from './components/Nav';

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
