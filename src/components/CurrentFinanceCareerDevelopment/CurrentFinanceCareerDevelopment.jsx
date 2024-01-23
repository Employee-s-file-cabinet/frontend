import './CurrentFinanceCareerDevelopment.scss';
import { useFieldArray } from 'react-hook-form';

import CurrentFinanceCareerDevelopmentInput from '../CurrentFinanceCareerDevelopmentInput/CurrentFinanceCareerDevelopmentInput';

export default function CurrentFinanceCareerDevelopment({
  isEdit,
  errors,
  register,
  control,
}) {
  const { fields, append, remove } = useFieldArray({
    name: 'careerFieldSet',
    control,
    rules: { required: 'Введите хотя бы одно значение' },
  });

  return (
    <section>
      <div className="columns is-margin-top">
        <div className="control">
          <legend className="label label label-horizontal label-type label-margin">
            Должность
          </legend>
        </div>
        <div className="control">
          <legend className="label label label-horizontal label-type label-margin">
            Начало работы
          </legend>
        </div>
        <div className="control">
          <legend className="label label label-horizontal label-type label-margin">
            Окончание работы
          </legend>
        </div>
      </div>
      {fields.map((field, index) => (
        <CurrentFinanceCareerDevelopmentInput
          isEdit={isEdit}
          errors={errors}
          register={register}
          field={field}
          key={field.id}
          index={index}
          remove={remove}
        />
      ))}
      {isEdit && (
        <button
          type="button"
          className="current-data-form__add"
          onClick={() => {
            append({
              employeePosition: '',
              employeePositionDateBeg: '2021-01-01',
              employeePositionDateEnd: '2021-01-01',
            });
          }}
        >
          + &ensp;Добавить
        </button>
      )}
    </section>
  );
}
