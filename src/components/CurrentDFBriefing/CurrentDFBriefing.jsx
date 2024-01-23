import CurrentDFCompletedTrainingInput from '../CurrentDFCompletedTrainingInput/CurrentDFCompletedTrainingInput';

export default function CurrentDFBriefing({ isEdit }) {
  return (
    <details className="details" open>
      <summary className="summaru">Инструктаж</summary>
      <div className="columns">
        <div className="column is-one-quarter">
          <legend className="label label-horizontal label-type">
            Пройденный &emsp;инструктаж
          </legend>
        </div>
        <section>
          <div className="column">
            <CurrentDFCompletedTrainingInput isEdit={isEdit} />
          </div>
          {isEdit && (
            <button className="current-data-form__add current-data-form__add-not-margin">
              + &ensp;Добавить
            </button>
          )}
        </section>
      </div>
      <div className="columns">
        <div className="column is-one-quarter">
          <legend className="label label-horizontal label-type">
            Планируемый &emsp;инструктаж
          </legend>
        </div>
        <section>
          <div className="column">
            <CurrentDFCompletedTrainingInput isEdit={isEdit} />
          </div>
          {isEdit && (
            <button className="current-data-form__add current-data-form__add-not-margin">
              + &ensp;Добавить
            </button>
          )}
        </section>
      </div>
    </details>
  );
}
