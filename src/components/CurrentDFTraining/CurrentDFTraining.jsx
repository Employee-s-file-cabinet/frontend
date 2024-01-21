import CurrentDFCompletedTraining from '../CurrentDFCompletedTraining/CurrentDFCompletedTraining';
import CurrentDFPlannedTraining from '../CurrentDFPlannedTraining/CurrentDFPlannedTraining';

export default function CurrentDFTraining({ isEdit }) {
  return (
    <details className="details" open>
      <summary className="summaru">Обучение</summary>
      <div className="columns is-multiline is-mobile">
        <div className="column is-one-quarter">
          <legend className="label label-horizontal label-type">
            Пройденное обучение
          </legend>
        </div>
        <div className="column">
          <CurrentDFCompletedTraining isEdit={isEdit} />
        </div>
      </div>
      <button className="current-data-form__add">Добавить строки</button>
      <div className="columns is-multiline is-mobile">
        <div className="column is-one-quarter">
          <legend className="label label-horizontal label-type">
            Планируемое обучение
          </legend>
        </div>
        <div className="column">
          <CurrentDFPlannedTraining isEdit={isEdit} />
        </div>
      </div>
      <button className="current-data-form__add">Добавить строки</button>
    </details>
  );
}
