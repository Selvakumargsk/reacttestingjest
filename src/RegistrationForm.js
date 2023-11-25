  import React, { useState } from 'react';

const RegistrationForm = () => {
  const [firstname,setFirstName]=useState('');
  const [lastname,setLastName]=useState('');
  const [email,setEmail]=useState('');
  const [password,setPassword]=useState('');
  const [confirmpassword,setConfirmPassword]=useState('');


  const handleSubmit = (e) => {
    e.preventDefault();
    // Submit logic
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" 
       data-testid="firstNameInput" 
       name="firstName" 
       value={firstname}
        onChange={(e) => setFirstName(e.target.value)}
        placeholder="First Name"
        required
      /><br/>
      <input type="text" 
      data-testid="lastNameInput"
       name="lastName" 
       value={lastname}
        onChange={(e) => setLastName(e.target.value)}
        placeholder="Last Name"
        required
      /><br/>
      <input type="email" 
      data-testid="emailInput"
       name="email" 
       value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="email"
        required
      /><br/>
      <input type="password" 
      data-testid="passwordInput"
       name="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        placeholder="password"
        required
      /><br/>
      <input type="password" 
      data-testid="confirmpasswordInput" 
      name="password" 
      value={confirmpassword}
        onChange={(e) => setConfirmPassword(e.target.value)}
        placeholder="confirmpassword"
        // required
      /><br/>
      {/* Other input fields for lastName, email, password, confirmPassword */}
      <button type="submit">Register</button>
    </form>
  );
};

export default RegistrationForm;