import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import css from './UserMenu.module.css';
import { apiLogoutUser } from '../../redux/auth/operations';
import { selectUserData } from '../../redux/auth/selectors';

const UserMenu = () => {
  const dispatch = useDispatch();
  const user = useSelector(selectUserData);
  console.log(user);

  return (
    <div className={css.wrapper}>
      <p className={css.username}>Welcome, {/* user.name */}</p>
      <button
        className={css.btn}
        type="button"
        onClick={() => dispatch(apiLogoutUser())}
      >
        Logout
      </button>
    </div>
  );
};

export default UserMenu;
