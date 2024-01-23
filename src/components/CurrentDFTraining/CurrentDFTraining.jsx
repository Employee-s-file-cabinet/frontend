import CurrentDFCompletedTraining from '../CurrentDFCompletedTraining/CurrentDFCompletedTraining';

export default function CurrentDFTraining({ isEdit }) {
  return (
    <details className="details" open>
      <summary className="summaru">Обучение</summary>
      <div className="columns">
        <div className="column is-one-quarter">
          <legend className="label label-horizontal label-type">
            Пройденное обучение
          </legend>
        </div>
        <div className="column">
          <CurrentDFCompletedTraining isEdit={isEdit} />
        </div>
      </div>
      <div className="columns">
        <div className="column is-one-quarter">
          <legend className="label label-horizontal label-type">
            Планируемое обучение
          </legend>
        </div>
        <div className="column">
          <CurrentDFCompletedTraining isEdit={isEdit} />
        </div>
      </div>
    </details>
  );
}
