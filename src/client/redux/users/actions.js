import axios from 'axios';

import { GET_ALL_USERS, GET_USER } from './constants';

export const getUsers = () => {
  return async (dispatch) => {
    const { data } = await axios.get('http://localhost:3000/api/users');
    dispatch({
      type: GET_ALL_USERS,
      payload: data,
    });
  };
};
export const getUser = () => {
  return async (dispatch) => {
    const { data } = await axios.get(
      `http://localhost:3000/api/users/${userId}`
    );
    dispatch({
      type: GET_USER,
      payload: data,
    });
  };
};
