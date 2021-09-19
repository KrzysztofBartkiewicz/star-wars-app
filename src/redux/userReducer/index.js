import { actionType } from './actions';

const initialState = {
  currentUser: null,
  error: null,
};

const userReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case actionType.SET_CURRENT_USER:
      return {
        ...state,
        currentUser: payload,
      };

    case actionType.SET_ERROR:
      return {
        ...state,
        error: payload,
      };

    default:
      return state;
  }
};

export default userReducer;
