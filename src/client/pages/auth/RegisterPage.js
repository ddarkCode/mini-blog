import React, { useState } from 'react';
import { useDispatch } from 'react-redux';

import InputContainer from '../../components/input/InputContainer';
import Input from '../../components/input/Input';
import { registerUser } from '../../redux/auth';

function RegisterPage({ history }) {
  const [formEntries, setFormEntries] = useState({
    fullname: '',
    username: '',
    password: '',
  });
  const dispatch = useDispatch();

  const handleFormChange = (e) => {
    const { name, value } = e.target;
    setFormEntries((prevState) => {
      return {
        ...prevState,
        [name]: value,
      };
    });
  };

  function handleSubmit(e) {
    e.preventDefault();
    dispatch(registerUser(formEntries));
    history.push('/blogs');
  }

  return (
    <form className="auth-form-container" onSubmit={handleSubmit}>
      <h2>Create your account</h2>
      <InputContainer>
        <label htmlFor="fullname">First Name</label>
        <Input
          type="text"
          name="fullname"
          id="fullname"
          placeholder="Enter Your Full Name"
          value={formEntries.firstName}
          onChange={handleFormChange}
        />
      </InputContainer>

      <InputContainer>
        <label htmlFor="username">Email</label>
        <Input
          type="email"
          name="username"
          id="username"
          placeholder="Enter Your Email"
          value={formEntries.username}
          onChange={handleFormChange}
        />
      </InputContainer>
      <InputContainer>
        <label htmlFor="password">Password</label>
        <Input
          type="password"
          name="password"
          id="password"
          placeholder="Enter Your Password"
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
