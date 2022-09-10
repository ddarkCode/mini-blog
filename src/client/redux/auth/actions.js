import axios from 'axios';

import { REGISTER_USER, LOG_IN_USER, LOG_OUT_USER } from './constants';

export const register = (newUserDetails) => {
  return async (dispatch) => {
    const { data } = await axios.post(
      'http://localhost:3000/api/auth/register',
      newUserDetails
    );
    dispatch({
      type: REGISTER_USER,
      data,
    });
  };
};

export const login = (loginDetails) => {
  return async (dispatch) => {
    const { data } = await axios.post(
      'http://localhost:3000/api/auth/login',
      loginDetails
    );
    console.log(data);
    dispatch({
      type: LOG_IN_USER,
      data,
    });
  };
};

export const logout = () => {
  return async (dispatch) => {
    const { data } = await axios.get('http://localhost:3000/api/auth/logout');
    console.log(data);
    dispatch({
      type: LOG_OUT_USER,
      data,
    });
  };
};
