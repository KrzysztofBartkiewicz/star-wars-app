export const actionType = {
  SET_CHARACTERS: 'SET_CHARACTERS',
  ADD_CHARACTER_TO_FAVORITES: 'ADD_CHARACTER_TO_FAVORITES',
  DELETE_CHARACTER_FROM_FAVORITES: 'DELETE_CHARACTER_FROM_FAVORITES',
  LOAD_CHARACTERS_FROM_LS: 'LOAD_CHARACTERS_FROM_LS',
  DELETE_ALL_FAVORITES_CHARACTERS: 'DELETE_ALL_FAVORITES_CHARACTERS',
  SET_SEARCHED_CHARACTERS: 'SET_SEARCHED_CHARACTERS',
  SET_ACITVE_COLOR: 'SET_ACTIVE_COLOR',
};

export const setCharacters = (characters) => ({
  type: actionType.SET_CHARACTERS,
  payload: characters,
});

export const addCharacterToFavorites = (character) => ({
  type: actionType.ADD_CHARACTER_TO_FAVORITES,
  payload: character,
});

export const deleteCharacterFromFavorites = (character) => ({
  type: actionType.DELETE_CHARACTER_FROM_FAVORITES,
  payload: character,
});

export const loadCharactersFromLS = (characters) => ({
  type: actionType.LOAD_CHARACTERS_FROM_LS,
  payload: characters,
});

export const deleteAllFavoritesCharacters = () => ({
  type: actionType.DELETE_ALL_FAVORITES_CHARACTERS,
  payload: null,
});

export const setSearchedCharacters = (characters) => ({
  type: actionType.SET_SEARCHED_CHARACTERS,
  payload: characters,
});

export const setActiveColor = (color) => ({
  type: actionType.SET_ACITVE_COLOR,
  payload: color,
});
