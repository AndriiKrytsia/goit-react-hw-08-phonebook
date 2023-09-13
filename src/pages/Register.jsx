import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { register } from 'redux/user/userThunk';

export const RegisterForm = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [name, setName] = useState('');
  const dispatch = useDispatch();
  const handelChange = e => {
    if (e.target.name === 'email') {
      setEmail(e.target.value);
    } else if (e.target.name === 'password') {
      setPassword(e.target.value);
    } else if (e.target.name === 'name') {
      setName(e.target.value);
    }
  };

  const handelSubmit = e => {
    e.preventDefault();
    dispatch(register({ name, email, password }));
    setEmail('');
    setPassword('');
    setName('');
  };

  return (
    <>
      <form onSubmit={handelSubmit}>
        Name
        <input
          onChange={handelChange}
          value={name}
          type="text"
          name="name"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
        />
        Email
        <input
          onChange={handelChange}
          value={email}
          type="email"
          name="email"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
        />
        Password
        <input
          onChange={handelChange}
          value={password}
          type="password"
          name="password"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
        />
        <button type="submit">Sign in</button>
      </form>
    </>
  );
};
