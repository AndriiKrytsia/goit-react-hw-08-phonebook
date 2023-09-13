import { ContactList } from './ContactList';
import { ContactForm } from './ContactForm';
import { Filter } from './Filter';
import { Link, Route, Routes } from 'react-router-dom';
import { RegisterForm } from 'pages/Register';
import { LoginForm } from 'pages/Login';
import { Contacts } from 'pages/Contacts';

export const App = () => {
  return (
    <>
      <nav>
        <Link to="/contacts">Contact</Link>
        <Link to="/login">Login</Link>
        <Link to="/register">Register</Link>
      </nav>
      <Routes>
        <Route path="/register" element={<RegisterForm />} />
        <Route path="/login" element={<LoginForm />} />
        <Route path="/contacts" element={<Contacts />} />
      </Routes>
    </>
  );
};
