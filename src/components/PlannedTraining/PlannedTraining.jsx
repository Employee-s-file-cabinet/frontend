import './PlannedTraining.scss';

export default function PlannedTraining({ isEdit }) {
  return (
    <>
      <div className="columns is-gapless career-development">
        <div className="column ">
          <div className="field  ">
            <legend className="label label-horizontal ">Название</legend>
            <div className="control control-horizontal-long">
              <input
                className="input career-development__input"
                type="text"
                placeholder="Управление персоналом"
                disabled={!isEdit}
              />
            </div>
          </div>
        </div>
        <div className="column is-one-third">
          <div className="field  field-cell">
            <legend className="label label label-horizontal is-one-third">
              Организация
            </legend>
            <div className="control career-development__control">
              <input
                className="input career-development__input"
                type="text"
                disabled={!isEdit}
              />
            </div>
          </div>
        </div>
      </div>
      <legend className="checkbox checkbox-training">
        <input type="checkbox" className="checkbox-training__input" />
        &nbsp;Обучение внутри компании
      </legend>
      <div className="columns is-gapless career-development career-development-add career-development-remve">
        <div className="column is-one-third">
          <div className="field  field-cell">
            <legend className="label label label-horizontal is-one-third">
              Стоимость (p.)
            </legend>
            <div className="control career-development__control">
              <input
                className="input career-development__input"
                type="number"
                placeholder="26 000"
                disabled={!isEdit}
              />
            </div>
          </div>
        </div>
        <div className="column is-one-third">
          <div className="field  field-cell">
            <div className="control career-development__control">
              <legend className="label label label-horizontal is-one-third">
                Начало
              </legend>
              <input
                className="input career-development__input"
                type="date"
                disabled={!isEdit}
              />
            </div>
          </div>
        </div>
        <div className="column is-one-third">
          <div className="field  field-cell">
            <legend className="label label label-horizontal is-one-third">
              Окончание
            </legend>
            <div className="control career-development__control">
              <input
                className="input career-development__input"
                type="date"
                disabled={!isEdit}
              />
            </div>
          </div>
        </div>
      </div>
      <button className="career-development__add">Добавить строки</button>
    </>
  );
}
