import React from 'react';
import Navigation from '../Navigation/Navigation';
import s from './Header.module.css';
import { useSelector } from 'react-redux';
import { selectIsLoggedIn, selectUser } from '../../redux/auth/selectors';
import AuthNav from '../AuthNav/AuthNav';
import UserMenu from '../UserMenu/UserMenu';

export const Header = () => {
  const user = useSelector(selectUser);
  const isLoggedIn = useSelector(selectIsLoggedIn);

  return (
    <div className={s.box}>
      <h2>Contacts App</h2>
      {/* {isLoggedIn && <h2 className={s.name}>Nice to see you here, {user.name}</h2>} */}
      <Navigation />
      {isLoggedIn ? <UserMenu user={user} /> : <AuthNav />}
    </div>
  );
};

export default Header;
