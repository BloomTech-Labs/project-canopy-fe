import React from 'react';
import ReactDOM from 'react-dom';

import './index.css';
import App from './App';

import { applyMiddleware, createStore, compose } from 'redux';
import thunk from "redux-thunk";
import logger from "redux-logger";
import { BrowserRouter } from 'react-router-dom';
import rootReducer from './reducers'
import { Provider } from 'react-redux';


const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(rootReducer, composeEnhancers(applyMiddleware(thunk, logger)));

ReactDOM.render(
    <BrowserRouter>
     <Provider store={store}>
        <App />
      </Provider>
    </BrowserRouter>,
  document.getElementById('root')
);




