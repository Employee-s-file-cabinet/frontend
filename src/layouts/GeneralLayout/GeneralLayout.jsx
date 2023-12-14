/* eslint-disable no-unused-vars */
import { Outlet } from 'react-router-dom';
import SideMenu from '../../components/SideMenu/SideMenu';
import HeaderMain from '../../components/HeaderMain/HeaderMain';

export default function GeneralLayout() {
  return (
    <div className="general-layout">
      <SideMenu />
      <div className="general-layout__container">
        <HeaderMain />
        <main>
          <Outlet />
        </main>
      </div>
    </div>
  );
}
