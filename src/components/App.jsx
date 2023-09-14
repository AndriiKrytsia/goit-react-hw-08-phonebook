import { Navigate, Route, Routes } from 'react-router-dom';
import { RegisterForm } from 'pages/Register';
import { LoginForm } from 'pages/Login';
import { Contacts } from 'pages/Contacts';
import { Navigation } from 'pages/Navigation';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { refresh } from 'redux/user/userThunk';
import { PublicRoute } from './PublicRoute';
import { PrivateRoute } from './PrivateRoute';
import { selectIsRefreshing } from 'redux/selector';

export const App = () => {
  const isRefreshing = useSelector(selectIsRefreshing);

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(refresh());
  }, [dispatch]);
  return isRefreshing ? (
    <p>LOADING...</p>
  ) : (
    <Routes>
      <Route path="/" element={<Navigation />}>
        <Route
          index
          element={
            <PublicRoute redirectTo="/contacts" component={<RegisterForm />} />
          }
        />
        <Route
          path="/login"
          element={
            <PublicRoute redirectTo="/contacts" component={<LoginForm />} />
          }
        />
        <Route
          path="/contacts"
          element={
            <PrivateRoute redirectTo="/login" component={<Contacts />} />
          }
        />
      </Route>
      <Route path="*" element={<Navigate to="/" />} />
    </Routes>
  );
};
