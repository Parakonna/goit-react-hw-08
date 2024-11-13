import { useSelector } from 'react-redux';
import { selectUserDataIsLoggedIn } from '../redux/auth/selectors';
import { Navigate } from 'react-router-dom';

export const PrivateRoute = ({ component: Component, redirectTo = '/' }) => {
  const isLoggedIn = useSelector(selectUserDataIsLoggedIn);

  return isLoggedIn ? Component : <Navigate to={redirectTo} replace />;
};
