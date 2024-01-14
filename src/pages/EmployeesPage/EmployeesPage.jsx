import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import HeaderMain from '../../components/HeaderMain/HeaderMain';
import Breadcrumb from '../../components/Breadcrumb/Breadcrumb';
import { pagesPath } from '../../utils/constants';
import EmployeesList from '../../components/EmployeesList/EmployeesList';
import EmployeesSearch from '../../components/EmployeesSearch/EmployeesSearch';
import EmployeesPaginations from '../../components/EmployeesPaginations/EmployeesPaginations';
import { getEmployees } from '../../utils/api/UsersApi';
import { MainButton } from '../../components/UI/Buttons/MainButton';

export default function EmployeesPage({
  lastPage,
  usersList,
  setUsersList,
  setLastPage,
}) {
  const [searchFiltration, setSearchFiltration] = useState('alphabet');
  const [searchQuery, setSearchQuery] = useState('');
  const [previousSearchQuery, setPreviousSearchQuery] = useState('');
  const { filterTeg, pageNumber } = useParams();
  const navigate = useNavigate();
  const currentPage = Number.parseInt(pageNumber, 10);
  const limitRowsOnPage = 1;

  // Change users list after change page
  useEffect(() => {
    if (searchQuery !== previousSearchQuery) {
      // eslint-disable-next-line no-console
      console.log('privet');
      // eslint-disable-next-line no-unused-expressions
      searchQuery
        ? navigate(`/employees/${filterTeg}/${searchQuery}/1`)
        : navigate(`/employees/${filterTeg}/1`);
    }
    getEmployees(limitRowsOnPage, searchQuery, currentPage)
      .then((res) => {
        setUsersList(res.users);
        setLastPage(res.total_pages);
      })
      .catch((err) =>
        // eslint-disable-next-line no-console
        console.log(`Ошибка: ${err} Обратитесь в службу поддержки.`)
      );
    setPreviousSearchQuery(searchQuery);
    // eslint-disable-next-line
  }, [currentPage, searchQuery, filterTeg]);

  const { home, employees } = pagesPath;
  return (
    <section className="employees">
      <HeaderMain>
        <Breadcrumb pagesPath={[home, employees]} />
      </HeaderMain>
      <main className="employees__content">
        <div className="employees__container">
          <h2 className="employees__title">Картотека сотрудников</h2>
          <MainButton theme="is-primary">
            <span>Добавить сотрудника</span>
            <span className="icon is-small">
              <i className="fas fa-plus" />
            </span>
          </MainButton>
        </div>
        <EmployeesSearch
          searchFiltration={searchFiltration}
          setSearchFiltration={setSearchFiltration}
          setSearchQuery={setSearchQuery}
        />
        <EmployeesList usersList={usersList} />
        <EmployeesPaginations lastPage={lastPage} />
      </main>
    </section>
  );
}
