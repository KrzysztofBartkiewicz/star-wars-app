import { actionType } from './actions';

const initialState = {
  characters: null,
  favCharacters: [],
  searchedCharacters: null,
  activeColor: 'red',
};

const appReducer = (state = initialState, { type, payload }) => {
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

    case actionType.LOAD_CHARACTERS_FROM_LS:
      return {
        ...state,
        favCharacters: payload,
      };

    case actionType.DELETE_ALL_FAVORITES_CHARACTERS:
      return {
        ...state,
        favCharacters: [],
      };

    case actionType.SET_SEARCHED_CHARACTERS:
      return {
        ...state,
        searchedCharacters: payload,
      };

    case actionType.SET_ACITVE_COLOR:
      return {
        ...state,
        activeColor: payload,
      };

    default:
      return state;
  }
};

export default appReducer;
