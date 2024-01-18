import { useState } from 'react';

export default function PersonalDFOpenData({
  isEdit,
  errors,
  register,
  getValues,
  setValue,
  watch,
}) {
  const [isChecked, setIsChecked] = useState(
    watch().residential_address === watch().registration_address
  );
  return (
    <fieldset>
      <div className="horizontal-wrapper">
        <h6 className="horizontal-wrapper__title">Дата рождения</h6>
        <input
          className="horizontal-wrapper__input"
          type="date"
          disabled={!isEdit}
          {...register('date_of_birth')}
        />
        <span className="">{errors.date_of_birth?.message}</span>
      </div>
      <div className="horizontal-wrapper">
        <h6 className="horizontal-wrapper__title">Место рождения</h6>
        <input
          className="horizontal-wrapper__input"
          type="text"
          placeholder="Введите место рождения"
          disabled={!isEdit}
          {...register('place_of_birth')}
        />
        <span className="">{errors.place_of_birth?.message}</span>
      </div>
      <div className="horizontal-wrapper">
        <h6 className="horizontal-wrapper__title">Пол</h6>
        <select
          className="control-horizontal horizontal-wrapper__input"
          disabled={!isEdit}
          {...register('gender')}
        >
          <option>Женский</option>
          <option>Мужской</option>
        </select>
        <span className="">{errors.gender?.message}</span>
      </div>
      <div className="horizontal-wrapper">
        <h6 className="horizontal-wrapper__title">Адрес регистрации</h6>
        <div className="horizontal-wrapper__box">
          <input
            className="horizontal-wrapper__input horizontal-wrapper__input-long"
            type="text"
            disabled={!isEdit}
            {...register('registration_address')}
          />
          <span className="">{errors.registration_address?.message}</span>
          <h6 className="checkbox checkbox__legend">
            <input
              type="checkbox"
              className="checkbox__input"
              readOnly={!isEdit}
              onChange={() => {
                if (!isChecked) {
                  setValue(
                    'residential_address',
                    `${getValues().registration_address}`,
                    {
                      shouldValidate: true,
                      shouldDirty: true,
                    }
                  );
                  setIsChecked(true);
                } else {
                  setIsChecked(false);
                  setValue('residential_address', '', {
                    shouldValidate: true,
                    shouldDirty: true,
                  });
                }
              }}
              checked={
                watch().residential_address === watch().registration_address
              }
              disabled={!isEdit}
            />
            Совпадает с адресом проживания
          </h6>
        </div>
      </div>
      <div className="horizontal-wrapper">
        <h6 className="horizontal-wrapper__title">Адрес проживания</h6>
        <input
          className="horizontal-wrapper__input horizontal-wrapper__input-long"
          type="text"
          disabled={!isEdit || isChecked}
          {...register('residential_address')}
        />
        <span className="">{errors.residential_address?.message}</span>
      </div>
    </fieldset>
  );
}
