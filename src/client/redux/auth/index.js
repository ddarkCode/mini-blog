import { REGISTER_USER } from './constants';

const authReducer = (state = null, action) => {
  switch (action.type) {
    case REGISTER_USER:
      return action.payload;

    default:
      return state;
  }
};

export default authReducer;
