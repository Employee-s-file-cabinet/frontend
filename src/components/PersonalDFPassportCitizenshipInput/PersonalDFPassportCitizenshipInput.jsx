import scanLabel from '../../assets/images/scan-label.png';

export default function PersonalDFPassportCitizenshipInput({ isEdit }) {
  return (
    <>
      <div className="field">
        <legend className="label label-horizontal">Гражданство</legend>
        <div className="control">
          <input
            className="input experience__input"
            type="text"
            placeholder="Рекрутинг РУС"
            disabled={!isEdit}
          />
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
        <div className="column is-two-quarters">
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
              placeholder="Иванович"
              disabled={!isEdit}
            />
          </div>
        </div>
      </div>
      <div className="columns">
        <div className="column is-3">
          <legend className="label label label-horizontal is-two-quarters">
            Кем выдан
          </legend>
          <div className="control">
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
          <div className="file has-name is-right is-2">
            <legend className="file-label">
              <input className="file-input" type="file" name="resume" />
              <span className="file-cta">
                <span className="file-icon">
                  <i className="fas fa-upload" />
                </span>
                <span className="file-label">Выбрать файл</span>
              </span>
              <span className="file-name">
                Screen Shot 2017-07-29 at 15.54.25.png
              </span>
            </legend>
          </div>
        </div>
      </div>
    </>
  );
}
