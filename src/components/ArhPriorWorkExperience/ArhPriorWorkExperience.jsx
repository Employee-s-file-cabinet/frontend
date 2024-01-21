import { useFieldArray } from 'react-hook-form';
import ConditionalInput from '../Reusable/ConditionalInput/ConditionalInput';
import './ArhPriorWorkExperience.scss';

export default function ArhPriorWorkExperience({
  isEdit,
  errors,
  register,
  control,
}) {
  const { fields, append, remove } = useFieldArray({
    name: 'priorWorkExperienceFieldSet',
    control,
    rules: { required: 'Введите хотя бы одно значение' },
  });
  return (
    <section className="experience">
      {fields.map((field, index) => (
        <div className="experience__container" key={field.id}>
          <fieldset className="experience__field-set">
            <div className="field">
              <legend className="label label-horizontal">
                Название компании
              </legend>
              <div className="control">
                <input
                  className="input experience__input"
                  type="text"
                  placeholder="Название компании"
                  disabled={!isEdit}
                  {...register(
                    `priorWorkExperienceFieldSet.${index}.companyName`
                  )}
                />
                <span>
                  {
                    errors?.priorWorkExperienceFieldSet?.[index]?.companyName
                      ?.message
                  }
                </span>
              </div>
            </div>
            <div className="field">
              <legend className="label label-horizontal">Должность</legend>
              <div className="control">
                <input
                  className="input experience__input"
                  type="text"
                  placeholder="Рекрутинг РУС"
                  disabled={!isEdit}
                  {...register(`priorWorkExperienceFieldSet.${index}.position`)}
                />
                <span>
                  {
                    errors?.priorWorkExperienceFieldSet?.[index]?.position
                      ?.message
                  }
                </span>
              </div>
            </div>
            <div className="columns is-gapless">
              <div className="column is-one-third">
                <div className="field  field-cell">
                  <div className="control career-development__control">
                    <legend className="label label label-horizontal is-one-third">
                      Начало работы
                    </legend>
                    <input
                      className="input career-development__input"
                      type="date"
                      disabled={!isEdit}
                      {...register(
                        `priorWorkExperienceFieldSet.${index}.beginDate`,
                        {
                          valueAsDate: true,
                        }
                      )}
                    />
                    <span>
                      {
                        errors?.priorWorkExperienceFieldSet?.[index]?.beginDate
                          ?.message
                      }
                    </span>
                  </div>
                </div>
              </div>
              <div className="column is-one-third">
                <div className="field  field-cell">
                  <legend className="label label label-horizontal is-one-third">
                    Окончание работы
                  </legend>
                  <div className="control career-development__control">
                    <ConditionalInput
                      className="input career-development__input"
                      control={control}
                      type="date"
                      register={register}
                      index={index}
                      disabled={!isEdit}
                      errors={errors}
                      fieldSetName="priorWorkExperienceFieldSet"
                      fieldName="endDate"
                      conditionalFieldName="beginDate"
                      conditionalFieldType="date"
                    />
                    <span>
                      {
                        errors?.priorWorkExperienceFieldSet?.[index]?.endDate
                          ?.message
                      }
                    </span>
                  </div>
                </div>
              </div>
            </div>
            <div className="field">
              <legend className="label label-horizontal">Функционал</legend>
              <div className="control">
                <textarea
                  className="textarea is-small"
                  disabled={!isEdit}
                  {...register(
                    `priorWorkExperienceFieldSet.${index}.jobDescription`
                  )}
                />
                <span>
                  {
                    errors?.priorWorkExperienceFieldSet?.[index]?.jobDescription
                      ?.message
                  }
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
              companyName: 'Магнит',
              position: 'Сторож',
              beginDate: '',
              endDate: '',
              jobDescription: 'Счастье, радость он будет приносить людям',
            });
          }}
        >
          Добавить +
        </button>
      )}
    </section>
  );
}
