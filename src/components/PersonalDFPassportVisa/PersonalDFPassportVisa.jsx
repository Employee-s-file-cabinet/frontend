/* eslint-disable no-unused-vars */
import { useFieldArray } from 'react-hook-form';
import ConditionalInput from '../Reusable/ConditionalInput/ConditionalInput';

export default function PersonalDFPassportVisa({
  isEdit,
  control,
  register,
  errors,
}) {
  const { fields, append, remove } = useFieldArray({
    name: 'personalDFPassportVisaFieldSet',
    control,
    rules: { required: 'Введите хотя бы одно значение' },
  });
  return (
    <div className="columns is-multiline is-mobile input-none ">
      {fields.map((field, index) => (
        <fieldset className="column" key={field.id}>
          <div className="columns">
            <div className="column">
              <div className="control">
                <legend className="label label label-horizontal">Страна</legend>
                <input
                  className="input"
                  type="text"
                  placeholder="Страна"
                  disabled={!isEdit}
                  {...register(
                    `personalDFPassportVisaFieldSet.${index}.issued_by`
                  )}
                />
                <span>
                  {
                    errors?.personalDFPassportVisaFieldSet?.[index]?.issued_by
                      ?.message
                  }
                </span>
              </div>
            </div>
          </div>
          <div className="columns">
            <div className="column is-one-quarter">
              <div className="control">
                <legend className="label label label-horizontal is-one-quarter">
                  Категория
                </legend>
                <input
                  className="input"
                  type="text"
                  placeholder=""
                  disabled={!isEdit}
                  {...register(
                    `personalDFPassportVisaFieldSet.${index}.category`
                  )}
                />
                {
                  errors?.personalDFPassportVisaFieldSet?.[index]?.category
                    ?.message
                }
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
                    `personalDFPassportVisaFieldSet.${index}.issued_date`
                  )}
                />
                {
                  errors?.personalDFPassportVisaFieldSet?.[index]?.issued_date
                    ?.message
                }
              </div>
            </div>
            <div className="column is-two-quarters">
              <legend className="label label label-horizontal is-two-quarters">
                Действителен до
              </legend>
              <div className="control">
                <ConditionalInput
                  className="input"
                  control={control}
                  type="date"
                  register={register}
                  index={index}
                  disabled={!isEdit}
                  errors={errors}
                  fieldSetName="personalDFPassportVisaFieldSet"
                  fieldName="expired"
                  conditionalFieldName="issued_date"
                  conditionalFieldType="date"
                />
                <span>
                  {
                    errors?.personalDFPassportVisaFieldSet?.[index]?.expired
                      ?.message
                  }
                </span>
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
              issued_by: 'ФРАНЦИЯ',
              category: 'С',
              issued_date: '2022-02-22',
              expired: '2027-02-22',
            });
          }}
        >
          Добавить +
        </button>
      )}
    </div>
  );
}
