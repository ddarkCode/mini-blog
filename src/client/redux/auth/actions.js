import axios from 'axios';

import {
  REGISTER_USER,
  LOG_IN_USER,
  LOG_OUT_USER,
  UPDATE_PROFILE,
} from './constants';

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
    try {
      const { data } = await axios.get('http://localhost:3000/api/auth/logout');
      console.log(data);
      dispatch({
        type: LOG_OUT_USER,
        data,
      });
    } catch (err) {
      console.log(err);
    }
  };
};

export const updateProfile = (profile, userId, token) => {
  return async (dispatch) => {
    try {
      const { data } = await axios.patch(
        `http://localhost:3000/api/users/${userId}/?blogger-token=${token}`,
        profile
      );
      console.log('Action creator Data: ', data);
      dispatch({
        type: UPDATE_PROFILE,
        payload: data,
      });
    } catch (err) {
      console.log(err);
    }
  };
};
