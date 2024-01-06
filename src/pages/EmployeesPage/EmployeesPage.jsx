import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import HeaderMain from '../../components/HeaderMain/HeaderMain';
import Breadcrumb from '../../components/Breadcrumb/Breadcrumb';
import { pagesPath } from '../../utils/constants';
import EmployeesList from '../../components/EmployeesList/EmployeesList';
import EmployeesSearch from '../../components/EmployeesSearch/EmployeesSearch';
import EmployeesPaginations from '../../components/EmployeesPaginations/EmployeesPaginations';
import { getEmployees } from '../../utils/UsersApi';

export default function EmployeesPage({ lastPage, usersList, setUsersList }) {
  const [searchFiltration, setSearchFiltration] = useState('alphabet');
  const { pageNumber } = useParams();
  const currentPage = Number(parseInt(pageNumber, 10));

  // Change users list after change page
  useEffect(() => {
    console.log(currentPage);
    getEmployees(2, '', currentPage)
      .then((res) => {
        setUsersList(res.users);
        console.log(res.users, 'res.users');
      })
      .catch((err) =>
        // eslint-disable-next-line no-console
        console.log(`Ошибка: ${err} Обратитесь в службу поддержки.`)
      );
  }, [currentPage, setUsersList]);

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
        <EmployeesList usersList={usersList} />
        <EmployeesPaginations lastPage={lastPage} />
      </main>
    </section>
  );
}
