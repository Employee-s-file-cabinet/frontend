import './ArchiveDataForm.scss';
import 'bulma/css/bulma.min.css';
import { useState } from 'react';

import ArhPriorWork from '../ArhPriorWork/ArhPriorWork';
import ArhFamily from '../ArhFamily/ArhFamily';
import ArhEducation from '../ArhEducation/ArhEducation';
import ArhMilitaryRegistration from '../ArhMilitaryRegistration/ArhMilitaryRegistration';

export default function ArchiveDataForm() {
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
      onSubmit={handleSubmit}
      className="archive-data-form form-active"
    >
      <input
        className={`archive-data-form__button${
          isEdit ? ' button-disabled' : ''
        }`}
        type="button"
        onClick={handleEditButton}
      />

      <ArhPriorWork isEdit={isEdit} />
      <ArhFamily isEdit={isEdit} />
      <ArhEducation isEdit={isEdit} />
      <ArhMilitaryRegistration isEdit={isEdit} />

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
