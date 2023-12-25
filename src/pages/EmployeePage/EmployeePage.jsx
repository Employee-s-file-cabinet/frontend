import ProfileInfo from '../../components/ProfileInfo/ProfileInfo';
import InformatoionEmployee from '../../components/InfommatoionEmployee/InformatoionEmployee';
import HeaderMain from '../../components/HeaderMain/HeaderMain';
import Breadcrumb from '../../components/Breadcrumb/Breadcrumb';
import { pagesPath } from '../../utils/constants';

export default function EmployeePage() {
  const { home, employees, employee } = pagesPath;
  return (
    <section className="employee-page">
      <HeaderMain>
        <Breadcrumb pagesPath={[home, employees, employee]} />
      </HeaderMain>
      <main className="employee-page__content">
        <ProfileInfo />
        <InformatoionEmployee />
      </main>
    </section>
  );
}
