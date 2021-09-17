import { actionType } from './actions';

const initialState = {
  characters: null,
};

const reducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case actionType.SET_CHARACTERS:
      return {
        ...state,
        characters: payload,
      };

    default:
      return state;
  }
};

export default reducer;
