import React, { useContext } from 'react';
import { AuthContext } from '../../../context';
import { useSelector, useDispatch } from 'react-redux';
import { getUserData } from '../../../redux/userReducer/selectors';
import { getFavoritesCharacters } from '../../../redux/appReducer/selectors';
import { deleteAllFavoritesCharacters } from '../../../redux/appReducer/actions';
import Heading from '../../atoms/Heading';
import Paragraph from '../../atoms/Paragraph';
import Button from '../../atoms/Button';
import { StyledInnerWrapper, StyledUserMenu } from './StyledUserMenu';

const extractLogin = (email) => email && email.slice(0, email.indexOf('@'));

const UserMenu = () => {
  const { currentUser } = useSelector(getUserData);
  const favs = useSelector(getFavoritesCharacters);
  const dispatch = useDispatch();
  const { signOut } = useContext(AuthContext);

  const handleDelete = () => {
    dispatch(deleteAllFavoritesCharacters());
  };

  return (
    <StyledUserMenu>
      {currentUser && (
        <>
          <StyledInnerWrapper>
            <Heading color="white">Welcome,</Heading>
            <Paragraph>{extractLogin(currentUser.email)}</Paragraph>
          </StyledInnerWrapper>
          {favs.length !== 0 && (
            <StyledInnerWrapper>
              <Heading color="white">Your favs:</Heading>
              <Paragraph>{`${favs.length}`}</Paragraph>
            </StyledInnerWrapper>
          )}
          <StyledInnerWrapper>
            <Button onClick={signOut}>Logout</Button>
            {favs.length !== 0 && (
              <Button onClick={handleDelete} color="secondary">
                Delete all favs
              </Button>
            )}
          </StyledInnerWrapper>
        </>
      )}
    </StyledUserMenu>
  );
};

export default UserMenu;
