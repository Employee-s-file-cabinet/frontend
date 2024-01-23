export default function CurrentDFCompletedTrainingPrice({ isEdit }) {
  return (
    <fieldset className="columns is-columns-margin">
      <div className="control">
        <legend className="label label label-horizontal label-type label-margin">
          Стоимость (р.)
        </legend>
        <input
          className={`horizontal-wrapper__input-small${
            (!isEdit && ' horizontal-wrapper__input-type-disabled') || ''
          }`}
          type="number"
          placeholder=""
          disabled={!isEdit}
        />
      </div>
      <div className="control">
        <legend className="label label label-horizontal label-type label-margin">
          Начало
        </legend>
        <input
          className={`horizontal-wrapper__input-small${
            (!isEdit && ' horizontal-wrapper__input-type-disabled') || ''
          }`}
          type="date"
          placeholder="Иван"
          disabled={!isEdit}
        />
      </div>
      <div className="control">
        <legend className="label label label-horizontal label-type label-margin">
          Окончание
        </legend>
        <input
          className={`horizontal-wrapper__input-small${
            (!isEdit && ' horizontal-wrapper__input-type-disabled') || ''
          }`}
          type="date"
          placeholder="Иванович"
          disabled={!isEdit}
        />
      </div>
    </fieldset>
  );
}
