import './PersonalDFPassportVisa.scss';
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
    <section>
      {fields.map((field, index) => (
        <div
          className="columns is-multiline is-mobile input-none passport-visa"
          key={field.id}
        >
          <fieldset className="column">
            <div className="columns columns-margin">
              <div className="control">
                <legend className="label label label-horizontal">Страна</legend>
                <input
                  className={`horizontal-wrapper__input-long${
                    (!isEdit && ' horizontal-wrapper__input-type-disabled') ||
                    ''
                  }`}
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
            <div className="columns columns-margin">
              <div className="control">
                <legend className="label label label-horizontal is-one-quarter">
                  Категория
                </legend>
                <input
                  className={`horizontal-wrapper__input-small${
                    (!isEdit && ' horizontal-wrapper__input-type-disabled') ||
                    ''
                  }`}
                  type="text"
                  placeholder="Категория"
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
                    `personalDFPassportVisaFieldSet.${index}.issued_date`
                  )}
                />
                {
                  errors?.personalDFPassportVisaFieldSet?.[index]?.issued_date
                    ?.message
                }
              </div>
              <div className="control">
                <legend className="label label label-horizontal is-two-quarters">
                  Действителен до
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
              issued_by: 'ФРАНЦИЯ',
              category: 'С',
              issued_date: '2022-02-22',
              expired: '2027-02-22',
            });
          }}
        >
          + &ensp;Добавить
        </button>
      )}
    </section>
  );
}
