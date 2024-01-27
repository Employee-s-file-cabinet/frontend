/* eslint-disable no-unused-vars */
import './ArhFamilyMaritalStatus.scss';
import { useState, useEffect } from 'react';
import scanLabel from '../../assets/images/scan-label.png';

export default function ArhFamilyMaritalStatus({
  isEdit,
  errors,
  register,
  getValues,
  isSpouseShown,
  watch,
  resetField,
  setValue,
}) {
  const [fileName, setFileName] = useState();

  useEffect(() => {
    const name = watch((value) => setFileName(value.marriage.scan_name));
    return () => {
      name.unsubscribe();
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [watch]);

  useEffect(() => {
    register('marriage.scan_name');
    if (isSpouseShown) {
      resetField('marriage.certificate');
      resetField('marriage.scan_name');
      resetField('marriage.scan');
      resetField('spouse');
    } else {
      setValue('marriage.certificate', '');
      setValue('marriage.scan_name', '');
      if (getValues().marriage?.scan?.[0]?.name !== undefined) {
        resetField('marriage.scan');
      }
      setValue('spouse', {
        last_name: '',
        first_name: '',
        middle_name: '',
        date_of_birth: '',
        is_employee: 'Нет',
        department: '',
        position: '',
        occupation: '',
      });
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isSpouseShown]);

  return (
    <section>
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
              disabled={!isEdit || !isSpouseShown}
              {...register('marriage.certificate')}
            />
          </div>
          <span className="">{errors?.marriage?.certificate?.message}</span>
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
              disabled={!isEdit || !isSpouseShown}
            />
            <span className="file-cta">
              <span className="file-icon">
                <i className="fas fa-upload" />
              </span>
              <span className="file-label">Выбрать файл</span>
            </span>
            <span className="file-name file-name-span">
              {getValues().marriage?.scan?.[0]?.name || fileName}
            </span>
          </legend>
        </div>
        <span>{errors?.marriage?.scan?.message}</span>
      </div>
    </section>
  );
}
