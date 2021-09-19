export const actionType = {
  SET_CURRENT_USER: 'SET_CURRENT_USER',
  SET_ERROR: 'SET_ERROR',
};

export const setCurrentUser = (user) => ({
  type: actionType.SET_CURRENT_USER,
  payload: user,
});

export const setError = (error) => ({
  type: actionType.SET_ERROR,
  payload: error,
});
