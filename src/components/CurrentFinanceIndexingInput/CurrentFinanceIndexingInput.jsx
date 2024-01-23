export default function CurrentFinanceIndexingInput({ isEdit }) {
  return (
    <fieldset>
      <div className="columns">
        <div className="control">
          <input
            className={`horizontal-wrapper__input-small${
              (!isEdit && ' horizontal-wrapper__input-type-disabled') || ''
            }`}
            type="date"
            placeholder=""
            disabled={!isEdit}
          />
        </div>
        <div className="control">
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
          <input
            className={`horizontal-wrapper__input-small${
              (!isEdit && ' horizontal-wrapper__input-type-disabled') || ''
            }`}
            type="number"
            placeholder=""
            disabled={!isEdit}
          />
        </div>
        {isEdit && (
          <input type="button" className="button-trash button-trash-centre" />
        )}
      </div>
    </fieldset>
  );
}
