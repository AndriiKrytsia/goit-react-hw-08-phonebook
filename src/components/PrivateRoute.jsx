import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';
import { selectIsRefreshing, selectLogged } from 'redux/selector';

export const PrivateRoute = ({ component: Component, redirectTo = '/' }) => {
  const isLogin = useSelector(selectLogged);
  const isRefresh = useSelector(selectIsRefreshing);
  const shouldRedirect = !isRefresh && !isLogin;

  return shouldRedirect ? <Navigate to={redirectTo} /> : Component;
};
