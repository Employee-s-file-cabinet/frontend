/* eslint-disable no-unused-vars */
import { Outlet } from 'react-router-dom';
import SideMenu from '../../components/SideMenu/SideMenu';

export default function GeneralLayout() {
  return (
    <div className="general-layout">
      <SideMenu />
      <div className="general-layout__container">
        <Outlet />
      </div>
    </div>
  );
}
