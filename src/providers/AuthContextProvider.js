import { auth } from '../firebase/config';
import { useDispatch } from 'react-redux';
import { setCurrentUser, setError } from '../redux/userReducer/actions';
import { AuthContext } from '../context';

const AuthContextProvider = ({ children }) => {
  const dispatch = useDispatch();

  const signIn = (email, password) => {
    auth
      .signInWithEmailAndPassword(email, password)
      .then((user) => dispatch(setCurrentUser(user)))
      .catch((err) => dispatch(setError(err)));
  };

  const signOut = () => {
    auth
      .signOut()
      .then(() => dispatch(setCurrentUser(null)))
      .catch((err) => dispatch(setError(err)));
  };

  const value = { signIn, signOut };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

export default AuthContextProvider;
