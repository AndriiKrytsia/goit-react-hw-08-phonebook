import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';
import { selectLogged } from 'redux/selector';

export const PublicRoute = ({ component: Component, redirectTo = '/' }) => {
  const isLogin = useSelector(selectLogged);
  return isLogin ? <Navigate to={redirectTo} /> : Component;
};
