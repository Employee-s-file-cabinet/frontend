import './ArhPriorWorkExperience.scss';

export default function ArhPriorWorkExperience({ isEdit }) {
  return (
    <section className="expirients">
      <div className="field">
        <legend className="label label-horizontal">Название компании</legend>
        <div className="control">
          <input
            className="input experience__input"
            type="text"
            placeholder="Рекрутинг РУС"
            disabled={!isEdit}
          />
        </div>
      </div>
      <div className="field">
        <legend className="label label-horizontal">Должность</legend>
        <div className="control">
          <input
            className="input experience__input"
            type="text"
            placeholder="Рекрутинг РУС"
            disabled={!isEdit}
          />
        </div>
      </div>
      <div className="columns is-gapless">
        <div className="column is-one-third">
          <div className="field  field-cell">
            <div className="control career-development__control">
              <legend className="label label label-horizontal is-one-third">
                Начало работы
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
              Окончание работы
            </legend>
            <div className="control career-development__control">
              <input
                className="input career-development__input "
                type="date"
                disabled={!isEdit}
              />
            </div>
          </div>
        </div>
      </div>

      <div className="field  ">
        <legend className="label label-horizontal">Функционал</legend>
        <div className="control">
          <textarea className="textarea is-small" disabled={!isEdit} />
        </div>
      </div>
    </section>
  );
}
