import { FETCH_ALL_BLOGS, ADD_NEW_BLOG, GET_SINGLE_BLOG } from './constants';

export const allBlogsReducer = (state = [], action) => {
  switch (action.type) {
    case FETCH_ALL_BLOGS:
      return action.payload;
    case ADD_NEW_BLOG:
      return [...state, action.payload.blog];
    default:
      return state;
  }
};

//Single Blog Reducer

export const singleBlogReducer = (state = {}, action) => {
  switch (action.type) {
    case GET_SINGLE_BLOG:
      return action.payload;
    default:
      return state;
  }
};
