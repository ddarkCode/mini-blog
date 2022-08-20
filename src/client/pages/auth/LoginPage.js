import React, { useState } from 'react';

import InputContainer from '../../components/input/InputContainer';
import Input from '../../components/input/Input';

function LoginPage() {
  const [formEntries, setFormEntries] = useState({
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
    <form className="login-form auth-form-container">
      <h2>Login</h2>

      <InputContainer>
        <label htmlFor="username">Email</label>
        <Input
          type="text"
          name="username"
          id="username"
          placeholder="Enter Your Email"
          value={formEntries.email}
          onChange={handleFormChange}
        />
      </InputContainer>
      <InputContainer>
        <label htmlFor="password">Password</label>
        <Input
          type="text"
          name="password"
          id="password"
          placeholder="Enter Your Password"
          value={formEntries.password}
          onChange={handleFormChange}
        />
      </InputContainer>
      <button type="submit">Login</button>
    </form>
  );
}

export default {
  component: LoginPage,
};
