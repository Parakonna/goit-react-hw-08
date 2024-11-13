import { NavLink } from 'react-router-dom';
import css from './Navigation.module.css';
import { useSelector } from 'react-redux';
import { selectUserDataIsLoggedIn } from '../../redux/auth/selectors';
import clsx from 'clsx';

const buildCssClasses = ({ isActive }) => {
  return clsx(css.link, isActive && css.active);
};

const Navigation = () => {
  const isLoggedIn = useSelector(selectUserDataIsLoggedIn);

  return (
    <nav>
      <NavLink className={buildCssClasses} to="/">
        Home
      </NavLink>
      {isLoggedIn && (
        <NavLink className={buildCssClasses} to="/contacts">
          Contacts
        </NavLink>
      )}
    </nav>
  );
};

export default Navigation;
