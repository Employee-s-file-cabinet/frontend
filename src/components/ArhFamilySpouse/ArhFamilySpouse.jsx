import './ArhFamilySpouse.scss';
import { useState, useEffect } from 'react';

export default function ArhFamilySpouse({
  isEdit,
  errors,
  register,
  getValues,
  watch,
  reset,
}) {
  const [isEmployee, setIsEmployee] = useState(
    getValues()?.spouse?.is_employee === 'Да' || false
  );

  useEffect(() => {
    const isEmployeeStatus = watch((value) => {
      if (value?.spouse?.is_employee === 'Да') {
        setIsEmployee(true);
      } else {
        setIsEmployee(false);
      }
    });
    return () => {
      isEmployeeStatus.unsubscribe();
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [watch, reset, getValues]);

  return (
    <section>
      <fieldset className="columns">
        <div className="column is-one-quarter">
          <div className="control">
            <legend className="label label label-horizontal is-one-quarter">
              Фамилия
            </legend>
            <input
              className="input"
              type="text"
              placeholder="Фамилия"
              disabled={!isEdit}
              {...register('spouse.last_name')}
            />
          </div>
          <span className="">{errors?.spouse?.last_name?.message}</span>
        </div>
        <div className="column is-two-quarter">
          <legend className="label label label-horizontal is-two-quarters">
            Имя
          </legend>
          <div className="control">
            <input
              className="input"
              type="text"
              placeholder="Имя"
              disabled={!isEdit}
              {...register('spouse.first_name')}
            />
          </div>
          <span className="">{errors?.spouse?.first_name?.message}</span>
        </div>
        <div className="column is-two-quarter">
          <legend className="label label label-horizontal is-two-quarters">
            Отчество
          </legend>
          <div className="control">
            <input
              className="input"
              type="text"
              placeholder="Отчество"
              disabled={!isEdit}
              {...register('spouse.middle_name')}
            />
          </div>
          <span className="">{errors?.spouse?.middle_name?.message}</span>
        </div>
      </fieldset>
      <fieldset className="columns">
        <div className="column is-one-quarter">
          <div className="control">
            <legend className="label label-horizontal is-one-quarter">
              Дата рождения
            </legend>
            <input
              className="input"
              type="date"
              disabled={!isEdit}
              {...register('spouse.date_of_birth')}
            />
          </div>
          <span className="">{errors?.spouse?.date_of_birth?.message}</span>
        </div>
      </fieldset>
      <div className="columns">
        <div className="column is-one-quarter">
          <div className="control">
            <legend className="label label label-horizontal is-one-quarter">
              Сотрудник компании
            </legend>
            <div className="select">
              <select {...register('spouse.is_employee')} disabled={!isEdit}>
                <option>Да</option>
                <option>Нет</option>
              </select>
            </div>
          </div>
        </div>
        {isEmployee && (
          <div className="column is-one-quarter input-none">
            <legend className="label label label-horizontal is-one-quarter">
              Отдел
            </legend>
            <div className="control">
              <input
                className="input"
                type="text"
                disabled={!isEdit}
                {...register('spouse.department')}
              />
            </div>
            <span className="">{errors?.spouse?.department?.message}</span>
          </div>
        )}
        {isEmployee && (
          <div className="column is-one-quarter input-none">
            <legend className="label label label-horizontal is-one-quarter">
              Должность
            </legend>
            <div className="control">
              <input
                className="input"
                type="text"
                disabled={!isEdit}
                {...register('spouse.position')}
              />
            </div>
            <span className="">{errors?.spouse?.position?.message}</span>
          </div>
        )}
      </div>
      {!isEmployee && (
        <div className="columns">
          <div className="column input-none">
            <div className="control">
              <legend className="label label label-horizontal">
                Вид деятельности
              </legend>
              <input
                className="input"
                type="text"
                placeholder="Вид деятельности"
                disabled={!isEdit}
                {...register('spouse.occupation')}
              />
            </div>
            <span className="">{errors?.spouse?.occupation?.message}</span>
          </div>
        </div>
      )}
    </section>
  );
}
