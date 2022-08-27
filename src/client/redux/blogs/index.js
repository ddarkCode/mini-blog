import { FETCH_ALL_BLOGS, ADD_NEW_BLOG } from './constants';

export default (state = [], action) => {
  switch (action.type) {
    case FETCH_ALL_BLOGS:
      return action.payload;
    case ADD_NEW_BLOG:
      return state;
    default:
      return state;
  }
};
