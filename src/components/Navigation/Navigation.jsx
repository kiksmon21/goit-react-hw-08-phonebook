import { NavLink } from 'react-router-dom';
import { useAuth } from '../../redux/hooks/useAuth';
import { useDispatch } from 'react-redux';
import { logOut } from '../../redux/auth/authOperations';

import style from './Navigation.module.css';

export const Navigation = () => {
  const { isLoggedIn, user } = useAuth();
  const dispatch = useDispatch();

  const handleLogout = () => {
    dispatch(logOut());
  };

  return (
    <nav className={style.nav}>
      {isLoggedIn ? (
        <div className={style.nav_div}>
          <p className={style.user}>Welcome, {user.name} 😎</p>
          <NavLink className={style.navlink} to="/logout" onClick={handleLogout}>Log Out</NavLink>
        </div>
      ) : (
          <div className={style.nav_div}>
          <NavLink className={style.navlink} to="/">Home</NavLink>
          <NavLink className={style.navlink} to="/register">Register</NavLink>
          <NavLink className={style.navlink} to="/login">Log In</NavLink>
        </div>
      )}
    </nav>
  );
};