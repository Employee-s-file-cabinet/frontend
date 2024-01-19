import './PersonalDForeignEmployeeWorkPermit.scss';
import { useFieldArray } from 'react-hook-form';
import ConditionalInput from '../Reusable/ConditionalInput/ConditionalInput';

export default function PersonalDForeignEmployeeWorkPermit({
  isEdit,
  control,
  errors,
  register,
}) {
  const { fields, append, remove } = useFieldArray({
    name: 'personalDForeignEmployeeWorkPermitFieldSet',
    control,
    rules: { required: 'Введите хотя бы одно значение' },
  });
  return (
    <section>
      {fields.map((field, index) => (
        <div
          className="columns is-multiline is-mobile input-none work-permit"
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
                    `personalDForeignEmployeeWorkPermitFieldSet.${index}.number`
                  )}
                />
                <span>
                  {
                    errors?.personalDForeignEmployeeWorkPermitFieldSet?.[index]
                      ?.number?.message
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
                    `personalDForeignEmployeeWorkPermitFieldSet.${index}.issued_date`
                  )}
                />
                {
                  errors?.personalDForeignEmployeeWorkPermitFieldSet?.[index]
                    ?.issued_date?.message
                }
              </div>
              <div className="control">
                <legend className="label label label-horizontal is-two-quarters">
                  Действительно до
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
                  fieldSetName="personalDForeignEmployeeWorkPermitFieldSet"
                  fieldName="expired"
                  conditionalFieldName="issued_date"
                  conditionalFieldType="date"
                />
                <span>
                  {
                    errors?.personalDForeignEmployeeWorkPermitFieldSet?.[index]
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
              number: '670011228855',
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
