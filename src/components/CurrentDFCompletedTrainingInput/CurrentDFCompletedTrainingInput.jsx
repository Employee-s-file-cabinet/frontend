export default function CurrentDFCompletedTrainingInput({ isEdit }) {
  return (
    <fieldset className="columns is-margin-top">
      <div className="control">
        <legend className="label label label-horizontal label-type-long label-margin">
          Название
        </legend>
        <input
          className={`horizontal-wrapper__input-two-third${
            (!isEdit && ' horizontal-wrapper__input-type-disabled') || ''
          }`}
          type="text"
          placeholder=""
          disabled={!isEdit}
        />
      </div>
      <div className="control">
        <legend className="label label label-horizontal label-type label-margin">
          Организация
        </legend>
        <input
          className={`horizontal-wrapper__input-small${
            (!isEdit && ' horizontal-wrapper__input-type-disabled') || ''
          }`}
          type="text"
          placeholder=""
          disabled={!isEdit}
        />
      </div>
      {isEdit && <input type="button" className="button-trash" />}
    </fieldset>
  );
}
