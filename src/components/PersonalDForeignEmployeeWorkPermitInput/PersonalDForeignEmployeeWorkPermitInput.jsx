export default function PersonalDForeignEmployeeWorkPermitInput({ isEdit }) {
  return (
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
          Действительно до
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
  );
}
