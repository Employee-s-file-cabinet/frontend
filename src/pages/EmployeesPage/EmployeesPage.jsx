import React, { useState, useEffect } from 'react';
import HeaderMain from '../../components/HeaderMain/HeaderMain';
import Breadcrumb from '../../components/Breadcrumb/Breadcrumb';
import { pagesPath } from '../../utils/constants';
import EmployeesList from '../../components/EmployeesList/EmployeesList';
import EmployeesSearch from '../../components/EmployeesSearch/EmployeesSearch';
import EmployeesPaginations from '../../components/EmployeesPaginations/EmployeesPaginations';
import { serviceMock } from '../../utils/ServiceMock';

export default function EmployeesPage({ lastPage }) {
  const [employeesData, setEmployeesData] = useState([]);
  const [searchFiltration, setSearchFiltration] = useState('alphabet');

  useEffect(() => {
    serviceMock
      .getEmployees()
      .then((res) => {
        setEmployeesData(res);
      })
      // eslint-disable-next-line no-console
      .catch((err) =>
        console.log(`
      Ошибка: ${err}
      Обратитесь в службу поддержки.
      `)
      );
  }, []);

  const { home, employees } = pagesPath;
  return (
    <section className="employees">
      <HeaderMain>
        <Breadcrumb pagesPath={[home, employees]} />
      </HeaderMain>
      <main className="employees__content">
        <h2 className="employees__title">Картотека сотрудников</h2>
        <EmployeesSearch
          searchFiltration={searchFiltration}
          setSearchFiltration={setSearchFiltration}
        />
        <EmployeesList employeesData={employeesData} />
        <EmployeesPaginations lastPage={lastPage} />
      </main>
    </section>
  );
}
