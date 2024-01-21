import scanLabel from '../../assets/images/scan-label.png';

export default function PersonalDOtherDocumentsConsentInput() {
  return (
    <div className="columns">
      <div className="scan-wrapper input-none">
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
            <input className="file-input" type="file" name="resume" />
            <span className="file-cta">
              <span className="file-icon">
                <i className="fas fa-upload" />
              </span>
              <span className="file-label">Выбрать файл</span>
            </span>
            <span className="file-name file-name-padding">
              Screen Shot 2017-07-29 at 15.54.25.png
            </span>
          </legend>
        </div>
      </div>
    </div>
  );
}
