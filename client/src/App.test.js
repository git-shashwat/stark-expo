import React from 'react';
import { render } from '@testing-library/react';
import App from './routers/AppRouter';

test('renders learn react link', () => {
  const { getByText } = render(<App />);
  const linkElement = getByText(/shop/i);
  expect(linkElement).toBeInTheDocument();
});
