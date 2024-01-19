import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import ProfileInfo from '../../components/ProfileInfo/ProfileInfo';
import InformatoionEmployee from '../../components/InfommatoionEmployee/InformatoionEmployee';
import HeaderMain from '../../components/HeaderMain/HeaderMain';
import Breadcrumb from '../../components/Breadcrumb/Breadcrumb';
import { pagesPath } from '../../utils/constants';
import { getSelectEmployee } from '../../utils/api/UsersApi';

export default function EmployeePage() {
  const { home, employees, employee } = pagesPath;
  const [userData, setUserData] = useState([]);
  const { id } = useParams();
  const currentUser = Number(parseInt(id, 10));

  // Get initial data about user
  useEffect(() => {
    getSelectEmployee(currentUser)
      .then((res) => {
        setUserData(res);
      })
      .catch((err) =>
        // eslint-disable-next-line no-console
        console.log(`Ошибка: ${err} Обратитесь в службу поддержки.`)
      );
  }, [currentUser]);

  useEffect(() => {
    // eslint-disable-next-line no-console
    // console.log(userData, 'userData');
  }, [userData]);

  return (
    <section className="employee-page">
      <HeaderMain>
        <Breadcrumb pagesPath={[home, employees, employee]} />
      </HeaderMain>
      <main className="employee-page__content">
        <ProfileInfo />
        <InformatoionEmployee />
      </main>
    </section>
  );
}
