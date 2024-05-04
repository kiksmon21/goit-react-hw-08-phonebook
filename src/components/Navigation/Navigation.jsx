import { NavLink } from 'react-router-dom';
import { useAuth } from '../../redux/hooks/useAuth';
import { useDispatch } from 'react-redux';
import { logOut } from '../../redux/auth/authOperations';

import style from './Navigation.module.css';

export const Navigation = () => {
  const { isLoggedIn } = useAuth();
  const dispatch = useDispatch();

  const handleLogout = () => {
    dispatch(logOut());
  };

  return (
    <nav className={style.nav}>
      {isLoggedIn ? (
        <div>
          <p>Welcome, {isLoggedIn.name}</p>
          <NavLink className={style.navlink} to="/logout" onClick={handleLogout}>Log Out</NavLink>
        </div>
      ) : (
        <div>
          <NavLink className={style.navlink} to="/register">Register</NavLink>
          <NavLink className={style.navlink} to="/login">Log In</NavLink>
        </div>
      )}
    </nav>
  );
};