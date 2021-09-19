export const getUserData = (state) => ({
  currentUser: state.user.currentUser,
  error: state.user.error,
});
