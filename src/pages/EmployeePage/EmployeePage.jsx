/* eslint-disable no-unused-vars */
import React, { useState, useEffect, useContext } from 'react';
import { useParams, useLocation } from 'react-router-dom';
import ProfileInfo from '../../components/ProfileInfo/ProfileInfo';
import InformatoionEmployee from '../../components/InfommatoionEmployee/InformatoionEmployee';
import HeaderMain from '../../components/HeaderMain/HeaderMain';
import Breadcrumb from '../../components/Breadcrumb/Breadcrumb';
import { pagesPath } from '../../utils/constants';
import Preloader from '../../components/Preloader/Preloader';
import {
  getSelectEmployee,
  getEmployeeVacations,
  getEmployeePasports,
  getEmployeeEducations,
  getEmployeeTrainings,
} from '../../utils/api/UsersApi';
import { CurrentUserContext } from '../../contexts/CurrentUserContext';
import { GeneralContext } from '../../contexts/GeneralContext';

export default function EmployeePage() {
  const location = useLocation();
  const { home, employee } = pagesPath;
  const updatedEmployee = { ...employee, path: location.pathname };
  const { id } = useParams();
  const currentUserId = Number(parseInt(id, 10));
  const { setCurrentUser } = useContext(CurrentUserContext);
  const { isLoggedIn, isFetching, setIsFetching } = useContext(GeneralContext);

  // Get initial data about user
  // useEffect(() => {
  //   setIsFetching(true);
  //   getSelectEmployee(currentUserId)
  //     .then((res) => {
  //       // eslint-disable-next-line no-console
  //       setCurrentUser(res);
  //       setTimeout(() => {
  //         setIsFetching(false);
  //       }, 250);
  //     })
  //     .catch((err) =>
  //       // eslint-disable-next-line no-console
  //       console.log(`Ошибка: ${err} Обратитесь в службу поддержки.`)
  //     );

  //   getEmployeePasports(currentUserId)
  //     .then((res) => {
  //       // eslint-disable-next-line no-console
  //       console.log(res);
  //     })
  //     .catch((err) =>
  //       // eslint-disable-next-line no-console
  //       console.log(`Ошибка: ${err} Обратитесь в службу поддержки.`)
  //     );

  //   getEmployeeVacations(currentUserId)
  //     .then((res) => {
  //       // eslint-disable-next-line no-console
  //       console.log(res);
  //     })
  //     .catch((err) =>
  //       // eslint-disable-next-line no-console
  //       console.log(`Ошибка: ${err} Обратитесь в службу поддержки.`)
  //     );

  //   getEmployeeEducations(currentUserId)
  //     .then((res) => {
  //       // eslint-disable-next-line no-console
  //       console.log(res);
  //     })
  //     .catch((err) =>
  //       // eslint-disable-next-line no-console
  //       console.log(`Ошибка: ${err} Обратитесь в службу поддержки.`)
  //     );

  //   getEmployeeTrainings(currentUserId)
  //     .then((res) => {
  //       // eslint-disable-next-line no-console
  //       console.log(res);
  //     })
  //     .catch((err) =>
  //       // eslint-disable-next-line no-console
  //       console.log(`Ошибка: ${err} Обратитесь в службу поддержки.`)
  //     );
  //   // eslint-disable-next-line
  // }, [currentUserId]);

  useEffect(() => {
    if (isLoggedIn) {
      setIsFetching(true);
      getSelectEmployee(currentUserId)
        .then((res) => {
          setCurrentUser(res);
          setTimeout(() => {
            setIsFetching(false);
          }, 250);
        })
        .catch((err) =>
          // eslint-disable-next-line no-console
          console.log(`Ошибка: ${err} Обратитесь в службу поддержки.`)
        );
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [currentUserId]);

  return (
    <section className="employee-page">
      <HeaderMain>
        <Breadcrumb pagesPath={[home, updatedEmployee]} />
      </HeaderMain>
      <main className="employee-page__content">
        {isFetching ? (
          <Preloader />
        ) : (
          <div>
            <ProfileInfo />
            <InformatoionEmployee />
          </div>
        )}
      </main>
    </section>
  );
}
