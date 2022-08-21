import { FETCH_ALL_BLOGS } from './constants';
import axios from 'axios';

export const getALlBlogs = () => async (dispatch) => {
  const { data } = await axios.get('http://localhost:3000/api/blogs');
  dispatch({
    type: FETCH_ALL_BLOGS,
    payload: data,
  });
};
