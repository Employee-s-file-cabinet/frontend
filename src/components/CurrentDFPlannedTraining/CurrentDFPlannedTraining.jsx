import CurrentDFPlannedTrainingInput from '../CurrentDFPlannedTrainingInput/CurrentDFPlannedTrainingInput';
import CurrentDFPlannedTrainingPrice from '../CurrentDFPlannedTrainingPrice/CurrentDFPlannedTrainingPrice';

export default function CurrentDFPlannedTraining({ isEdit }) {
  return (
    <>
      <div className="columns  ">
        <div className="column is-two-quarters is-two-quarters-width ">
          <div className="control">
            <legend className="label label label-horizontal">Название</legend>
          </div>
        </div>
        <div className="column is-one-quarter">
          <legend className="label label label-horizontal ">Организация</legend>
        </div>
      </div>
      <CurrentDFPlannedTrainingInput isEdit={isEdit} />
      <div className="radio-box">
        <input type="radio" className="radio-box__input radio-box__input" />
        <legend className="radio-box__legend">Обучение внутри компании</legend>
      </div>
      <CurrentDFPlannedTrainingPrice isEdit={isEdit} />
    </>
  );
}
