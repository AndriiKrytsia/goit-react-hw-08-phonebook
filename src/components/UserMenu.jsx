import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { selectUser } from 'redux/selector';
import { logout } from 'redux/user/userThunk';

export const UserMenu = () => {
  const dispath = useDispatch();
  const user = useSelector(selectUser);
  return (
    <div>
      <nav>
        <Link to="/contacts">Contact</Link>
      </nav>
      <p>{user.email}</p>
      <button onClick={() => dispath(logout())} type="button">
        Logout
      </button>
    </div>
  );
};
