import React from 'react';
import { render } from '@testing-library/react';
import { MemoryRouter, Router } from 'react-router-dom';
import { createMemoryHistory } from 'history';
import App from '../App';
import { createStore } from 'redux';
import Overview from '../components/Overview';
import { AreaCard } from '../components/AreaCards';


test("first test, should always return true",()=>{
  expect(true).toBe(true)
})

test("second test, should always return true",()=>{
  expect(true).toBe(true)
})

test("next test, should always return true",()=>{
  expect(true).toBe(true)
})

// test("renders App.js", ()=>{
//   const {getByText} = render(<App/>);
//   // getByText(/hello world/i)
// })

test("renders Overview",()=>{
  const {getAllByText} =render(<AreaCard/>)
  getAllByText(/undefined threatened species/i)
})

describe('front end testing', function(){
  describe('should return true', function(){
      it('should use the testing enviroment', function(){
          expect(process.env.REACT_APP_BACKENDURL).toBe("https://projectcanopybackend.herokuapp.com")
      })
    })
})

