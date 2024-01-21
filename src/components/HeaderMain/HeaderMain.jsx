import { useContext } from 'react';
/* eslint-disable no-unused-vars */ // added for useCookies hook variables.
import { Link, useNavigate } from 'react-router-dom';
import { useCookies } from 'react-cookie';
import { Icon } from '../UI/Icons/Icons';
import Avatar from '../../assets/images/avatar.png';
import { GeneralContext } from '../../contexts/GeneralContext';

export default function HeaderMain({ children }) {
  const navigate = useNavigate();
  const [_, __, removeCookie] = useCookies();
  // eslint-disable-next-line
  const { isLoggedIn, setIsLoggedIn } = useContext(GeneralContext);

  function logOut() {
    removeCookie('ecabinet-token');
    setIsLoggedIn(false);
    localStorage.setItem('login', 'false');
    navigate('/singin');
  }

  return (
    <header className="header-main">
      {children}
      <div className="header-main__user">
        <Link to="/" className="header-main__link">
          <img className="header-main__avatar" src={Avatar} alt="аватар" />
          <p className="header-main__title">Андреева А.Н.</p>
        </Link>
        <Icon
          icon="fa-arrow-right-from-bracket"
          size="is-small"
          extraClass="header-main__icon"
          onClick={() => {
            logOut();
          }}
        />
      </div>
    </header>
  );
}
