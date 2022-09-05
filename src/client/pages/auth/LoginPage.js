import React, { useState } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

import { login } from '../../redux/auth/actions';

import InputContainer from '../../components/input/InputContainer';
import Input from '../../components/input/Input';

function LoginPage({ login, history }) {
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

  const handleSubmit = (e) => {
    e.preventDefault();
    login(formEntries);
    history.push('/blogs');
  };

  return (
    <div>
      <form className="login-form auth-form-container" onSubmit={handleSubmit}>
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
      <span>
        Don't have an account? <Link to={'/register'}>Register</Link>
      </span>
    </div>
  );
}

const mapDispatchToProps = {
  login,
};
export default {
  component: connect(null, mapDispatchToProps)(LoginPage),
};
