import scanLabel from '../../assets/images/scan-label.png';

export default function PersonalDOtherDocumentsInnInput({ isEdit }) {
  return (
    <div className="columns columns-margin">
      <div className="control">
        <legend className="label label label-horizontal is-two-quarters">
          Номер
        </legend>
        <input
          className={`horizontal-wrapper__input-small${
            (!isEdit && ' horizontal-wrapper__input-type-disabled') || ''
          }`}
          type="text"
          disabled={!isEdit}
        />
      </div>
      <div className="scan-wrapper">
        <h6 className="scan-wrapper__title scan-wrapper__title-margin">
          Скан документа
          <img
            src={scanLabel}
            alt="иконка"
            className="scan-wrapper__label scan-wrapper__label-red"
          />
        </h6>
        <div className="file has-name is-right">
          <legend className="file-label" maxLength={10}>
            <input
              className="file-input horizontal-wrapper__input-one-half"
              type="file"
              name="passport"
            />
            <span className="file-cta">
              <span className="file-icon">
                <i className="fas fa-upload" />
              </span>
              <span className="file-label">Выбрать файл</span>
            </span>
            <span className="file-name file-name-span">
              INN_IsaevaPA_scan.pdf
            </span>
          </legend>
        </div>
      </div>
    </div>
  );
}
