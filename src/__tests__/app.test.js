import React from 'react';
import { render } from '@testing-library/react';
import { MemoryRouter, Router } from 'react-router-dom';
import { createMemoryHistory } from 'history';
import App from '../App';
import { createStore } from 'redux';

// test('renders learn react link', () => {
//   const { getByText } = render(<App />, { wrapper: MemoryRouter });
//   const linkElement = getByText(/Project Canopy/i);
//   expect(linkElement).toBeInTheDocument();
// });


// function renderWithRedux(component, {initialState, store = createStore(reducer, initialState)}
// ) 
// {}

test('renders without crashing', () => {
    const history = createMemoryHistory()
    render(
      <Router history={history}>
        <App />
      </Router>
    )
  
  })