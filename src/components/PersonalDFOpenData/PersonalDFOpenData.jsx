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
          className={`horizontal-wrapper__input${
            (!isEdit && ' horizontal-wrapper__input-type-disabled') || ''
          }`}
          type="date"
          placeholder="Введите дату рождения"
          disabled={!isEdit}
          {...register('date_of_birth')}
        />
        <span className="">{errors.date_of_birth?.message}</span>
      </div>
      <div className="horizontal-wrapper">
        <h6 className="horizontal-wrapper__title">Место рождения</h6>
        <input
          className={`horizontal-wrapper__input${
            (!isEdit && ' horizontal-wrapper__input-type-disabled') || ''
          }`}
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
          className={`horizontal-wrapper__input${
            (!isEdit && ' horizontal-wrapper__input-type-disabled') || ''
          }`}
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
            className={`horizontal-wrapper__input-long${
              (!isEdit && ' horizontal-wrapper__input-type-disabled') || ''
            }`}
            type="text"
            disabled={!isEdit}
            {...register('registration_address')}
          />
          <span className="">{errors.registration_address?.message}</span>
          <legend className="checkbox checkbox__legend">
            <input
              type="checkbox"
              className="checkbox__input"
              readOnly={!isEdit}
              disabled={!isEdit}
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
            />
            Совпадает с адресом проживания
          </legend>
        </div>
      </div>
      <div className="horizontal-wrapper">
        <h6 className="horizontal-wrapper__title">Адрес проживания</h6>
        <input
          className={`horizontal-wrapper__input-long${
            (!isEdit && ' horizontal-wrapper__input-type-disabled') || ''
          }`}
          type="text"
          disabled={!isEdit || isChecked}
          {...register('residential_address')}
        />
        <span className="">{errors.residential_address?.message}</span>
      </div>
    </fieldset>
  );
}
