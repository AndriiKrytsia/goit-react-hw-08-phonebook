import { useSelector } from 'react-redux';
import { Navigate, Outlet } from 'react-router-dom';
import { selectToken } from 'redux/selector';

export const PrivateRoute = () => {
  const token = useSelector(selectToken);
  return !token ? <Outlet /> : <Navigate to="/contacts" />;
};
