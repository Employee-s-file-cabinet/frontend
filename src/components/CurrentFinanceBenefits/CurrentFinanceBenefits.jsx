import CurrentFinanceBenefitsInput from '../CurrentFinanceBenefitsInput/CurrentFinanceBenefitsInput';

export default function CurrentFinanceBenefits({ isEdit }) {
  return (
    <section>
      <div className="columns is-margin-top">
        <div className="control">
          <legend className="label label label-horizontal label-type label-margin">
            Тип
          </legend>
        </div>
        <div className="control">
          <legend className="label label label-horizontal label-type label-margin">
            Стоимость (p.)
          </legend>
        </div>
        <div className="control">
          <legend className="label label label-horizontal label-type label-margin">
            Дата начала
          </legend>
        </div>
      </div>
      <CurrentFinanceBenefitsInput isEdit={isEdit} />
      {isEdit && (
        <button className="current-data-form__add">+ &ensp;Добавить</button>
      )}
    </section>
  );
}
