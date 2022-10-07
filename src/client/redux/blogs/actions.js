import { FETCH_ALL_BLOGS, ADD_NEW_BLOG, GET_SINGLE_BLOG } from './constants';
import axios from 'axios';

export const getALlBlogs = () => async (dispatch) => {
  const { data } = await axios.get('http://localhost:3000/api/blogs');
  dispatch({
    type: FETCH_ALL_BLOGS,
    payload: data,
  });
};

export const addNewBlog = (blogToAdd) => {
  return async (dispatch) => {
    const { data } = await axios.post(
      'http://localhost:3000/api/blogs',
      blogToAdd
    );
    dispatch({
      type: ADD_NEW_BLOG,
      payload: data,
    });
  };
};

//Single Blog Actions

export const getBlog = (blogId) => {
  return async (dispatch) => {
    const { data } = await axios.get(
      `http://localhost:3000/api/blogs/${blogId}`
    );
    dispatch({
      type: GET_SINGLE_BLOG,
      payload: data,
    });
  };
};
