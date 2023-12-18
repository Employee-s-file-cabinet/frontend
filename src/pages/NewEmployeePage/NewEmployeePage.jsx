import HeaderMain from '../../components/HeaderMain/HeaderMain';
import Breadcrumb from '../../components/Breadcrumb/Breadcrumb';
import { pagesPath } from '../../utils/constants';

export default function NewEmployeePage() {
  const { home, newEmployee } = pagesPath;
  return (
    <section className="new-employee-page">
      <HeaderMain>
        <Breadcrumb pagesPath={[home, newEmployee]} />
      </HeaderMain>
      <main>
        <h2 className="title is-4">СТРАНИЦА СОЗДАНИЯ НОВОГО СОТРУДНИКА</h2>
      </main>
    </section>
  );
}
