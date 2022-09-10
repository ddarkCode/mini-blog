import { REGISTER_USER, LOG_IN_USER, LOG_OUT_USER } from './constants';

const authReducer = (state = null, action) => {
  switch (action.type) {
    case REGISTER_USER:
      return action.data.user;
    case LOG_IN_USER:
      return action.data.user;
    case LOG_OUT_USER:
      return action.data.user;
    default:
      return state;
  }
};

export default authReducer;
