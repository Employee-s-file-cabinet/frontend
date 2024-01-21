import CurrentDFBriefingCompleted from '../CurrentDFBriefingCompleted/CurrentDFBriefingCompleted';
import CurrentDFBriefingPlanned from '../CurrentDFBriefingPlanned/CurrentDFBriefingPlanned';

export default function CurrentDFBriefing({ isEdit }) {
  return (
    <details className="details" open>
      <summary className="summaru">Инструктаж</summary>
      <div className="columns is-multiline is-mobile">
        <div className="column is-one-quarter">
          <legend className="label label-horizontal label-type">
            Пройденный &emsp;инструктаж
          </legend>
        </div>
        <div className="column">
          <CurrentDFBriefingCompleted isEdit={isEdit} />
        </div>
      </div>
      <button className="current-data-form__add">Добавить строки</button>
      <div className="columns is-multiline is-mobile">
        <div className="column is-one-quarter">
          <legend className="label label-horizontal label-type">
            Планируемый &emsp;инструктаж
          </legend>
        </div>
        <div className="column">
          <CurrentDFBriefingPlanned isEdit={isEdit} />
        </div>
      </div>
      <button className="current-data-form__add">Добавить строки</button>
    </details>
  );
}
