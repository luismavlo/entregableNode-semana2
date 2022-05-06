import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { logout } from '../../../store/actions/user.actions';
import classes from './header.module.css';

const Header = () => {
  const uid = localStorage.getItem('uid');

  const dispatch = useDispatch();

  const handleLogout = () => {
    dispatch(logout());
  };

  return (
    <header className={classes.header}>
      <div className={classes.brand}>
        <a href="/">Academlo Bank</a>
      </div>

      <nav className={classes.navigation}>
        <ul>
          {uid && (
            <li>
              <button onClick={handleLogout}>Log out</button>
            </li>
          )}
        </ul>
      </nav>
    </header>
  );
};

export default Header;
