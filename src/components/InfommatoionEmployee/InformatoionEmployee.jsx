import './InformatoionEmployee.scss';

// import { useState } from 'react';

// import PersonalDataForm from '../PersonalDataForm/PersonalDataForm';
// import PersonalDataFormEdit from '../PersonalDataFormEdit/PersonalDataFormEdit';
import CurrentDataForm from '../CurrentDataForm/CurrentDataForm';


export default function InformatoionEmployee() {

  const activeLi = 'personal';

  // const [activeLi, setActiveli] = useState('personal');

  // function handlePersonalLi() {
  //   setActiveli('personal');
  // }

  return(
    <section className='informatoion-employee'>
      <nav className='informatoion-employee__nav'

      >
        <li className={`informatoion-employee__nav-link${(activeLi==='personal') ? " informatoion-employee__nav-link_active" : ""}`}

        >
          Личная информация
          </li>
        <li className={`informatoion-employee__nav-link${(activeLi==='current') ? " informatoion-employee__nav-link_active" : ""}`}
        >
          Текущая информация
        </li>

        <li className={`informatoion-employee__nav-link${(activeLi==='archive') ? " informatoion-employee__nav-link_active" : ""}`}
        >
          Архивная информация
        </li>
      </nav>
      <div className='form-employee'>
        {/* <PersonalDataFormEdit /> */}
        <CurrentDataForm />

      </div>

    </section>
  );
}
