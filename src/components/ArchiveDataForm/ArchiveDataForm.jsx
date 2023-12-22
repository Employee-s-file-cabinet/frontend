import './ArchiveDataForm.scss';
import 'bulma/css/bulma.min.css';
import { useState } from 'react';

import Experience from '../Experience/Experience';
import Awards from '../Awards/Awards';

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
      <div className="columns is-multiline is-mobile">
        <div className="column is-one-quarter">
          <legend className="label label label-horizontal label-type">
            Опыт работы
          </legend>
        </div>
        <div className="column ">
          <Experience isEdit={isEdit} />
        </div>
        <button className="archive-data-form__add">Добавить +</button>
      </div>
      <div className="columns is-multiline is-mobile">
        <div className="column is-one-quarter">
          <legend className="label label label-horizontal label-type">
            Награды
          </legend>
        </div>
        <div className="column ">
          <Awards isEdit={isEdit} />
        </div>
        <button className="archive-data-form__add">Добавить +</button>
      </div>
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
