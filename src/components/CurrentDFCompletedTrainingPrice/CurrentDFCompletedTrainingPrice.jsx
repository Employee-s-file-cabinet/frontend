export default function CurrentDFCompletedTrainingPrice({ isEdit }) {
  return (
    <div className="columns columns-margin">
      <div className="column is-one-quarter">
        <div className="control">
          <legend className="label label label-horizontal is-one-quarter">
            Стоимость (р.)
          </legend>
          <input
            className="input"
            type="number"
            placeholder=""
            disabled={!isEdit}
          />
        </div>
      </div>
      <div className="column is-two-quarter">
        <legend className="label label label-horizontal is-two-quarters">
          Начало
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
      <div className="column is-two-quarter">
        <legend className="label label label-horizontal is-two-quarters">
          Окончание
        </legend>
        <div className="control">
          <input
            className="input"
            type="date"
            placeholder="Иванович"
            disabled={!isEdit}
          />
        </div>
      </div>
    </div>
  );
}
