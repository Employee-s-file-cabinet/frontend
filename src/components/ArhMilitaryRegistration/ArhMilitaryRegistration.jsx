/* eslint-disable no-unused-vars */
import './ArhMilitaryRegistration.scss';
import { useState, useEffect } from 'react';

import ArhMilitaryRegMilitaryID from '../ArhMilitaryRegMilitaryID/ArhMilitaryRegMilitaryID';

export default function ArhMilitaryRegistration({
  isEdit,
  errors,
  register,
  getValues,
  watch,
  reset,
}) {
  const [isMilitaryShown, setIsMilitaryShown] = useState(
    getValues()?.military?.status === 'Да'
  );

  useEffect(() => {
    const militaryStatus = watch((value) => {
      if (value.military.status === 'Да') {
        setIsMilitaryShown(true);
      } else {
        setIsMilitaryShown(false);
      }
    });
    return () => {
      militaryStatus.unsubscribe();
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [watch, reset]);

  return (
    <details className="details" open>
      <summary className="summaru">Воинский учёт</summary>
      <div className="columns is-multiline is-mobile">
        <div className="column is-one-quarter block-gap">
          <legend className="label label label-horizontal label-type">
            Статус
          </legend>
        </div>
        <div className="column block-gap">
          <div className="columns">
            <div className="column">
              <div className="control">
                <legend className="label label-horizontal is-one-quarter">
                  Военнообязанный
                </legend>
                <div className="select">
                  <select {...register('military.status')} disabled={!isEdit}>
                    <option>Да</option>
                    <option>Нет</option>
                  </select>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {isMilitaryShown && (
        <div className="columns is-multiline is-mobile">
          <div className="column is-one-quarter block-gap">
            <legend className="label label label-horizontal label-type">
              Военный билет
            </legend>
          </div>
          <div className="column block-gap">
            <ArhMilitaryRegMilitaryID
              isEdit={isEdit}
              errors={errors}
              register={register}
              getValues={getValues}
              watch={watch}
            />
          </div>
        </div>
      )}
      {isMilitaryShown && (
        <div className="columns is-multiline is-mobile">
          <div className="column is-one-quarter block-gap">
            <legend className="label label label-horizontal label-type">
              Комиссариат
            </legend>
          </div>
          <div className="column block-gap">
            <div className="columns is-multiline is-mobile">
              <div className="column">
                <div className="control">
                  <textarea
                    className="optionally-textarea"
                    {...register('military.commissariat')}
                    disabled={!isEdit}
                  />
                </div>
                <span className="">
                  {errors?.military?.commissariat?.message}
                </span>
              </div>
            </div>
          </div>
        </div>
      )}
    </details>
  );
}
