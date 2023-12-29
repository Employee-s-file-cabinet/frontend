import './ArchiveDataForm.scss';
import 'bulma/css/bulma.min.css';
import { useState } from 'react';

import PriorWork from '../PriorWork/PriorWork';
import Family from '../Family/Family';

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
      className="archive-data-form archive-data-form"
    >
      <input
        className={`archive-data-form__button${
          isEdit ? ' button-disabled' : ''
        }`}
        type="button"
        onClick={handleEditButton}
      />

      <PriorWork />
      <Family />

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
