import {
  REGISTER_USER,
  LOG_IN_USER,
  LOG_OUT_USER,
  UPDATE_PROFILE,
} from './constants';
const INITIAL_STATE = { token: null, profile: null, online: false };

const authReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case REGISTER_USER:
      return action.data;
    case LOG_IN_USER:
      return action.data;
    case LOG_OUT_USER:
      return action.data;
    case UPDATE_PROFILE:
      return { ...state, profile: action.payload.user };
    default:
      return state;
  }
};

export default authReducer;
