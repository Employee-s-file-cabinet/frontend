import './CurrentDataForm.scss';
import 'bulma/css/bulma.min.css';
import { useState } from 'react';

import CareerDevelopment from '../CareerDevelopment/CareerDevelopment';
import Benefits from '../Benefits/Benefits';
import Vacation from '../Vacation/Vacation';
import CompletedTraining from '../CompletedTraining/CompletedTraining';
import PlannedTraining from '../PlannedTraining/PlannedTraining';
import Optionally from '../Optionally/Optionally';

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
      <div className="current-data-form__group">
        <h5 className="current-data-form__title">Финансы</h5>
        <input
          className={`current-data-form__button${
            isEdit ? ' button-disabled' : ''
          }`}
          type="button"
          onClick={handleEditButton}
        />
      </div>

      <div className="column">
        <div className="field is-horizontal ">
          <legend className="label label-horizontal">Трудовой договор</legend>
          <div className="control control-horizontal">
            <input
              className="input input-horizontal"
              type="text"
              placeholder="№4486"
              disabled={!isEdit}
            />
          </div>
        </div>
      </div>
      <div className="column">
        <div className="field is-horizontal field-horizontal">
          <legend className="label label label-horizontal">
            Скан документа
          </legend>
          <div className="file has-name is-right">
            <legend className="file-label">
              <input
                className="file-input"
                type="file"
                name="resume"
                disabled={!isEdit}
              />
              <span className="file-cta">
                <span className="file-icon">
                  <i className="fas fa-upload" />
                </span>
                <span className="file-label">Выбрать файл</span>
              </span>
              <span className="file-name">
                Screen Shot 2017-07-29 at 15.54.25.png
              </span>
            </legend>
          </div>
        </div>
      </div>
      <div className="column">
        <div className="field is-horizontal ">
          <legend className="label label-horizontal">Тип договора</legend>
          <div className="select is-primary">
            <select className="control-horizontal" disabled={!isEdit}>
              <option>Бессрочный</option>
              <option>Срочный</option>
            </select>
          </div>
        </div>
      </div>
      <div className="column">
        <div className="field is-horizontal ">
          <legend className="label label-horizontal">Дата договора</legend>
          <div className="control control-horizontal">
            <input
              className="input input-horizontal"
              type="date"
              disabled={!isEdit}
            />
          </div>
        </div>
      </div>
      <div className="column">
        <div className="field is-horizontal ">
          <legend className="label label-horizontal">Трудовой договор</legend>
          <div className="select is-primary">
            <select className="control-horizontal" disabled={!isEdit}>
              <option>Офис</option>
              <option>Удаленная</option>
              <option>Смешанная</option>
            </select>
          </div>
        </div>
      </div>
      <div className="columns is-multiline is-mobile">
        <div className="column is-one-quarter">
          <legend className="label label label-horizontal label-type">
            Передвижение по должностям
          </legend>
        </div>
        <div className="column career-development-column">
          <CareerDevelopment />
        </div>
      </div>
      <div className="columns is-multiline is-mobile">
        <div className="column is-one-quarter">
          <legend className="label label-horizontal label-type">
            Оклад и прочие отчисления
          </legend>
        </div>

        <div className="column career-development-column">
          <div className="columns is-gapless">
            <div className="column is-one-third">
              <legend className="label label-horizontal">Оклад (gross)</legend>
              <div className="field  field-cell">
                <div className="control career-development__control">
                  80 000 p.
                </div>
              </div>
            </div>
            <div className="column is-one-third">
              <legend className="label label-horizontal">Надбавка</legend>
              <div className="field  field-cell">
                <div className="control career-development__control">
                  20 000 p.
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="columns is-multiline is-mobile">
        <div className="column is-one-quarter">
          <legend className="label label label-horizontal label-type">
            Льготы
          </legend>
        </div>
        <div className="column career-development-column">
          <Benefits />
        </div>
      </div>
      <div className="current-data-form__group">
        <h5 className="current-data-form__title">Отпуск</h5>
      </div>
      <div className="columns is-multiline is-mobile">
        <div className="column is-one-quarter">
          <legend className="label label label-horizontal label-type">
            2024
          </legend>
        </div>
        <div className="column career-development-column">
          <Vacation isEdit={isEdit} />
        </div>
      </div>
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
          <CompletedTraining />
        </div>
      </div>
      <div className="columns is-multiline is-mobile">
        <div className="column is-one-quarter">
          <legend className="label label label-horizontal label-type">
            Планируемое обучение
          </legend>
        </div>
        <div className="column career-development-column">
          <PlannedTraining />
        </div>
      </div>
      <div className="current-data-form__group">
        <h5 className="current-data-form__title">Дополнительно</h5>
      </div>
      <Optionally />
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
