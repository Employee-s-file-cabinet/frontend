/* eslint-disable no-unused-vars */
import { Link } from 'react-router-dom';
import Logo from '../../assets/images/logo.svg';
import { Icon } from '../UI/Icons/Icons';
import { sideMenuOptions } from '../../utils/constants';

export default function SideMenu() {
  return (
    <aside className="side-menu">
      <div className="side-menu__container">
        <img src={Logo} alt="side-menu__logo'" />
        <ul className="side-menu__list">
          {sideMenuOptions.map((el) => (
            <li key={el.id}>
              <Link className="side-menu__link" to={el.link}>
                <div className="side-menu__item">
                  <Icon
                    icon={el.icon}
                    size="is-small"
                    extraClass="side-menu__icon"
                  />
                  {el.text}
                </div>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </aside>
  );
}
