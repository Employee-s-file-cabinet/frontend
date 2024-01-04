import './CurrentDFFinance.scss';

import scanLabel from '../../assets/images/scan-label.png';

export default function CurrentDFFinance({ isEdit }) {
  return (
    <details className="details" open>
      <summary className="summaru">Финансы</summary>
      <div className="columns is-multiline is-mobile">
        <div className="column is-one-quarter block-gap">
          <legend className="label label label-horizontal label-type">
            Трудовой договор
          </legend>
        </div>
        <div className="column block-gap">
          <div className="control field-cell">
            <input
              className="input input-horizontal "
              type="text"
              placeholder="№4486"
              disabled={!isEdit}
            />
          </div>
        </div>
        <input type="button" className="button-trash button-trash-none" />
      </div>
      <div className="columns is-multiline is-mobile">
        <div className="column is-one-quarter block-gap">
          <legend className="label label label-horizontal label-type">
            Скан документа
            <img
              src={scanLabel}
              alt="иконка"
              className="scan-wrapper__label scan-wrapper__label-red"
            />
          </legend>
        </div>
        <div className="scan-wrapper input-none">
          <div className="column block-gap">
            <div className="file has-name is-right">
              <legend className="file-label">
                <input
                  className="file-input"
                  type="file"
                  name="resume"
                  disabled={!isEdit}
                />
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
        <input type="button" className="button-trash button-trash-none" />
      </div>
      <div className="columns is-multiline is-mobile">
        <div className="column is-one-quarter block-gap">
          <legend className="label label label-horizontal label-type">
            Дата договора
          </legend>
        </div>
        <div className="column block-gap">
          <div className="control field-cell">
            <input
              className="input input-horizontal"
              type="date"
              disabled={!isEdit}
            />
          </div>
        </div>
        <input type="button" className="button-trash button-trash-none" />
      </div>
      <div className="columns is-multiline is-mobile">
        <div className="column is-one-quarter block-gap">
          <legend className="label label label-horizontal label-type">
            Тип договора
          </legend>
        </div>
        <div className="column block-gap">
          <div className="control field-cell">
            <div className="select">
              <select className="control-horizontal" disabled={!isEdit}>
                <option>Бессрочный</option>
                <option>Срочный</option>
              </select>
            </div>
          </div>
        </div>
        <input type="button" className="button-trash button-trash-none" />
      </div>
    </details>
  );
}
