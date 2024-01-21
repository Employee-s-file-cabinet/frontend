/* eslint-disable no-unused-vars */
import { Link } from 'react-router-dom';
import { Icon } from '../UI/Icons/Icons';
import { sideMenuOptions } from '../../utils/constants';
import { Logo } from '../Logo/Logo';

export default function SideMenu() {
  return (
    <aside className="side-menu">
      <div className="side-menu__container">
        <Logo extraClass="logo_size_small" />
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
