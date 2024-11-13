import { NavLink } from 'react-router-dom';
import css from './AuthNav.module.css';
import clsx from 'clsx';

const buildCssClasses = ({ isActive }) => {
  return clsx(css.link, isActive && css.active);
};

const AuthNav = () => {
  return (
    <div>
      <NavLink className={buildCssClasses} to="/register">
        Register
      </NavLink>
      <NavLink className={buildCssClasses} to="/login">
        Log In
      </NavLink>
    </div>
  );
};

export default AuthNav;
