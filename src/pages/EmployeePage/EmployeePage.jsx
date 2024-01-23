/* eslint-disable no-unused-vars */
import React, { useState, useEffect, useContext } from 'react';
import { useParams, useLocation } from 'react-router-dom';
import ProfileInfo from '../../components/ProfileInfo/ProfileInfo';
import InformatoionEmployee from '../../components/InfommatoionEmployee/InformatoionEmployee';
import HeaderMain from '../../components/HeaderMain/HeaderMain';
import Breadcrumb from '../../components/Breadcrumb/Breadcrumb';
import { pagesPath } from '../../utils/constants';
import {
  getSelectEmployee,
  getEmployeeVacations,
  getEmployeePasports,
  getEmployeeEducations,
  getEmployeeTrainings,
} from '../../utils/api/UsersApi';
import { CurrentUserContext } from '../../contexts/CurrentUserContext';

export default function EmployeePage() {
  const location = useLocation();
  const { home, employee } = pagesPath;
  const updatedEmployee = { ...employee, path: location.pathname };
  const { id } = useParams();
  const currentUserId = Number(parseInt(id, 10));
  // eslint-disable-next-line
  const { setCurrentUser } = useContext(CurrentUserContext);

  // Get initial data about user
  useEffect(() => {
    getSelectEmployee(currentUserId)
      .then((res) => {
        // eslint-disable-next-line no-console
        setCurrentUser(res);
      })
      .catch((err) =>
        // eslint-disable-next-line no-console
        console.log(`Ошибка: ${err} Обратитесь в службу поддержки.`)
      );

    getEmployeePasports(currentUserId)
      .then((res) => {
        // eslint-disable-next-line no-console
        console.log(res);
      })
      .catch((err) =>
        // eslint-disable-next-line no-console
        console.log(`Ошибка: ${err} Обратитесь в службу поддержки.`)
      );

    getEmployeeVacations(currentUserId)
      .then((res) => {
        // eslint-disable-next-line no-console
        console.log(res);
      })
      .catch((err) =>
        // eslint-disable-next-line no-console
        console.log(`Ошибка: ${err} Обратитесь в службу поддержки.`)
      );

    getEmployeeEducations(currentUserId)
      .then((res) => {
        // eslint-disable-next-line no-console
        console.log(res);
      })
      .catch((err) =>
        // eslint-disable-next-line no-console
        console.log(`Ошибка: ${err} Обратитесь в службу поддержки.`)
      );

    getEmployeeTrainings(currentUserId)
      .then((res) => {
        // eslint-disable-next-line no-console
        console.log(res);
      })
      .catch((err) =>
        // eslint-disable-next-line no-console
        console.log(`Ошибка: ${err} Обратитесь в службу поддержки.`)
      );
    // eslint-disable-next-line
  }, [currentUserId]);

  return (
    <section className="employee-page">
      <HeaderMain>
        <Breadcrumb pagesPath={[home, updatedEmployee]} />
      </HeaderMain>
      <main className="employee-page__content">
        <ProfileInfo />
        <InformatoionEmployee />
      </main>
    </section>
  );
}
