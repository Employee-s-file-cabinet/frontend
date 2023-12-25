import React, { useState, useEffect } from 'react';
import HeaderMain from '../../components/HeaderMain/HeaderMain';
import Breadcrumb from '../../components/Breadcrumb/Breadcrumb';
import { pagesPath } from '../../utils/constants';
import { MainField } from '../../components/UI/Fields/MainField';
import { Icon } from '../../components/UI/Icons/Icons';
import { MainButton } from '../../components/UI/Buttons/MainButton';
import EmployeesList from '../../components/EmployeesList/EmployeesList';
import { serviceMock } from '../../utils/ServiceMock';

export default function EmployeesPage() {
  const [employeesData, setEmployeesData] = useState([]);

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
        <form className="employees__search-container">
          <fieldset className="employees__search-fieldset">
            <MainField
              type="text"
              theme=""
              size="is-normal"
              extraClass="is-fullwidth"
              placeholder="       Поиск"
              icon="has-icons-right"
              // focus={handleFocus}
              // blur={handleBlur}
              // register={register('email')}
              // errors={errors.email?.message}
            >
              <Icon
                icon="fa-magnifying-glass"
                size="is-small"
                position="is-left"
              />
            </MainField>
          </fieldset>
          <div className="employees__filter-container buttons has-addons">
            <MainButton
              size="is-normal"
              theme="is-primary"
              extraClass=""
              type="button"
            >
              От А до Я
            </MainButton>
            <MainButton size="is-normal" theme="" extraClass="" type="button">
              Отделы
            </MainButton>
            <MainButton size="is-normal" theme="" extraClass="" type="button">
              Орг.структура
            </MainButton>
            <MainButton size="is-normal" theme="" extraClass="" type="button">
              Орг.структура полная
            </MainButton>
          </div>
        </form>
        <EmployeesList employeesData={employeesData} />
        <nav
          className="pagination is-centered employees__pagination-container"
          role="navigation"
          aria-label="pagination"
        >
          {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
          <a
            className="pagination-previous"
            href="#"
            onClick={(e) => e.preventDefault()}
          >
            Предыдущая
          </a>
          {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
          <a
            className="pagination-next"
            href="#"
            onClick={(e) => e.preventDefault()}
          >
            Следующая
          </a>
          <ul className="pagination-list">
            <li>
              {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
              <a
                className="pagination-link"
                aria-label="Goto page 1"
                href="#"
                onClick={(e) => e.preventDefault()}
              >
                1
              </a>
            </li>
            <li>
              <span className="pagination-ellipsis">&hellip;</span>
            </li>
            <li>
              {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
              <a
                className="pagination-link"
                aria-label="Goto page 45"
                href="#"
                onClick={(e) => e.preventDefault()}
              >
                45
              </a>
            </li>
            <li>
              {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
              <a
                className="pagination-link is-current"
                aria-label="Page 46"
                aria-current="page"
                href="#"
                onClick={(e) => e.preventDefault()}
              >
                46
              </a>
            </li>
            <li>
              {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
              <a
                className="pagination-link"
                aria-label="Goto page 47"
                href="#"
                onClick={(e) => e.preventDefault()}
              >
                47
              </a>
            </li>
            <li>
              <span className="pagination-ellipsis">&hellip;</span>
            </li>
            <li>
              {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
              <a
                className="pagination-link"
                aria-label="Goto page 86"
                href="#"
                onClick={(e) => e.preventDefault()}
              >
                86
              </a>
            </li>
          </ul>
        </nav>
      </main>
    </section>
  );
}
