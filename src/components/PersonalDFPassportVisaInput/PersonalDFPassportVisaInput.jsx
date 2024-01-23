export default function PersonalDFPassportVisaInput({ isEdit }) {
  return (
    <>
      <div className="columns">
        <div className="column">
          <div className="control">
            <legend className="label label label-horizontal">Страна</legend>
            <input
              className="input"
              type="text"
              placeholder="Иванов"
              disabled={!isEdit}
            />
          </div>
        </div>
      </div>
      <div className="columns">
        <div className="column is-one-quarter">
          <div className="control">
            <legend className="label label label-horizontal is-one-quarter">
              Категория
            </legend>
            <input
              className="input"
              type="text"
              placeholder=""
              disabled={!isEdit}
            />
          </div>
        </div>
        <div className="column is-one-quarter">
          <legend className="label label label-horizontal is-two-quarters">
            Дата выдачи
          </legend>
          <div className="control">
            <input
              className="input"
              type="date"
              placeholder="Иван"
              disabled={!isEdit}
            />
          </div>
        </div>
        <div className="column is-two-quarters">
          <legend className="label label label-horizontal is-two-quarters">
            Действителен до
          </legend>
          <div className="control">
            <input
              className="input"
              type="date"
              placeholder=""
              disabled={!isEdit}
            />
          </div>
        </div>
      </div>
    </>
  );
}
