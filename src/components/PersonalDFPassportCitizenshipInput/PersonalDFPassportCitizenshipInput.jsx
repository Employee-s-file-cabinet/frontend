import scanLabel from '../../assets/images/scan-label.png';

export default function PersonalDFPassportCitizenshipInput({ isEdit }) {
  return (
    <>
      <div className="columns">
        <div className="column">
          <div className="control">
            <legend className="label label label-horizontal is-one-quarter">
              Гражданство
            </legend>
            <input
              className="input"
              type="text"
              placeholder="Россия"
              disabled={!isEdit}
            />
          </div>
        </div>
      </div>
      <div className="columns">
        <div className="column is-one-quarter">
          <div className="control">
            <legend className="label label label-horizontal is-one-quarter">
              Номер
            </legend>
            <input
              className="input"
              type="number"
              placeholder="Иванов"
              disabled={!isEdit}
            />
          </div>
        </div>
        <div className="column is-one-quarter">
          <legend className="label label label-horizontal is-two-quarters">
            Дата выдачи
          </legend>
          <div className="control">
            <input
              className="input"
              type="date"
              placeholder="Иван"
              disabled={!isEdit}
            />
          </div>
        </div>
        <div className="column is-two-quarters">
          <legend className="label label label-horizontal is-two-quarters">
            Код подразделения
          </legend>
          <div className="control">
            <input
              className="input"
              type="number"
              placeholder=""
              disabled={!isEdit}
            />
          </div>
        </div>
      </div>
      <div className="columns">
        <div className="column is-two-quarters">
          <legend className="label label label-horizontal is-two-quarters">
            Кем выдан
          </legend>
          <div className="control is-two-quarters">
            <input className="input" type="text" disabled={!isEdit} />
          </div>
        </div>
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
              <span className="file-name file-name-span">Scre.</span>
            </legend>
          </div>
        </div>
      </div>
    </>
  );
}
