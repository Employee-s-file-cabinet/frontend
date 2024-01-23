import CurrentDFVacationInput from '../CurrentDFVacationInput/CurrentDFVacationInput';

export default function CurrentDFVacationLabel({ isEdit }) {
  return (
    <section>
      <div className="columns is-margin-top">
        <div className="control">
          <legend className="label label label-horizontal label-type label-margin">
            Количество дней
          </legend>
        </div>
        <div className="control">
          <legend className="label label label-horizontal label-type label-margin">
            Дата начала
          </legend>
        </div>
        <div className="control">
          <legend className="label label label-horizontal label-type label-margin">
            Дата окончания
          </legend>
        </div>
      </div>
      <CurrentDFVacationInput isEdit={isEdit} />
      {isEdit && (
        <button className="current-data-form__add">+ &ensp;Добавить</button>
      )}
    </section>
  );
}
