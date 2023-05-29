


import React from 'react';
import { render } from '@testing-library/react';
import About from '../pages/About';

test('renders the About component', () => {
  render(<About />);
});

test('renders the About component', () => {
  render(<About />);
 
});

test('renders specific elements', () => {
  render(<About />);
  const heading = screen.getByText('Our story'); 

});

test('renders specific images', () => {
  render(<About />);
  const heroImage = screen.getByAltText('Hero Image'); 
  const teamImage = screen.getByAltText('Team Image'); 
  expect(heroImage).toBeInTheDocument();
  expect(teamImage).toBeInTheDocument();
});