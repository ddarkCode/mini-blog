import React, { useState } from 'react';

import InputContainer from '../../components/input/InputContainer';
import Input from '../../components/input/Input';

function RegisterPage() {
  const [formEntries, setFormEntries] = useState({
    firstName: '',
    lastName: '',
    username: '',
    password: '',
  });

  const handleFormChange = (e) => {
    const { name, value } = e.target;
    setFormEntries((prevState) => {
      return {
        ...prevState,
        [name]: value,
      };
    });
  };

  return (
    <form>
      <h2>Create your account</h2>
      <InputContainer>
        <label htmlFor="firstName">First Name</label>
        <Input
          type="text"
          name="firstName"
          id="firstName"
          placeholder="First Name"
          value={formEntries.firstName}
          onChange={handleFormChange}
        />
      </InputContainer>
      <InputContainer>
        <label htmlFor="lastName">Last Name</label>
        <Input
          type="text"
          name="lastName"
          id="lastName"
          placeholder="Last Name"
          value={formEntries.lastName}
          onChange={handleFormChange}
        />
      </InputContainer>
      <InputContainer>
        <label htmlFor="username">Email</label>
        <Input
          type="email"
          name="username"
          id="username"
          placeholder="Email"
          value={formEntries.email}
          onChange={handleFormChange}
        />
      </InputContainer>
      <InputContainer>
        <label htmlFor="password">Password</label>
        <Input
          type="password"
          name="password"
          id="password"
          placeholder="Password"
          value={formEntries.password}
          onChange={handleFormChange}
        />
      </InputContainer>
      <button type="submit">Register</button>
    </form>
  );
}

export default {
  component: RegisterPage,
};
