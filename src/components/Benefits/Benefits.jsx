import './Benefits.scss';

export default function Benefits({ isEdit }) {
  return (
    <>
      <div className="columns is-gapless career-development">
        <div className="column is-one-third">
          <div className="field  field-cell">
            <legend className="label label label-horizontal is-one-third">
              Тип
            </legend>
            <div className="control career-development__control">
              <input
                className="input career-development__input"
                type="text"
                placeholder="Курсы английского"
                disabled={!isEdit}
              />
            </div>
          </div>
        </div>
        <div className="column is-one-third">
          <div className="field  field-cell">
            <legend className="label label label-horizontal is-one-third">
              Стоимость (p.)
            </legend>
            <div className="control career-development__control">
              <input
                className="input career-development__input"
                type="number"
                placeholder="10 000"
                disabled={!isEdit}
              />
            </div>
          </div>
        </div>
        <div className="column is-one-third">
          <div className="field  field-cell">
            <legend className="label label label-horizontal is-one-third">
              Дата начала
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
      <div className="columns is-gapless career-development career-development-add career-development-remve">
        <div className="column is-one-third">
          <div className="field  field-cell">
            <div className="control career-development__control">
              <input
                className="input career-development__input"
                type="text"
                placeholder="Курсы английского"
                disabled={!isEdit}
              />
            </div>
          </div>
        </div>
        <div className="column is-one-third">
          <div className="field  field-cell">
            <div className="control career-development__control">
              <input
                className="input career-development__input"
                type="number"
                placeholder="10 000"
                disabled={!isEdit}
              />
            </div>
          </div>
        </div>
        <div className="column is-one-third">
          <div className="field  field-cell">
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
