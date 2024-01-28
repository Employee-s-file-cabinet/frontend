import './PersonalDFPassportForeign.scss';
import { useFieldArray } from 'react-hook-form';
import ConditionalInput from '../Reusable/ConditionalInput/ConditionalInput';

export default function PersonalDFPassportForeign({
  isEdit,
  control,
  register,
  errors,
}) {
  const { fields, append, remove } = useFieldArray({
    name: 'personalDFPassportForeignFieldSet',
    control,
    rules: { required: 'Введите хотя бы одно значение' },
  });
  return (
    <section>
      {fields.map((field, index) => (
        <div
          className="columns is-multiline is-mobile input-none passport-foreign"
          key={field.id}
        >
          {isEdit && (
            <input
              type="button"
              className="button-trash button-trash-personal"
              onClick={() => remove(index)}
            />
          )}
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
                    `personalDFPassportForeignFieldSet.${index}.number`
                  )}
                />
                <span>
                  {
                    errors?.personalDFPassportForeignFieldSet?.[index]?.number
                      ?.message
                  }
                </span>
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
                    `personalDFPassportForeignFieldSet.${index}.issued_date`
                  )}
                />
                <span>
                  {
                    errors?.personalDFPassportForeignFieldSet?.[index]
                      ?.issued_date?.message
                  }
                </span>
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
                  fieldSetName="personalDFPassportForeignFieldSet"
                  fieldName="expired"
                  conditionalFieldName="issued_date"
                  conditionalFieldType="date"
                />
                <span>
                  {
                    errors?.personalDFPassportForeignFieldSet?.[index]?.expired
                      ?.message
                  }
                </span>
              </div>
            </div>
          </fieldset>
        </div>
      ))}
      {isEdit && (
        <button
          className="personal-data-form__add"
          type="button"
          onClick={() => {
            append({
              number: '899991878',
              issued_date: '2021-03-30',
              expired: '2031-03-30',
            });
          }}
        >
          + &ensp;Добавить
        </button>
      )}
    </section>
  );
}
