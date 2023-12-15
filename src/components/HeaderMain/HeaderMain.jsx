/* eslint-disable no-unused-vars */
import { Link, useNavigate } from 'react-router-dom';
import Breadcrumb from '../Breadcrumb/Breadcrumb';
import { Icon } from '../UI/Icons/Icons';
import Avatar from '../../assets/images/avatar.png';

export default function HeaderMain() {
  const navigate = useNavigate();
  return (
    <header className="header-main">
      <Breadcrumb />
      <div className="header-main__user">
        <Link to="/" className="header-main__link">
          <img className="header-main__avatar" src={Avatar} alt="аватар" />
          <p className="header-main__title">Андреева А.Н.</p>
        </Link>
        <Icon
          icon="fa-arrow-right-from-bracket"
          size="is-small"
          extraClass="header-main__icon"
          onClick={() => navigate('/signin')}
        />
      </div>
    </header>
  );
}
