/* eslint-disable no-unused-vars */
import React, { useState, useEffect, useContext } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { GeneralContext } from '../../contexts/GeneralContext';
import { CurrentUserContext } from '../../contexts/CurrentUserContext';
import HeaderMain from '../../components/HeaderMain/HeaderMain';
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
  const { setIsFetching } = useContext(GeneralContext);
  const { setCurrentUser } = useContext(CurrentUserContext);
  const [searchFiltration, setSearchFiltration] = useState('alphabet');
  const [searchQuery, setSearchQuery] = useState('');
  const [previousSearchQuery, setPreviousSearchQuery] = useState('');
  const { filterTeg, pageNumber } = useParams();
  const navigate = useNavigate();
  const currentPage = parseInt(pageNumber, 10);
  const limitRowsOnPage = 10;

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
        // eslint-disable-next-line no-console
        console.log(res.users, 'res.users');
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

  useEffect(() => {
    setIsFetching(true);
    setCurrentUser({});
  }, [setIsFetching, setCurrentUser]);

  return (
    <section className="employees">
      <HeaderMain />
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
