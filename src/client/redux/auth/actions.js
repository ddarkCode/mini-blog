import axios from 'axios';

import { REGISTER_USER, LOGIN_IN_USER } from './constants';

export const register = (newUserDetails) => {
  return async (dispatch) => {
    const { data } = await axios.post(
      'http://localhost:3000/api/auth/register',
      newUserDetails
    );
    dispatch({
      type: REGISTER_USER,
      payload: data,
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
      type: LOGIN_IN_USER,
      payload: data,
    });
  };
};
