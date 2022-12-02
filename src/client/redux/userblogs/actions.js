import axios from 'axios';

import { GET_USER_BLOGS } from './constants';

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
