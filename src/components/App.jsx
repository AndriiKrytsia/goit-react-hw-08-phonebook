import { Navigate, Route, Routes } from 'react-router-dom';
import { RegisterForm } from 'pages/Register';
import { LoginForm } from 'pages/Login';
import { Contacts } from 'pages/Contacts';
import { Navigation } from 'pages/Navigation';

export const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Navigation />}>
        <Route index element={<RegisterForm />} />
        <Route path="/login" element={<LoginForm />} />
        <Route path="/contacts" element={<Contacts />} />
      </Route>
      <Route path="*" element={<Navigate to="/" />} />
    </Routes>
  );
};
