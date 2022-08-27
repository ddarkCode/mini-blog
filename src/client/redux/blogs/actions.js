import { FETCH_ALL_BLOGS, ADD_NEW_BLOG } from './constants';
import axios from 'axios';

export const getALlBlogs = () => async (dispatch) => {
  const { data } = await axios.get('http://localhost:3000/api/blogs');
  dispatch({
    type: FETCH_ALL_BLOGS,
    payload: data,
  });
};

export const addNewBlog = (blogToAdd) => async (dispatch) => {
  const { data } = await axios.post(
    'http://localhost:3000/api/blogs',
    blogToAdd
  );
  dispatch({
    type: ADD_NEW_BLOG,
    payload: data,
  });
};
