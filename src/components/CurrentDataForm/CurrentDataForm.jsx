import './CurrentDataForm.scss';
import 'bulma/css/bulma.min.css';
import { useState } from 'react';

import CurrentDFFinance from '../CurrentDFFinance/CurrentDFFinance';
import CurrentDFVacation from '../CurrentDFVacation/CurrentDFVacation';
import CurrentDFTraining from '../CurrentDFTraining/CurrentDFTraining';
import CurrentDFBriefing from '../CurrentDFBriefing/CurrentDFBriefing';
import CurrentDFOptionally from '../CurrentDFOptionally/CurrentDFOptionally';

// import Vacation from '../Vacation/Vacation';
// import CompletedTraining from '../CompletedTraining/CompletedTraining';
// import PlannedTraining from '../PlannedTraining/PlannedTraining';
// import Optionally from '../Optionally/Optionally';

export default function CurrentDataForm() {
  const [isEdit, setIsEdit] = useState(false);

  function handleEditButton() {
    setIsEdit(true);
  }

  function handleSubmit(evt) {
    evt.preventDefault();
    setIsEdit(false);
  }

  return (
    <form
      action="#"
      method="post"
      className="current-data-form form-active"
      onSubmit={handleSubmit}
    >
      <input
        className={`current-data-form__button${
          isEdit ? ' button-disabled' : ''
        }`}
        type="button"
        onClick={handleEditButton}
      />
      <CurrentDFFinance isEdit={isEdit} />
      <CurrentDFVacation isEdit={isEdit} />
      <CurrentDFTraining isEdit={isEdit} />
      <CurrentDFBriefing isEdit={isEdit} />
      <CurrentDFOptionally isEdit={isEdit} />

      {/*

      <div className="current-data-form__group">
        <h5 className="current-data-form__title">Обучение</h5>
      </div>
      <div className="columns is-multiline is-mobile">
        <div className="column is-one-quarter">
          <legend className="label label label-horizontal label-type">
            Пройденное обучение
          </legend>
        </div>
        <div className="column career-development-column">
          <CompletedTraining isEdit={isEdit} />
        </div>
        <button className="current-data-form__add">Добавить строки</button>
      </div>
      <div className="columns is-multiline is-mobile">
        <div className="column is-one-quarter">
          <legend className="label label label-horizontal label-type">
            Планируемое обучение
          </legend>
        </div>
        <div className="column career-development-column">
          <PlannedTraining isEdit={isEdit} />
        </div>
        <button className="current-data-form__add">Добавить строки</button>
      </div>
      <div className="current-data-form__group">
        <h5 className="current-data-form__title">Дополнительно</h5>
      </div>
      <Optionally isEdit={isEdit} /> */}
      <div className="buttons-group">
        <button className={` button-save${!isEdit ? ' button-disabled' : ''}`}>
          Сохранить
        </button>
        <button
          className={` button-reset${!isEdit ? ' button-disabled' : ''}`}
          type="button"
        >
          Сбросить изменения
        </button>
      </div>
    </form>
  );
}
