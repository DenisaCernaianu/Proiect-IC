import React from 'react';
import { render, screen, fireEvent, waitFor } from '@testing-library/react-hooks'; // Update the import statement
import { MemoryRouter, Router } from 'react-router-dom';
import Login from './Login.jsx';

// Rest of the code...

describe('Login component', () => {
  test('renders login form', () => {
    render(<Login />, { wrapper: MemoryRouter });

    expect(screen.getByTestId('email-input')).toBeInTheDocument();
    expect(screen.getByTestId('password-input')).toBeInTheDocument();
    expect(screen.getByText('Login')).toBeInTheDocument();
    expect(screen.getByText("Don't have an account?")).toBeInTheDocument();
  });

});
