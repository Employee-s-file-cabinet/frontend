export default function PersonalDForeignEmployeeWorkVisaInput({ isEdit }) {
  return (
    <>
      <div className="columns">
        <div className="column is-one-quarter">
          <div className="control">
            <legend className="label label label-horizontal is-one-quarter">
              Номер
            </legend>
            <input
              className="input"
              type="number"
              placeholder="Иванов"
              disabled={!isEdit}
            />
          </div>
        </div>
        <div className="column is-one-quarter">
          <legend className="label label label-horizontal is-two-quarters">
            Категория
          </legend>
          <div className="control">
            <input
              className="input"
              type="text"
              placeholder="Иван"
              disabled={!isEdit}
            />
          </div>
        </div>
      </div>
      <div className="columns">
        <div className="column is-two-quarters">
          <legend className="label label label-horizontal is-two-quarters">
            Дата выдачи
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
