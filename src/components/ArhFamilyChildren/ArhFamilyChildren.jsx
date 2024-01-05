import './ArhFamilyChildren.scss';

import scanLabel from '../../assets/images/scan-label.png';

export default function ArhFamilyChildren({ isEdit }) {
  return (
    <>
      <div className="columns">
        <div className="column is-one-quarter">
          <div className="control">
            <legend className="label label label-horizontal is-one-quarter">
              Фамилия
            </legend>
            <input
              className="input"
              type="text"
              placeholder="Иванов"
              disabled={!isEdit}
            />
          </div>
        </div>
        <div className="column is-two-quarter">
          <legend className="label label label-horizontal is-two-quarters">
            Имя
          </legend>
          <div className="control">
            <input
              className="input"
              type="text"
              placeholder="Иван"
              disabled={!isEdit}
            />
          </div>
        </div>
        <div className="column is-two-quarter">
          <legend className="label label label-horizontal is-two-quarters">
            Отчество
          </legend>
          <div className="control">
            <input
              className="input"
              type="text"
              placeholder="Иванович"
              disabled={!isEdit}
            />
          </div>
        </div>
      </div>
      <div className="columns">
        <div className="column is-one-quarter">
          <div className="control">
            <legend className="label label label-horizontal is-one-quarter">
              Дата рождения
            </legend>
            <input className="input" type="date" disabled={!isEdit} />
          </div>
        </div>
        <div className="column is-two-quarters">
          <legend className="label label label-horizontal is-two-quarters">
            Серия и номер свидетельства
          </legend>
          <div className="control">
            <input className="input" type="text" disabled={!isEdit} />
          </div>
        </div>
      </div>
      <div className="scan-wrapper input-none">
        <h6 className="scan-wrapper__title">
          Скан документа
          <img
            src={scanLabel}
            alt="иконка"
            className="scan-wrapper__label scan-wrapper__label-red"
          />
        </h6>
        <div className="file has-name is-right">
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
    </>
  );
}
