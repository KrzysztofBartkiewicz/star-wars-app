export const actionType = {
  SET_CHARACTERS: 'SET_CHARACTERS',
};

export const setCharacters = (characters) => ({
  type: actionType.SET_CHARACTERS,
  payload: characters,
});
