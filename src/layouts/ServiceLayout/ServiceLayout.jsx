import { Outlet } from 'react-router-dom';
import Header from '../../components/Header/Header';
import { Footer } from '../../components/Footer/Footer';

export default function ServiceLayout() {
  return (
    <div className="service-layout">
      <Header />
      <main>
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}
