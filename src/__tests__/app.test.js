import React from 'react';
import { render } from '@testing-library/react';
import { MemoryRouter, Router } from 'react-router-dom';
import { createMemoryHistory } from 'history';
import App from '../App';
import { createStore } from 'redux';
import Overview from '../components/Overview';
import ReactDOM from 'react-dom'
import { AreaCard } from '../components/AreaCards';

test("first test, should always return true",()=>{
  expect(true).toBe(true)
})


// it('App.js renders without crashing', ()=>{
//   const div=document.createElement('div');
//   ReactDOM.render(<App/>, div)
// })





test("AreaCard.js renders without crashing",()=>{
  const div=document.createElement('div');
  ReactDOM.render(<AreaCard/>, div)
})

describe('front end testing', function(){
  describe('should return true', function(){
      it('should use the testing enviroment', function(){
          expect(process.env.REACT_APP_BACKENDURL).toBe("https://projectcanopybackend.herokuapp.com")
      })
    })
})