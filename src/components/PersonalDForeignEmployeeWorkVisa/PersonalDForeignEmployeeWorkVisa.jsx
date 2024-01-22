import './PersonalDForeignEmployeeWorkVisa.scss';
import { useFieldArray } from 'react-hook-form';
import ConditionalInput from '../Reusable/ConditionalInput/ConditionalInput';

export default function PersonalDForeignEmployeeWorkVisa({
  isEdit,
  control,
  register,
  errors,
}) {
  const { fields, append, remove } = useFieldArray({
    name: 'personalDForeignEmployeeWorkVisaFieldSet',
    control,
    rules: { required: 'Введите хотя бы одно значение' },
  });
  return (
    <section>
      {fields.map((field, index) => (
        <div
          className="columns is-multiline is-mobile input-none working-visa"
          key={field.id}
        >
          <fieldset className="column">
            <div className="columns columns-margin">
              <div className="control">
                <legend className="label label label-horizontal is-one-quarter">
                  Номер
                </legend>
                <input
                  className={`horizontal-wrapper__input-small${
                    (!isEdit && ' horizontal-wrapper__input-type-disabled') ||
                    ''
                  }`}
                  type="text"
                  placeholder="Номер"
                  disabled={!isEdit}
                  {...register(
                    `personalDForeignEmployeeWorkVisaFieldSet.${index}.number`
                  )}
                />
                <span>
                  {
                    errors?.personalDForeignEmployeeWorkVisaFieldSet?.[index]
                      ?.number?.message
                  }
                </span>
              </div>
              <div className="control">
                <legend className="label label label-horizontal is-two-quarters">
                  Категория
                </legend>
                <select
                  className={`horizontal-wrapper__input${
                    (!isEdit && ' horizontal-wrapper__input-type-disabled') ||
                    ''
                  }`}
                  disabled={!isEdit}
                  {...register(
                    `personalDForeignEmployeeWorkVisaFieldSet.${index}.category`
                  )}
                >
                  <option>Однократная</option>
                  <option>Многократная</option>
                </select>
                {
                  errors?.personalDForeignEmployeeWorkVisaFieldSet?.[index]
                    ?.category?.message
                }
              </div>
            </div>
            <div className="columns columns-margin">
              <div className="control">
                <legend className="label label label-horizontal is-two-quarters">
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
                    `personalDForeignEmployeeWorkVisaFieldSet.${index}.issued_date`
                  )}
                />
                {
                  errors?.personalDForeignEmployeeWorkVisaFieldSet?.[index]
                    ?.issued_date?.message
                }
              </div>
              <div className="control">
                <legend className="label label label-horizontal is-two-quarters">
                  Действительна до
                </legend>
                <ConditionalInput
                  className={`horizontal-wrapper__input-small${
                    (!isEdit && ' horizontal-wrapper__input-type-disabled') ||
                    ''
                  }`}
                  control={control}
                  type="date"
                  register={register}
                  index={index}
                  disabled={!isEdit}
                  errors={errors}
                  fieldSetName="personalDForeignEmployeeWorkVisaFieldSet"
                  fieldName="expired"
                  conditionalFieldName="issued_date"
                  conditionalFieldType="date"
                />
                <span>
                  {
                    errors?.personalDForeignEmployeeWorkVisaFieldSet?.[index]
                      ?.expired?.message
                  }
                </span>
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
              number: '006661166',
              category: 'Многократная',
              issued_date: '2023-01-16',
              expired: '2025-01-18',
            });
          }}
        >
          + &ensp;Добавить
        </button>
      )}
    </section>
  );
}
