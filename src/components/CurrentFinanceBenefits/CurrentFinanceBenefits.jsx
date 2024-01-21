import CurrentFinanceBenefitsInput from '../CurrentFinanceBenefitsInput/CurrentFinanceBenefitsInput';

export default function CurrentFinanceBenefits({ isEdit }) {
  return (
    <>
      <div className="columns">
        <div className="column">
          <div className="control">
            <legend className="label label label-horizontal is-two-quarters">
              Тип
            </legend>
          </div>
        </div>
        <div className="column">
          <legend className="label label label-horizontal is-one-quarter">
            Стоимость (p.)
          </legend>
        </div>
        <div className="column">
          <legend className="label label label-horizontal is-one-quarter">
            Дата начала
          </legend>
        </div>
      </div>
      <CurrentFinanceBenefitsInput isEdit={isEdit} />
    </>
  );
}
