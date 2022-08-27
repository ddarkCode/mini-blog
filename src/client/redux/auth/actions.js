import axios from 'axios';

import { REGISTER_USER } from './constants';

export const register = (newUserDetails, history) => {
  console.log(newUserDetails);
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
