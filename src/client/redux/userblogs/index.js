import { GET_USER_BLOGS } from './constants';

export default function userBlogsReducer(state = [], action) {
  switch (action.type) {
    case GET_USER_BLOGS:
      return action.payload;

    default:
      return state;
  }
}
