import './CurrentDFCompletedTraining.scss';

import CurrentDFCompletedTrainingPrice from '../CurrentDFCompletedTrainingPrice/CurrentDFCompletedTrainingPrice';

import CurrentDFCompletedTrainingInput from '../CurrentDFCompletedTrainingInput/CurrentDFCompletedTrainingInput';

export default function CurrentDFCompletedTraining({ isEdit }) {
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
      <CurrentDFCompletedTrainingInput isEdit={isEdit} />
      <div className="radio-box">
        <input type="radio" className="radio-box__input radio-box__input" />
        <legend className="radio-box__legend">Обучение внутри компании</legend>
      </div>
      <CurrentDFCompletedTrainingPrice isEdit={isEdit} />
    </>
  );
}
