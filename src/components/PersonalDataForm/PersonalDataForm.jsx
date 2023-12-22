import './PersonalDataForm.scss';
import 'bulma/css/bulma.min.css';
import { useState } from 'react';

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

      <div className="columns is-multiline is-mobile">
        <div className="column">
          <div className="field  field-cell">
            <legend className="label label-type">Дата рождения</legend>
            <div className="control">
              <input className="input" type="date" />
            </div>
          </div>
        </div>
        <div className="column">
          <div className="field  field-cell">
            <legend className="label label-type">Место рождения</legend>
            <div className="control">
              <input className="input" type="text" />
            </div>
          </div>
        </div>
        <div className="column">
          <div className="field  field-cell">
            <legend className="label label-type">Пол</legend>
            <div className="control">
              <div className="select ">
                <select className="select-field">
                  <option>Женский</option>
                  <option>Мужской</option>
                </select>
              </div>
            </div>
          </div>
        </div>
        <div className="column">
          <div className="field  field-cell">
            <legend className="label label-type">Паспорт</legend>
            <div className="control">
              <input className="input" type="text" placeholder="4651 827156" />
            </div>
          </div>
        </div>
        <div className="column">
          <div className="field  field-cell">
            <legend className="label label-type">Дата выдачи</legend>
            <div className="control">
              <input className="input" type="date" />
            </div>
          </div>
        </div>
        <div className="column">
          <div className="field  field-cell">
            <legend className="label label-type">Код подразделения</legend>
            <div className="control">
              <input className="input" type="text" placeholder="740-873" />
            </div>
          </div>
        </div>
        <div className="column is-one-third">
          <div className="field  field-cell">
            <legend className="label label-type">Кем выдан</legend>
            <div className="control">
              <input
                className="input"
                type="text"
                placeholder="Отделением УФМС России в г. Нижний Новогород"
              />
            </div>
          </div>
        </div>
        <div className="column">
          <div className="field  field-cell-big">
            <legend className="label label-type">Скан документа</legend>
            <div className="file has-name  is-right is-fullwidth">
              <legend className="file-label label-type">
                <input className="file-input" type="file" name="resume" />
                <span className="file-cta">
                  <span className="file-icon">
                    <i className="fas fa-upload" />
                  </span>
                  <span className="file-label label-type">Выбрать файл</span>
                </span>
                <span className="file-name file-name-color">
                  Screen Shot 2017-07-29 at 15.54.25.png
                </span>
              </legend>
            </div>
          </div>
        </div>
        <div className="column is-one-third">
          <div className="field  field-cell">
            <legend className="label label-type">ИНН</legend>
            <div className="control">
              <input className="input" type="text" placeholder="502092917874" />
            </div>
          </div>
        </div>
        <div className="column">
          <div className="field  field-cell-big">
            <legend className="label label-type">Скан документа</legend>
            <div className="file has-name  is-right is-fullwidth">
              <legend className="file-label label-type">
                <input className="file-input" type="file" name="resume" />
                <span className="file-cta">
                  <span className="file-icon">
                    <i className="fas fa-upload" />
                  </span>
                  <span className="file-label">Выбрать файл</span>
                </span>
                <span className="file-name file-name-color">
                  Screen Shot 2017-07-29 at 15.54.25.png
                </span>
              </legend>
            </div>
          </div>
        </div>
        <div className="column is-one-third">
          <div className="field  field-cell">
            <legend className="label label-type">СНИЛС</legend>
            <div className="control">
              <input
                className="input"
                type="text"
                placeholder="492-850-880-33"
              />
            </div>
          </div>
        </div>
        <div className="column">
          <div className="field  field-cell-big">
            <legend className="label label-type">Скан документа</legend>
            <div className="file has-name  is-right is-fullwidth">
              <legend className="file-label label-type">
                <input className="file-input" type="file" name="resume" />
                <span className="file-cta">
                  <span className="file-icon">
                    <i className="fas fa-upload" />
                  </span>
                  <span className="file-label">Выбрать файл</span>
                </span>
                <span className="file-name file-name-color">
                  Screen Shot 2017-07-29 at 15.54.25.png
                </span>
              </legend>
            </div>
          </div>
        </div>
        <div className="column">
          <div className="field  field-cell-big">
            <legend className="label label-type">Адрес регистрации</legend>
            <div className="control">
              <input
                className="input"
                type="text"
                placeholder="Россия, г. Нижний Новгород, Мичурина ул., д. 9 кв.6"
              />
            </div>
            <legend className="checkbox checkbox__legend">
              <input type="checkbox" className="checkbox__input" />
              Совпадает с адресом проживания
            </legend>
          </div>
        </div>
        <div className="column is-one-third">
          <div className="field  field-cell">
            <legend className="label label-type">Гражданство</legend>
            <div className="control">
              <input className="input" type="text" placeholder="РФ" />
            </div>
          </div>
        </div>
        <div className="column">
          <div className="field  field-cell-big">
            <legend className="label label-type">Адрес проживания</legend>
            <div className="control">
              <input
                className="input"
                type="text"
                placeholder="Россия, г. Нижний Новгород, Мичурина ул., д. 9 кв.6"
              />
            </div>
          </div>
        </div>
        <div className="column">
          <div className="field  field-cell-big">
            <legend className="label label-type label-type-long">
              Согласие на обработку персональных данных
            </legend>
            <div className="file has-name  is-right is-fullwidth">
              <legend className="file-label label-type">
                <input className="file-input" type="file" name="resume" />
                <span className="file-cta">
                  <span className="file-icon">
                    <i className="fas fa-upload" />
                  </span>
                  <span className="file-label">Выбрать файл</span>
                </span>
                <span className="file-name file-name-color">
                  Screen Shot 2017-07-29 at 15.54.25.png
                </span>
              </legend>
            </div>
          </div>
        </div>
        <div className="buttons-group">
          <button
            className={` button-save${!isEdit ? ' button-disabled' : ''}`}
          >
            Сохранить
          </button>
          <button
            className={` button-reset${!isEdit ? ' button-disabled' : ''}`}
            type="button"
          >
            Сбросить изменения
          </button>
        </div>
      </div>
    </form>
  );
}
