export default function PersonalDFPassportVisaInput({ isEdit }) {
  return (
    <>
      <div className="columns columns-margin">
        <div className="control">
          <legend className="label label label-horizontal">Страна</legend>
          <input
            className={`horizontal-wrapper__input-long${
              (!isEdit && ' horizontal-wrapper__input-type-disabled') || ''
            }`}
            type="text"
            placeholder="Испания"
            disabled={!isEdit}
          />
        </div>
      </div>
      <div className="columns columns-margin">
        <div className="control">
          <legend className="label label label-horizontal is-one-quarter">
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
    </>
  );
}
