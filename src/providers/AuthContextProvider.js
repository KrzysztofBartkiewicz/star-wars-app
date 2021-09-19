import { useEffect } from 'react';
import { auth } from '../firebase/config';
import { useDispatch } from 'react-redux';
import { setCurrentUser, setError } from '../redux/userReducer/actions';
import { AuthContext } from '../context';

const AuthContextProvider = ({ children }) => {
  const dispatch = useDispatch();

  const signIn = (email, password) => {
    auth
      .signInWithEmailAndPassword(email, password)
      .then(() => console.log('firebase: user logged in!'))
      .catch((err) => dispatch(setError(err)));
  };

  const signOut = () => {
    auth
      .signOut()
      .then(() => console.log('firebase: user logged out'))
      .catch((err) => dispatch(setError(err)));
  };

  useEffect(() => {
    const checkUser = auth.onAuthStateChanged((user) => {
      if (user) {
        dispatch(setCurrentUser(user));
      } else {
        dispatch(setCurrentUser('user signed out'));
      }
    });
    return checkUser;
  }, []);

  const value = { signIn, signOut };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

export default AuthContextProvider;
