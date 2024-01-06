import CurrentDFVacationInput from '../CurrentDFVacationInput/CurrentDFVacationInput';

export default function CurrentDFVacationLabel({ isEdit }) {
  return (
    <>
      <div className="columns">
        <div className="column">
          <div className="control">
            <legend className="label label label-horizontal is-two-quarters">
              Количество дней
            </legend>
          </div>
        </div>
        <div className="column">
          <legend className="label label label-horizontal is-one-quarter">
            Дата начала
          </legend>
        </div>
        <div className="column">
          <legend className="label label label-horizontal is-one-quarter">
            Дата окончания
          </legend>
        </div>
      </div>
      <CurrentDFVacationInput isEdit={isEdit} />
    </>
  );
}
