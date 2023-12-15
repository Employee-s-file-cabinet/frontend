import './InformatoionEmployee.scss';

import { useState } from 'react';

import PersonalDataForm from '../PersonalDataForm/PersonalDataForm';
import CurrentDataForm from '../CurrentDataForm/CurrentDataForm';

export default function InformatoionEmployee() {
  // const activeLi = 'current';

  const [activeLi, setActiveli] = useState('personal');

  function handlePersonalLi() {
    setActiveli('personal');
  }

  function handleCurrentLi() {
    setActiveli('current');
  }

  function handleArchiveLi() {
    setActiveli('current');
  }

  return (
    <section className="informatoion-employee">
      <nav className="informatoion-employee__nav">
        <button
          className={`informatoion-employee__nav-link${
            activeLi === 'personal'
              ? ' informatoion-employee__nav-link_active'
              : ''
          }`}
          onClick={handlePersonalLi}
        >
          Личная информация
        </button>
        <button
          className={`informatoion-employee__nav-link${
            activeLi === 'current'
              ? ' informatoion-employee__nav-link_active'
              : ''
          }`}
          onClick={handleCurrentLi}
        >
          Текущая информация
        </button>

        <button
          className={`informatoion-employee__nav-link${
            activeLi === 'archive'
              ? ' informatoion-employee__nav-link_active'
              : ''
          }`}
          onClick={handleArchiveLi}
        >
          Архивная информация
        </button>
      </nav>
      <div className="form-employee">
        {activeLi === 'personal' ? <PersonalDataForm /> : ''}
        {activeLi === 'current' ? <CurrentDataForm /> : ''}
        {activeLi === 'archive' ? <CurrentDataForm /> : ''}
      </div>
    </section>
  );
}
