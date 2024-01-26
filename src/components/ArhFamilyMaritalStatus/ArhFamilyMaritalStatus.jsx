/* eslint-disable no-unused-vars */
import './ArhFamilyMaritalStatus.scss';

import scanLabel from '../../assets/images/scan-label.png';

export default function ArhFamilyMaritalStatus({
  isEdit,
  errors,
  register,
  getValues,
}) {
  return (
    <>
      <div className="columns">
        <div className="column is-one-quarter">
          <div className="control">
            <legend className="label label label-horizontal is-one-quarter">
              В браке
            </legend>
            <select
              className="select"
              disabled={!isEdit}
              {...register('marriage.status')}
            >
              <option>Да</option>
              <option>Нет</option>
            </select>
            {/* если нет, то включаем input-none для полей номер свидетельства и скан */}
          </div>
        </div>
        <div className="column is-two-quarter input-none">
          <legend className="label label label-horizontal is-two-quarters">
            Номер свидетельства
          </legend>
          <div className="control">
            <input
              className="input"
              type="text"
              disabled={!isEdit}
              {...register('marriage.certificate')}
            />
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
            <input
              className="file-input"
              type="file"
              accept=".pdf,.jpg,,.png,.jpeg"
              {...register(`marriage.scan`)}
            />
            <span className="file-cta">
              <span className="file-icon">
                <i className="fas fa-upload" />
              </span>
              <span className="file-label">Выбрать файл</span>
            </span>
            <span className="file-name file-name-span">
              {getValues().marriage?.scan?.[0]?.name ||
                (getValues().marriage?.has_scan &&
                  getValues().marriage?.scan_name)}
            </span>
          </legend>
        </div>
      </div>
    </>
  );
}
