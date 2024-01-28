/* eslint-disable no-unused-vars */
import ArhPriorWorkExperience from '../ArhPriorWorkExperience/ArhPriorWorkExperience';
import ArhPriorWorkAwards from '../ArhPriorWorkAwards/ArhPriorWorkAwards';

export default function ArhPriorWork({ isEdit, errors, register, control }) {
  return (
    <details className="details" open>
      <summary className="summaru">Предыдущая работа</summary>
      <div className="columns is-multiline is-mobile">
        <div className="column is-one-quarter block-gap">
          <legend className="label label label-horizontal label-type">
            Опыт работы
          </legend>
        </div>
        <div className="column block-gap">
          <ArhPriorWorkExperience
            isEdit={isEdit}
            errors={errors}
            register={register}
            control={control}
          />
        </div>
      </div>
      <div className="columns is-multiline is-mobile">
        <div className="column is-one-quarter block-gap">
          <legend className="label label label-horizontal label-type">
            Награды
          </legend>
        </div>
        <div className="column block-gap">
          <ArhPriorWorkAwards
            isEdit={isEdit}
            errors={errors}
            register={register}
            control={control}
          />
        </div>
      </div>
    </details>
  );
}
