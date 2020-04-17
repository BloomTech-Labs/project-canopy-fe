import React from 'react';
import { render } from '@testing-library/react';
import { MemoryRouter, Router } from 'react-router-dom';
import { createMemoryHistory } from 'history';
import App from '../App';

// test('renders learn react link', () => {
//   const { getByText } = render(<App />, { wrapper: MemoryRouter });
//   const linkElement = getByText(/Project Canopy/i);
//   expect(linkElement).toBeInTheDocument();
// });

test('full app rendering/navigating', () => {
    const history = createMemoryHistory()
    const { getAllByText } = render(
      <Router history={history}>
        <App />
      </Router>
    )
  
  })