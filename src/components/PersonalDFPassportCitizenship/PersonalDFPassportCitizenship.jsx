import { useFieldArray } from 'react-hook-form';
import scanLabel from '../../assets/images/scan-label.png';

export default function PersonalDFPassportCitizenship({
  isEdit,
  control,
  register,
  errors,
}) {
  const { fields, append, remove } = useFieldArray({
    name: 'personalDFPassportCitizenshipFieldSet',
    control,
    rules: { required: 'Введите хотя бы одно значение' },
  });
  return (
    <section className="columns is-multiline is-mobile input-none ">
      {fields.map((field, index) => (
        <fieldset className="column" key={field.id}>
          <div className="columns">
            <div className="column">
              <div className="control">
                <legend className="label label label-horizontal is-one-quarter">
                  Гражданство
                </legend>
                <input
                  className="input"
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
          </div>
          <div className="columns">
            <div className="column is-one-quarter">
              <div className="control">
                <legend className="label label label-horizontal is-one-quarter">
                  Номер
                </legend>
                <input
                  className="input"
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
            </div>
            <div className="column is-one-quarter">
              <legend className="label label label-horizontal is-two-quarters">
                Дата выдачи
              </legend>
              <div className="control">
                <input
                  className="input"
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
            </div>
            <div className="column is-two-quarters">
              <legend className="label label label-horizontal is-two-quarters">
                Код подразделения
              </legend>
              <div className="control">
                <input
                  className="input"
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
          </div>
          <div className="columns">
            <div className="column is-two-quarters">
              <legend className="label label label-horizontal is-two-quarters">
                Кем выдан
              </legend>
              <div className="control is-two-quarters">
                <input
                  className="input"
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
                  <input
                    className="file-input"
                    type="file"
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
                  <span className="file-name file-name-span">Scre.</span>
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
          {isEdit && (
            <input
              type="button"
              className="button-trash"
              onClick={() => remove(index)}
            />
          )}
        </fieldset>
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
          Добавить +
        </button>
      )}
    </section>
  );
}
