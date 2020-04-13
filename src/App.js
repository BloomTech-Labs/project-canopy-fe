import React from 'react';
import 'antd/dist/antd.css';
import { Layout } from 'antd';
import Table from './components/Table';
import {Dashboard} from './components/dashboard.js';
import {Nav} from './components/Nav'
import { Route, Switch } from 'react-router-dom';


import { Dashboard } from './components/dashboard.js';
import { Nav } from './components/Nav';

function App() {
  return (
    <Layout>
      <Nav />
      <Layout style={{ backgroundColor: '#F0F0F0', height: '100vh' }}>
        <Switch>
          <Route>
            <Dashboard />
          </Route>
        </Switch>
      </Layout>
    </Layout>
  );
}

export default App;
