import { REGISTER_USER, LOGIN_IN_USER, LOG_OUT_USER } from './constants';

const authReducer = (state = null, action) => {
  switch (action.type) {
    case REGISTER_USER:
      return action.payload;
    case LOGIN_IN_USER:
      return action.payload;
    case LOG_OUT_USER:
      return action.payload.user;
    default:
      return state;
  }
};

export default authReducer;
