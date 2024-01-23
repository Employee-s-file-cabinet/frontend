import './CurrentDFCompletedTraining.scss';

import CurrentDFCompletedTrainingPrice from '../CurrentDFCompletedTrainingPrice/CurrentDFCompletedTrainingPrice';
import CurrentDFCompletedTrainingInput from '../CurrentDFCompletedTrainingInput/CurrentDFCompletedTrainingInput';

export default function CurrentDFCompletedTraining({ isEdit }) {
  return (
    <section>
      <CurrentDFCompletedTrainingInput isEdit={isEdit} />
      <div className="check-box">
        <input
          type="checkbox"
          className={`check-box__input${(!isEdit && 'disabled') || ''}`}
          disabled={!isEdit}
        />
        <legend className="check-box__legend">Обучение внутри компании</legend>
      </div>
      <CurrentDFCompletedTrainingPrice isEdit={isEdit} />
      {isEdit && (
        <button className="current-data-form__add">+ &ensp;Добавить</button>
      )}
    </section>
  );
}
