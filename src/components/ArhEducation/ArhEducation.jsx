/* eslint-disable no-unused-vars */
import './ArhEducation.scss';
import { useFieldArray } from 'react-hook-form';
import ConditionalInput from '../Reusable/ConditionalInput/ConditionalInput';
import scanLabel from '../../assets/images/scan-label.png';

export default function ArhEducation({
  isEdit,
  errors,
  register,
  control,
  getValues,
  watch,
}) {
  const { fields, append, remove } = useFieldArray({
    name: 'education',
    control,
    rules: { required: 'Введите хотя бы одно значение' },
  });

  return (
    <details className="details" open>
      <summary className="summaru">Образование</summary>
      {fields.map((field, index) => (
        <div
          className="columns is-multiline is-mobile education"
          key={field.id}
        >
          <div className="column is-one-quarter block-gap">
            <legend className="label label label-horizontal label-type">
              Уровень
            </legend>
            <select
              className="institution-select is-one-quarter"
              {...register(`education.${index}.degree`)}
            >
              <option className="institution-option ">Среднее</option>
              <option className="institution-option">
                Среднее профессиональное
              </option>
              <option className="institution-option">Высшее</option>
              <option className="institution-option">Бакалавриат</option>
              <option className="institution-option">
                Специалитет/магистратура
              </option>
            </select>
            <span>{errors?.education?.[index]?.degree?.message}</span>
          </div>
          <div className="column block-gap">
            <fieldset>
              <div className="columns">
                <div className="column">
                  <div className="control">
                    <legend className="label label-horizontal is-one-quarter">
                      Учебное заведение
                    </legend>
                    <input
                      className="input"
                      type="text"
                      disabled={!isEdit}
                      {...register(`education.${index}.issued_institution`)}
                    />
                  </div>
                  <span>
                    {errors?.education?.[index]?.issued_institution?.message}
                  </span>
                </div>
              </div>
              <div className="columns">
                <div className="column">
                  <div className="control">
                    <legend className="label label-horizontal is-one-quarter">
                      Специальность
                    </legend>
                    <input
                      className="input"
                      type="text"
                      disabled={!isEdit}
                      {...register(`education.${index}.specialty`)}
                    />
                  </div>
                  <span>{errors?.education?.[index]?.specialty?.message}</span>
                </div>
              </div>
              <div className="columns">
                <div className="column is-one-quarter">
                  <div className="control">
                    <legend className="label label-horizontal is-one-quarter">
                      Начало обучения
                    </legend>
                    <input
                      className="input"
                      type="date"
                      disabled={!isEdit}
                      {...register(`education.${index}.date_from`)}
                    />
                  </div>
                  <span>{errors?.education?.[index]?.date_from?.message}</span>
                </div>
                <div className="column is-one-quarter">
                  <div className="control">
                    <legend className="label label-horizontal is-one-quarter">
                      Окончание обучения
                    </legend>
                    <ConditionalInput
                      className={`horizontal-wrapper__input-small${
                        (!isEdit &&
                          ' horizontal-wrapper__input-type-disabled') ||
                        ''
                      }`}
                      control={control}
                      type="date"
                      register={register}
                      index={index}
                      disabled={!isEdit}
                      errors={errors}
                      fieldSetName="education"
                      fieldName="date_to"
                      conditionalFieldName="date_from"
                      conditionalFieldType="date"
                    />
                  </div>
                  <span>{errors?.education?.[index]?.date_to?.message}</span>
                </div>
              </div>
              <div className="columns">
                <div className="column is-two-quarters">
                  <legend className="label label label-horizontal is-two-quarters">
                    Номер документа
                  </legend>
                  <div className="control">
                    <input
                      className="input"
                      type="text"
                      disabled={!isEdit}
                      {...register(`education.${index}.number`)}
                    />
                  </div>
                  {errors?.education?.[index]?.number?.message}
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
                        disabled={!isEdit}
                        accept=".pdf,.jpg,,.png,.jpeg"
                        {...register(`education.${index}.scan`)}
                      />
                      <span className="file-cta">
                        <span className="file-icon">
                          <i className="fas fa-upload" />
                        </span>
                        <span className="file-label">Выбрать файл</span>
                      </span>
                      <span className="file-name file-name-span">
                        {getValues()?.education?.[index]?.scan?.[0]?.name ||
                          (getValues()?.education?.[index]?.has_scan &&
                            getValues()?.education?.[index]?.scan_name)}
                      </span>
                    </legend>
                    <span>{errors?.education?.[index]?.scan?.message}</span>
                  </div>
                </div>
              </div>
            </fieldset>
          </div>
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
              date_from: '2004-09-01',
              date_to: '2009-07-30',
              degree: 'Среднее',
              specialty: 'Менеджер',
              issued_institution: 'СГПУ',
              number: '1222122',
              has_scan: true,
              scan: {},
              scan_name: 'new_diploma.png',
            });
          }}
        >
          + &ensp;Добавить
        </button>
      )}
    </details>
  );
}
