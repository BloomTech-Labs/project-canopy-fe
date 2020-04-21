import React, {useEffect} from 'react';
import 'antd/dist/antd.css';
import { Layout } from 'antd';
import { Nav } from './components/Nav.js'
import { Route, Switch } from 'react-router-dom';
import { connect } from 'react-redux';
import { allCounts } from './actions/chart_actions.js';
import { getAllTableData } from './actions/table_action';

import { Dashboard } from './components/dashboard.js';
import { Species } from './components/species';
 

function App({ allCounts, getAllTableData }) {
  useEffect(() => {
    allCounts();
    getAllTableData();
  }, [])

  return (
    <Layout style={{zIndex:2}}>
      <Nav />
      <Layout style={{ backgroundColor: '#F0F0F0', height: '100vh' }}>
        <Switch>

          <Route exact path='/'>
            <Dashboard />
          </Route>
          <Route path='/species'>
            <Species />
          </Route>
          
        </Switch>
      </Layout>
    </Layout>
  );
}


export default connect(null, { allCounts, getAllTableData })(App);
