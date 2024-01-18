export default function PersonalDFPassportForeignInput({ isEdit }) {
  return (
    // <>
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
          placeholder="Иванов"
          disabled={!isEdit}
        />
      </div>
      <div className="control">
        <legend className="label label label-horizontal is-two-quarters">
          Дата выдачи
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
    // </>
  );
}
