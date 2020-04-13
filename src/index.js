import React from 'react';
import ReactDOM from 'react-dom';

import './index.css';
import App from './App';

import { BrowserRouter as Router } from 'react-router-dom';
// import { createStore, applyMiddleware } from 'redux';
// import { Provider } from 'react-redux';
// import thunk from 'redux-thunk';
// import logger from 'redux-logger';
// import rootReducer from './reducers';

// const store = createStore(rootReducer, applyMiddleware(thunk, logger))

ReactDOM.render(
    <Router>
     
        <App />
      
    </Router>,
  document.getElementById('root')
);



