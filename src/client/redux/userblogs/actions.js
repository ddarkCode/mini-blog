import axios from 'axios';

import { GET_USER_BLOGS, UPDATE_BLOG, DELETE_BLOG } from './constants';

const getUserBlogsAction = (payload) => {
  return {
    type: GET_USER_BLOGS,
    payload,
  };
};

export const getUserBlogs = (authorId) => async (dispatch) => {
  try {
    const { data } = await axios.get(
      `http://localhost:3000/api/blogs/?authorId=${authorId}`
    );
    dispatch(getUserBlogsAction(data));
  } catch (err) {
    console.log(err);
  }
};

export const updateBlog = (blogToUpdate, blogId, token) => {
  return async (dispatch) => {
    try {
      const { data } = await axios.patch(
        `http://localhost:3000/api/blogs/${blogId}/?blogger-token=${token}`,
        blogToUpdate
      );
      dispatch({
        type: UPDATE_BLOG,
        payload: data.blog,
      });
    } catch (err) {
      console.log(err);
    }
  };
};
export const deleteBlog = (blogId, token) => {
  return async (dispatch) => {
    try {
      const { data } = await axios.delete(
        `http://localhost:3000/api/blogs/${blogId}/?blogger-token=${token}`
      );
      dispatch({
        type: DELETE_BLOG,
        payload: data.deletedBlogId,
      });
    } catch (err) {
      console.log(err);
    }
  };
};
