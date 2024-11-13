import { useSelector } from 'react-redux';
import { selectUserDataIsLoggedIn } from '../redux/auth/selectors';
import { Navigate } from 'react-router-dom';

export const RestrictedRoute = ({ component: Component, redirectTo = '/' }) => {
  const isLoggedIn = useSelector(selectUserDataIsLoggedIn);

  return isLoggedIn ? <Navigate to={redirectTo} /> : Component;
};
