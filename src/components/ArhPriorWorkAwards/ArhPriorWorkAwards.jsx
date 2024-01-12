import { useFieldArray } from 'react-hook-form';
import ConditionalInput from '../Reusable/ConditionalInput/ConditionalInput';

export default function ArhPriorWorkAwards({
  isEdit,
  errors,
  register,
  control,
}) {
  const { fields, append, remove } = useFieldArray({
    name: 'awardsFieldSet',
    control,
    rules: { required: 'Введите хотя бы одно значение' },
  });
  return (
    <section className="awards">
      {fields.map((field, index) => (
        <div className="awards__container" key={field.id}>
          <fieldset className="columns">
            <div className="column is-two-quarters">
              <div className="control">
                <legend className="label label label-horizontal is-one-quarter">
                  Название
                </legend>
                <input
                  className="input"
                  type="text"
                  disabled={!isEdit}
                  {...register(`awardsFieldSet.${index}.awardTitle`)}
                />
                <span>
                  {errors?.awardsFieldSet?.[index]?.awardTitle?.message}
                </span>
              </div>
            </div>
            <div className="column is-one-quarter">
              <legend className="label label label-horizontal is-two-quarters">
                Дата получения
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
                  fieldSetName="awardsFieldSet"
                  fieldName="awardDate"
                  conditionalFieldName="awardTitle"
                  conditionalFieldType="string"
                />
                <span>
                  {errors?.awardsFieldSet?.[index]?.awardDate?.message}
                </span>
              </div>
            </div>
          </fieldset>
          {isEdit && (
            <input
              type="button"
              className="button-trash"
              onClick={() => remove(index)}
            />
          )}
        </div>
      ))}
      {isEdit && (
        <button
          type="button"
          className="archive-data-form__add"
          onClick={() => {
            append({
              awardTitle: 'Награда',
              awardDate: '2021-01-01',
            });
          }}
        >
          Добавить +
        </button>
      )}
    </section>
  );
}
