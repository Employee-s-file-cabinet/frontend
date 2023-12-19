import HeaderMain from '../../components/HeaderMain/HeaderMain';
import Breadcrumb from '../../components/Breadcrumb/Breadcrumb';
import { pagesPath } from '../../utils/constants';

export default function CompanyStructurePage() {
  const { home, companyStructure } = pagesPath;
  return (
    <section className="company-structure-page">
      <HeaderMain>
        <Breadcrumb pagesPath={[home, companyStructure]} />
      </HeaderMain>
      <main>
        <h2 className="title is-4">СТРАНИЦА СТРУКТУРЫ КОМПАНИИ</h2>
      </main>
    </section>
  );
}
