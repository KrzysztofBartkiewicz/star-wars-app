export const actionType = {
  SET_CHARACTERS: 'SET_CHARACTERS',
  ADD_CHARACTER_TO_FAVORITES: 'ADD_CHARACTER_TO_FAVORITES',
  DELETE_CHARACTER_FROM_FAVORITES: 'DELETE_CHARACTER_FROM_FAVORITES',
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
