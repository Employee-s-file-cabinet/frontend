import { Outlet } from 'react-router-dom';

export default function GeneralLayout() {
  return (
    <div className="general-layout">
      <main>
        <Outlet />
      </main>
    </div>
  );
}
