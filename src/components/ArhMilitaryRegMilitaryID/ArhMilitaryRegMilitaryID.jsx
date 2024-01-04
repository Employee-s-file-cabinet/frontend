import './ArhMilitaryRegMilitaryID.scss';

import scanLabel from '../../assets/images/scan-label.png';

export default function ArhMilitaryRegMilitaryID({ isEdit }) {
  return (
    <>
      <div className="columns">
        <div className="column is-one-quarter">
          <div className="control">
            <legend className="label label label-horizontal is-one-quarter">
              Категория годности
            </legend>
            <div className="select is-one-quarter">
              <select>
                <option>А</option>
                <option>Б</option>
                <option>В</option>
                <option>Г</option>
                <option>Д</option>
              </select>
              {/* если выбираем да, то input-none включаем для вида деятельности, если нет, то наоборот */}
            </div>
          </div>
        </div>
        <div className="column is-one-quarter input-none">
          <legend className="label label label-horizontal is-one-quarter">
            ВУС
          </legend>
          <div className="control">
            <input className="input" type="text" disabled={!isEdit} />
          </div>
        </div>
        <div className="column is-one-quarter input-none">
          <legend className="label label label-horizontal is-one-quarter">
            Звание
          </legend>
          <div className="control">
            <input className="input" type="text" disabled={!isEdit} />
          </div>
        </div>
      </div>
      <div className="columns">
        <div className="column is-two-quarters">
          <legend className="label label label-horizontal is-two-quarters">
            Номер документа
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
      </div>
    </>
  );
}
