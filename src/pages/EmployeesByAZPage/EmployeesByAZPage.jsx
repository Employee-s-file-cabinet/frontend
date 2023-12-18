import HeaderMain from '../../components/HeaderMain/HeaderMain';
import Breadcrumb from '../../components/Breadcrumb/Breadcrumb';
import { pagesPath } from '../../utils/constants';

export default function EmployeesByAZPage() {
  const { home, employees } = pagesPath;
  return (
    <section className="employees-az-page">
      <HeaderMain>
        <Breadcrumb pagesPath={[home, employees]} />
      </HeaderMain>
      <main>
        <h2 className="title is-4">СТРАНИЦА ВСЕХ СОТРУДНИКОВ ПО АЛФАВИТУ</h2>
      </main>
    </section>
  );
}
