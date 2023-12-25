import './CareerDevelopment.scss';

export default function CareerDevelopment({ isEdit }) {
  return (
    <>
      <div className="columns is-gapless career-development">
        <div className="column is-one-third">
          <div className="field  field-cell">
            <legend className="label label label-horizontal is-one-third">
              Должность
            </legend>
            <div className="control career-development__control">
              <input
                className="input career-development__input"
                type="text"
                placeholder="HR-менеджер"
                disabled={!isEdit}
              />
            </div>
          </div>
        </div>
        <div className="column is-one-third">
          <div className="field  field-cell">
            <legend className="label label label-horizontal is-one-third">
              Начало работы
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
        <div className="column is-one-third">
          <div className="field  field-cell">
            <legend className="label label label-horizontal is-one-third">
              Окончание работы
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
                placeholder="HR-менеджер"
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
    </>
  );
}
