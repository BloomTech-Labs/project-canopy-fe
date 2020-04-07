import React from 'react';
import './App.css';
import { Route, Switch } from 'react-router-dom';
import styled from 'styled-components';

import Dashboard from './components/dashboard.js';
import {Nav} from './components/Nav'

function App() {
  return (
    <div>

      <Switch>
        <Route exact path='/'>
          <Container>
            <Nav />
            <Dashboard />
          </Container>
        </Route>
      </Switch>

    </div>
  );
}

const Container = styled.div`
    display:flex;
    width:100%;
    height:100vh;
`;


export default App;

