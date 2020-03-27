import React from 'react';
import './App.css';
import { Route, Switch } from 'react-router-dom';

import Dashboard from './components/dashboard.js';

function App() {
  return (
    <div>

      <Switch>
        <Route exact path='/'>
          <Dashboard />
        </Route>
      </Switch>

    </div>
  );
}

export default App;

