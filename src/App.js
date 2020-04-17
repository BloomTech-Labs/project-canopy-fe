import React, { useEffect } from 'react';
import 'antd/dist/antd.css';
import { Layout } from 'antd';
import { Dashboard } from './components/dashboard.js';
import { Nav } from './components/Nav'
import { Route, Switch } from 'react-router-dom';
import { connect } from 'react-redux';
import { allCounts } from './actions/chart_actions.js';


function App({ allCounts }) {
  useEffect(() => {
    allCounts();
  }, [])

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


export default connect(null, { allCounts })(App);
