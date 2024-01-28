import './ArhFamilyChildren.scss';
import { useFieldArray } from 'react-hook-form';
import scanLabel from '../../assets/images/scan-label.png';

export default function ArhFamilyChildren({
  isEdit,
  control,
  register,
  errors,
  getValues,
}) {
  const { fields, append, remove } = useFieldArray({
    name: 'children',
    control,
    rules: { required: 'Введите хотя бы одно значение' },
  });
  return (
    <section>
      {fields.map((field, index) => (
        <div className="columns children" key={field.id}>
          <fieldset>
            <div className="columns">
              <div className="column is-one-quarter">
                <div className="control">
                  <legend className="label label label-horizontal is-one-quarter">
                    Фамилия
                  </legend>
                  <input
                    className="input"
                    type="text"
                    placeholder="Фамилия"
                    disabled={!isEdit}
                    {...register(`children.${index}.last_name`)}
                  />
                </div>
                <span>{errors?.children?.[index]?.last_name?.message}</span>
              </div>
              <div className="column is-two-quarter">
                <legend className="label label label-horizontal is-two-quarters">
                  Имя
                </legend>
                <div className="control">
                  <input
                    className="input"
                    type="text"
                    placeholder="Имя"
                    disabled={!isEdit}
                    {...register(`children.${index}.first_name`)}
                  />
                </div>
                <span>{errors?.children?.[index]?.first_name?.message}</span>
              </div>
              <div className="column is-two-quarter">
                <legend className="label label label-horizontal is-two-quarters">
                  Отчество
                </legend>
                <div className="control">
                  <input
                    className="input"
                    type="text"
                    placeholder="Отчество"
                    disabled={!isEdit}
                    {...register(`children.${index}.middle_name`)}
                  />
                </div>
                <span>{errors?.children?.[index]?.middle_name?.message}</span>
              </div>
            </div>
            <div className="columns">
              <div className="column is-one-quarter">
                <div className="control">
                  <legend className="label label label-horizontal is-one-quarter">
                    Дата рождения
                  </legend>
                  <input
                    className="input"
                    type="date"
                    disabled={!isEdit}
                    {...register(`children.${index}.date_of_birth`)}
                  />
                </div>
                <span>{errors?.children?.[index]?.date_of_birth?.message}</span>
              </div>
              <div className="column is-two-quarters">
                <legend className="label label label-horizontal is-two-quarters">
                  Серия и номер свидетельства
                </legend>
                <div className="control">
                  <input
                    className="input"
                    type="text"
                    disabled={!isEdit}
                    {...register(`children.${index}.birth_certificate`)}
                  />
                </div>
                <span>
                  {errors?.children?.[index]?.birth_certificate?.message}
                </span>
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
                    {...register(`children.${index}.scan`)}
                  />
                  <span className="file-cta">
                    <span className="file-icon">
                      <i className="fas fa-upload" />
                    </span>
                    <span className="file-label">Выбрать файл</span>
                  </span>
                  <span className="file-name file-name-span">
                    {getValues().children?.[index].scan?.[0]?.name ||
                      (getValues().children?.[index].has_scan &&
                        getValues().children?.[index].scan_name)}
                  </span>
                  <span>{errors?.children?.[index]?.scan?.message}</span>
                </legend>
              </div>
            </div>
          </fieldset>
          {isEdit && (
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
              last_name: 'Симонов',
              first_name: 'Петр',
              middle_name: 'Кузьмич',
              date_of_birth: '2011-09-12',
              birth_certificate: '90890890',
              has_scan: true,
              scan: {},
              scan_name: 'birth_certificate2.png',
            });
          }}
        >
          + &ensp;Добавить
        </button>
      )}
    </section>
  );
}
