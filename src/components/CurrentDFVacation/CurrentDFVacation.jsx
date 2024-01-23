import CurrentDFVacationLabel from '../CurrentDFVacationLabel/CurrentDFVacationLabel';

export default function CurrentDFVacation({ isEdit }) {
  return (
    <details className="details" open>
      <summary className="summaru">Отпуск</summary>
      <div className="columns">
        <div className="column is-one-quarter">
          <legend className="label label-horizontal label-type">
            2024 год
          </legend>
        </div>
        <div className="column">
          <CurrentDFVacationLabel isEdit={isEdit} />
        </div>
      </div>
    </details>
  );
}
