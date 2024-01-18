export default function PersonalDForeignEmployeeWorkVisaInput({ isEdit }) {
  return (
    <>
      <div className="columns columns-margin">
        <div className="control">
          <legend className="label label label-horizontal is-one-quarter">
            Номер
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
          <legend className="label label label-horizontal is-two-quarters">
            Категория
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
        <div className="control horizontal-wrapper__input-small-hide">
          <legend className="label label label-horizontal is-two-quarters">
            Категория
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
      </div>
      <div className="columns columns-margin">
        <div className="control">
          <legend className="label label label-horizontal is-two-quarters">
            Дата выдачи
          </legend>
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
          <legend className="label label label-horizontal is-two-quarters">
            Действителен до
          </legend>
          <input
            className={`horizontal-wrapper__input-small${
              (!isEdit && ' horizontal-wrapper__input-type-disabled') || ''
            }`}
            type="date"
            placeholder=""
            disabled={!isEdit}
          />
        </div>
      </div>
    </>
  );
}
