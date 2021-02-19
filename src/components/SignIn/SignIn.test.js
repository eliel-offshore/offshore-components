import React from 'react';
import { render, fireEvent, screen } from '@testing-library/react';
import { Default } from './SignIn.stories' 

it('renders a sign in component', () => {
    const { getByText, getByLabelText } = render(<Default />);

    getByLabelText('Email Address')
    getByLabelText('Password')
    getByText('Sign in')
});

it('should not have an error for valid email and password', () => {
    const { getByTestId, getByRole } = render(<Default />);

    const emailInput = getByTestId('email-input')
    const passwordInput = getByTestId('password-input')

    fireEvent.change(emailInput, { target: { value: 'test@web.com'}});
    fireEvent.change(passwordInput, { target: { value: '123456'}});

    expect(emailInput.value).toBe('test@web.com')
    expect(passwordInput.value).toBe('123456')

    fireEvent.click(getByRole('button', { name: /Submit/i}))

    const emailError = screen.queryByText('Not a valid email.')
    const passwordError = screen.queryByText('Password is required.')

    expect(emailError).toBe(null)
    expect(passwordError).toBe(null)
});

it('should have an error for invalid email and no password input', () => {
    const { getByText, getByTestId, getByRole } = render(<Default />);

    const emailInput = getByTestId('email-input')

    fireEvent.change(emailInput, { target: { value: 'test'}});
    expect(emailInput.value).toBe('test')

    fireEvent.click(getByRole('button', { name: /Submit/i}))
    getByText('Not a valid email.')
    getByText('Password is required.')
});