/* eslint-disable no-unused-vars */
import './ArhMilitaryRegMilitaryID.scss';
import { useState, useEffect } from 'react';

import scanLabel from '../../assets/images/scan-label.png';

export default function ArhMilitaryRegMilitaryID({
  isEdit,
  errors,
  register,
  getValues,
  watch,
}) {
  const [fileName, setFileName] = useState();

  useEffect(() => {
    const name = watch((value) => setFileName(value.military?.scan?.[0]?.name));
    return () => {
      name.unsubscribe();
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [watch]);

  return (
    <section>
      <fieldset className="columns">
        <div className="column is-one-quarter">
          <div className="control">
            <legend className="label label label-horizontal is-one-quarter">
              Категория годности
            </legend>
            <div className="select is-one-quarter">
              <select {...register('military.category')} disabled={!isEdit}>
                <option>А</option>
                <option>Б</option>
                <option>В</option>
                <option>Г</option>
                <option>Д</option>
              </select>
            </div>
          </div>
        </div>
        <div className="column is-one-quarter input-none">
          <legend className="label label label-horizontal is-one-quarter">
            ВУС
          </legend>
          <div className="control">
            <input
              className="input"
              type="text"
              disabled={!isEdit}
              {...register('military.speciality')}
            />
          </div>
          <span className="">{errors?.military?.speciality?.message}</span>
        </div>
        <div className="column is-one-quarter input-none">
          <legend className="label label label-horizontal is-one-quarter">
            Звание
          </legend>
          <div className="control">
            <input
              className="input"
              type="text"
              disabled={!isEdit}
              {...register('military.rank')}
            />
          </div>
          <span className="">{errors?.military?.rank?.message}</span>
        </div>
      </fieldset>
      <fieldset className="columns">
        <div className="column is-two-quarters">
          <legend className="label label label-horizontal is-two-quarters">
            Номер документа
          </legend>
          <div className="control">
            <input
              className="input"
              type="text"
              disabled={!isEdit}
              {...register('military.number')}
            />
          </div>
          <span className="">{errors?.military?.number?.message}</span>
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
              <input
                className="file-input"
                type="file"
                accept=".pdf,.jpg,,.png,.jpeg"
                disabled={!isEdit}
                {...register(`military.scan`)}
              />
              <span className="file-cta">
                <span className="file-icon">
                  <i className="fas fa-upload" />
                </span>
                <span className="file-label">Выбрать файл</span>
              </span>
              <span className="file-name file-name-span">
                {fileName || getValues()?.military?.scan_name}
              </span>
              <span>{errors?.military?.scan?.message}</span>
            </legend>
          </div>
        </div>
      </fieldset>
    </section>
  );
}
