import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { login } from 'redux/user/userThunk';

export const LoginForm = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const dispatch = useDispatch();
  const handelChange = e => {
    if (e.target.name === 'email') {
      setEmail(e.target.value);
    } else if (e.target.name === 'password') {
      setPassword(e.target.value);
    }
  };

  const handelSubmit = e => {
    e.preventDefault();
    dispatch(login({ email, password }));
    setEmail('');
    setPassword('');
  };

  return (
    <>
      <form onSubmit={handelSubmit}>
        <input
          onChange={handelChange}
          value={email}
          type="email"
          name="email"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
        />
        Number
        <input
          onChange={handelChange}
          value={password}
          type="password"
          name="password"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
        />
        <button type="submit">Add contact</button>
      </form>
    </>
  );
};
