/* eslint-disable no-unused-vars */
import { Outlet } from 'react-router-dom';
import SideMenu from '../../components/SideMenu/SideMenu';

export default function GeneralLayout() {
  return (
    <div className="general-layout">
      <SideMenu />
      <Outlet />
    </div>
  );
}
