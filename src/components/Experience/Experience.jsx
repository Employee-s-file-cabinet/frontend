import './Experience.scss';

export default function Experience({ isEdit }) {
  return (
    // <>
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
              placeholder="IRS.Academy"
              disabled={!isEdit}
            />
          </div>
        </div>
      </div>
    </div>
    // </>
  );
}
