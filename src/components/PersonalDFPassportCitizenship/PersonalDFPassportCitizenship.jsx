import './PersonalDFPassportCitizenship.scss';
import { useFieldArray } from 'react-hook-form';
import scanLabel from '../../assets/images/scan-label.png';

export default function PersonalDFPassportCitizenship({
  isEdit,
  control,
  register,
  errors,
  getValues,
}) {
  const { fields, append, remove } = useFieldArray({
    name: 'personalDFPassportCitizenshipFieldSet',
    control,
    rules: { required: 'Введите хотя бы одно значение' },
  });

  return (
    <section>
      {fields.map((field, index) => (
        <div
          className="columns is-multiline is-mobile passport-citizenship"
          key={field.id}
        >
          <fieldset className="column passport-citizenship__field-set">
            <div className="columns columns-margin">
              <div className="control">
                <legend className="label label label-horizontal">
                  Гражданство
                </legend>
                <input
                  className={`horizontal-wrapper__input-long${
                    (!isEdit && ' horizontal-wrapper__input-type-disabled') ||
                    ''
                  }`}
                  type="text"
                  placeholder="Гражданство"
                  disabled={!isEdit}
                  {...register(
                    `personalDFPassportCitizenshipFieldSet.${index}.citizenship`
                  )}
                />
                <span>
                  {
                    errors?.personalDFPassportCitizenshipFieldSet?.[index]
                      ?.citizenship?.message
                  }
                </span>
              </div>
            </div>
            <div className="columns columns-margin">
              <div className="control">
                <legend className="label label label-horizontal">Номер</legend>
                <input
                  className={`horizontal-wrapper__input-small${
                    (!isEdit && ' horizontal-wrapper__input-type-disabled') ||
                    ''
                  }`}
                  type="text"
                  placeholder="Номер"
                  disabled={!isEdit}
                  {...register(
                    `personalDFPassportCitizenshipFieldSet.${index}.number`
                  )}
                />
                <span>
                  {
                    errors?.personalDFPassportCitizenshipFieldSet?.[index]
                      ?.number?.message
                  }
                </span>
              </div>
              <div className="control">
                <legend className="label label label-horizontal">
                  Дата выдачи
                </legend>

                <input
                  className={`horizontal-wrapper__input-small${
                    (!isEdit && ' horizontal-wrapper__input-type-disabled') ||
                    ''
                  }`}
                  type="date"
                  disabled={!isEdit}
                  {...register(
                    `personalDFPassportCitizenshipFieldSet.${index}.issued_date`
                  )}
                />
                <span>
                  {
                    errors?.personalDFPassportCitizenshipFieldSet?.[index]
                      ?.issued_date?.message
                  }
                </span>
              </div>
              <div className="control">
                <legend className="label label label-horizontal">
                  Код подразделения
                </legend>
                <input
                  className={`horizontal-wrapper__input-small${
                    (!isEdit && ' horizontal-wrapper__input-type-disabled') ||
                    ''
                  }`}
                  type="text"
                  placeholder="Код подразделения"
                  disabled={!isEdit}
                  {...register(
                    `personalDFPassportCitizenshipFieldSet.${index}.department_code`
                  )}
                />
                <span>
                  {
                    errors?.personalDFPassportCitizenshipFieldSet?.[index]
                      ?.department_code?.message
                  }
                </span>
              </div>
            </div>
            <div className="columns columns-margin">
              <div className="control">
                <legend className="label label label-horizontal is-two-quarters">
                  Кем выдан
                </legend>
                <input
                  className={`horizontal-wrapper__input-one-half${
                    (!isEdit && ' horizontal-wrapper__input-type-disabled') ||
                    ''
                  }`}
                  type="text"
                  placeholder="Кем выдан"
                  disabled={!isEdit}
                  {...register(
                    `personalDFPassportCitizenshipFieldSet.${index}.issued_by`
                  )}
                />
                <span>
                  {
                    errors?.personalDFPassportCitizenshipFieldSet?.[index]
                      ?.issued_by?.message
                  }
                </span>
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
                  <legend className="file-label">
                    <input
                      className="file-input horizontal-wrapper__input-one-half"
                      type="file"
                      disabled={!isEdit}
                      accept=".pdf,.jpg,,.png,.jpeg"
                      {...register(
                        `personalDFPassportCitizenshipFieldSet.${index}.scan`
                      )}
                    />
                    <span className="file-cta">
                      <span className="file-icon">
                        <i className="fas fa-upload" />
                      </span>
                      <span className="file-label">Выбрать файл</span>
                    </span>
                    <span className="file-name file-name-span">
                      {getValues().personalDFPassportCitizenshipFieldSet?.[
                        index
                      ].scan?.[0]?.name ||
                        (getValues().personalDFPassportCitizenshipFieldSet?.[
                          index
                        ].has_scan &&
                          getValues().personalDFPassportCitizenshipFieldSet?.[
                            index
                          ].scan_name)}
                    </span>
                    <span>
                      {
                        errors?.personalDFPassportCitizenshipFieldSet?.[index]
                          ?.scan?.message
                      }
                    </span>
                  </legend>
                </div>
              </div>
            </div>
          </fieldset>
          {isEdit && index !== 0 && (
            <input
              type="button"
              className="button-trash button-trash-personal"
              onClick={() => remove(index)}
            />
          )}
        </div>
      ))}
      {isEdit && (
        <button
          className="personal-data-form__add"
          type="button"
          onClick={() => {
            append({
              citizenship: 'РФ',
              number: '6666808303',
              issued_date: '1977-11-11',
              issued_by: 'РОВД ПЛАНЕТЫ САТУРН',
              department_code: '001-100',
            });
          }}
        >
          + &ensp;Добавить
        </button>
      )}
    </section>
  );
}
