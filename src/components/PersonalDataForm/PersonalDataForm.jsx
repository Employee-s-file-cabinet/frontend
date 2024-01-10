import './PersonalDataForm.scss';
import 'bulma/css/bulma.min.css';
import { useState } from 'react';

import PersonalDFOpenData from '../PersonalDFOpenData/PersonalDFOpenData';
import PersonalDFPassportData from '../PersonalDFPassportData/PersonalDFPassportData';
import PersonalDForeignEmployeetData from '../PersonalDForeignEmployeetData/PersonalDForeignEmployeetData';
import PersonalDOtherDocumentstData from '../PersonalDOtherDocumentstData/PersonalDOtherDocumentstData';

export default function PersonalDataForm() {
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
      className="personal-data-form form-active"
      onSubmit={handleSubmit}
    >
      <input
        className={`personal-data-form__button${
          isEdit ? ' button-disabled' : ''
        }`}
        type="button"
        onClick={handleEditButton}
      />

      <PersonalDFOpenData isEdit={isEdit} />
      <PersonalDFPassportData isEdit={isEdit} />
      <PersonalDForeignEmployeetData isEdit={isEdit} />
      <PersonalDOtherDocumentstData isEdit={isEdit} />

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
