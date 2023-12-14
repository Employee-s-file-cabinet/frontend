/* eslint-disable no-unused-vars */
import { Link } from 'react-router-dom';
import Logo from '../../assets/images/logo.svg';
import { Icon } from '../UI/Icons/Icons';

const sideMenuOptions = [
  {
    id: 1,
    icon: 'fa-folder',
    link: '/kartoteka_sotrudnikov',
    text: 'Картотека сотрудников',
  },
  { id: 2, icon: 'fa-user', link: '/', text: 'Подбор персонала' },
  { id: 3, icon: 'fa-graduation-cap', link: '/', text: 'Обучение сотрудников' },
  {
    id: 4,
    icon: 'fa-hand-holding-dollar',
    link: '/',
    text: 'Льготы и компенсации',
  },
  { id: 5, icon: 'fa-file', link: '/', text: 'Отчеты' },
  { id: 6, icon: 'fa-gear', link: '/', text: 'Настройки' },
];

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
