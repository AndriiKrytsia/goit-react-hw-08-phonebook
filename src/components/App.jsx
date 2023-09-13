import { Navigate, Route, Routes } from 'react-router-dom';
import { RegisterForm } from 'pages/Register';
import { LoginForm } from 'pages/Login';
import { Contacts } from 'pages/Contacts';
import { Navigation } from 'pages/Navigation';
import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { refresh } from 'redux/user/userThunk';
import { PublicRoute } from './PublicRoute';
import { PrivateRoute } from './PrivateRoute';

export const App = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(refresh());
  }, [dispatch]);
  return (
    <Routes>
      <Route path="/" element={<Navigation />}>
        <Route path="" element={<PrivateRoute />}>
          <Route index element={<RegisterForm />} />
          <Route path="/login" element={<LoginForm />} />
        </Route>

        <Route path="" element={<PublicRoute />}>
          <Route path="/contacts" element={<Contacts />} />
        </Route>
      </Route>
      <Route path="*" element={<Navigate to="/" />} />
    </Routes>
  );
};
