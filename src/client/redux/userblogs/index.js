import { GET_USER_BLOGS, UPDATE_BLOG, DELETE_BLOG } from './constants';

export default function userBlogsReducer(state = [], action) {
  switch (action.type) {
    case GET_USER_BLOGS:
      return action.payload;
    case UPDATE_BLOG:
      return state.map((item) => {
        if (item._id === action.payload._id) {
          return action.payload;
        } else {
          return item;
        }
      });
    case DELETE_BLOG:
      return state.filter((blog) => blog._id !== action.payload);

    default:
      return state;
  }
}
