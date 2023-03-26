import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

test('renders dosage text', () => {
  render(<App />);
  const linkElement = screen.getByText(/dosage/i);
  expect(linkElement).toBeInTheDocument();
});
