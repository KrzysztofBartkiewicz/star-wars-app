import { actionType } from './actions';

const initialState = {
  characters: null,
  favCharacters: JSON.parse(localStorage.getItem('favCharacters')) || [],
};

const reducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case actionType.SET_CHARACTERS:
      return {
        ...state,
        characters: payload,
      };

    case actionType.ADD_CHARACTER_TO_FAVORITES:
      return {
        ...state,
        favCharacters: [...state.favCharacters, payload],
      };

    case actionType.DELETE_CHARACTER_FROM_FAVORITES:
      const { name } = payload;
      return {
        ...state,
        favCharacters: state.favCharacters.filter(
          (character) => character.name !== name
        ),
      };

    default:
      return state;
  }
};

export default reducer;
