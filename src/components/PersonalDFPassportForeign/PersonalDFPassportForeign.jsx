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
    <section className="columns is-multiline is-mobile input-none ">
      {fields.map((field, index) => (
        <fieldset className="column" key={field.id}>
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
              number: '899991878',
              issued_date: '2021-03-30',
              expired: '2031-03-30',
            });
          }}
        >
          Добавить +
        </button>
      )}
    </section>
  );
}
