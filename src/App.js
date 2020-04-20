import React, { useEffect } from 'react';
import 'antd/dist/antd.css';
import { Layout } from 'antd';
import {Dashboard} from './components/dashboard.js';
import {Nav} from './components/Nav'
import { Route, Switch, Router } from 'react-router-dom';


//Testing dynamic ENV URL

function App() {
  console.log(process.env.REACT_APP_BACKENDURL)
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
