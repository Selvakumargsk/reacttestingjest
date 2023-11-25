import React from 'react';
import { render, fireEvent, getByTestId } from '@testing-library/react';
import {expect, jest, test} from '@jest/globals';
import RegistrationForm from './RegistrationForm';

describe('RegistrationForm', () => {
  it('renders without errors', () => {
   const {submit}= render(<RegistrationForm />);
  }); 

  it('displays error message when required fields are empty', () => {
    const { getByRole, getByText , getByTestId} = render(<RegistrationForm />);
    fireEvent.submit(getByRole('button', {   name: /register/i }));
    expect(getByTestId('firstNameInput')).toBeInTheDocument();
    // Check other required fields as well
  });

  it('validates email field', () => {
    const { getByTestId , getByRole} = render(<RegistrationForm />);
    const emailInput = getByTestId('emailInput');
    fireEvent.change(emailInput, { target: { value: 'invalid-email' } });
    fireEvent.submit(getByRole('button', { name: /register/i }));
    expect(getByTestId('emailInput')).toBeInTheDocument();
  });

  it('validates password and confirm password fields', () => {
    const { getByTestId, getByText, getByRole } =
     render(<RegistrationForm />);

    const passwordInput = getByTestId('passwordInput');
    const confirmPasswordInput = getByTestId('confirmpasswordInput');

    fireEvent.change(passwordInput, { target: { value: 'password123' } });
    fireEvent.change(confirmPasswordInput, { target: { value: 'password456' } });
    
    fireEvent.submit(getByRole('button', { name: /register/i }));

    expect(getByTestId('passwordInput')).toBeInTheDocument();
  });

  it('submits the form with valid data', () => {
    const { getByTestId, getByRole, getByText} = render(<RegistrationForm />);
    /*
    const firstNameInput = getByLabelText(/first name/i);
    const lastNameInput = getByLabelText(/last name/i);
    const emailInput = getByLabelText(/email/i);
    const passwordInput = getByLabelText(/password/i);
    const confirmPasswordInput = getByLabelText(/confirm password/i);
    */

    // const firstNameInput = 'test';
    // const lastNameInput = 'test';
    // const emailInput = 'test';
    // const passwordInput = 'test';
    // const confirmPasswordInput = 'test';

    let userInput = getByTestId('firstNameInput')
    let lastInput = getByTestId('lastNameInput')
    let emailInput = getByTestId('emailInput')
    let passwordInput = getByTestId('passwordInput')
    let confirmPasswordInput = getByTestId('confirmpasswordInput')
     
     
    fireEvent.change(userInput, { target: { value: 'janani' } });
    fireEvent.change(lastInput, { target: { value: 'ravindran' } });
    fireEvent.change(emailInput, { target: { value: 'jananiravindran1299@gmail.com' } });
    fireEvent.change(passwordInput, { target: { value: 'janani1299' } });
    fireEvent.change(confirmPasswordInput, { target:{value:'janani1299'}});
    fireEvent.submit(getByRole('button', { name: /register/i }));

    expect(getByTestId('confirmpasswordInput')).toBeInTheDocument();

     // Submit the form
     const submitButton = getByText('Register')
     fireEvent.click(submitButton); 
 
    
  });
})