import React, { useState, useEffect } from 'react';
import HeaderMain from '../../components/HeaderMain/HeaderMain';
import Breadcrumb from '../../components/Breadcrumb/Breadcrumb';
import { pagesPath } from '../../utils/constants';
import EmployeesList from '../../components/EmployeesList/EmployeesList';
import EmployeesSearch from '../../components/EmployeesSearch/EmployeesSearch';
import EmployeesPaginations from '../../components/EmployeesPaginations/EmployeesPaginations';
import { serviceMock } from '../../utils/ServiceMock';

export default function EmployeesPage() {
  const [employeesData, setEmployeesData] = useState([]);
  const [isCurrentPage, setIsCurrentPage] = useState(1);
  const [isSearchFiltration, setIsSearchFiltration] = useState('alphabet');
  const lastPage = 88;

  useEffect(() => {
    serviceMock
      .getEmployees()
      .then((res) => {
        setEmployeesData(res);
      })
      .catch((err) => console.log(`Ошибка: ${err}`));
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
          isSearchFiltration={isSearchFiltration}
          setIsSearchFiltration={setIsSearchFiltration}
        />
        <EmployeesList employeesData={employeesData} />
        <EmployeesPaginations
          isCurrentPage={isCurrentPage}
          setIsCurrentPage={setIsCurrentPage}
          lastPage={lastPage}
        />
      </main>
    </section>
  );
}
