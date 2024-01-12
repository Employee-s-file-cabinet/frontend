import './CurrentDataForm.scss';
import 'bulma/css/bulma.min.css';
import { useState } from 'react';

import CurrentDFFinance from '../CurrentDFFinance/CurrentDFFinance';
import CurrentDFVacation from '../CurrentDFVacation/CurrentDFVacation';
import CurrentDFTraining from '../CurrentDFTraining/CurrentDFTraining';
import CurrentDFBriefing from '../CurrentDFBriefing/CurrentDFBriefing';
import CurrentDFOptionally from '../CurrentDFOptionally/CurrentDFOptionally';

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
