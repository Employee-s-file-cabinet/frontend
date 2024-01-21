import PersonalDForeignEmployeeWorkVisa from '../PersonalDForeignEmployeeWorkVisa/PersonalDForeignEmployeeWorkVisa';
import PersonalDForeignEmployeeWorkPermit from '../PersonalDForeignEmployeeWorkPermit/PersonalDForeignEmployeeWorkPermit';

export default function PersonalDForeignEmployeetData({
  isEdit,
  control,
  errors,
  register,
}) {
  return (
    <details className="details" open>
      <summary className="summaru">Документы иностранного сотрудника</summary>
      <div className="columns is-multiline is-mobile input-none ">
        <div className="column is-one-quarter">
          <legend className="label label label-horizontal label-type">
            Рабочая виза
          </legend>
        </div>
        <div className="column">
          <PersonalDForeignEmployeeWorkVisa
            isEdit={isEdit}
            errors={errors}
            register={register}
            control={control}
          />
        </div>
      </div>
      <div className="columns is-multiline is-mobile input-none ">
        <div className="column is-one-quarter">
          <legend className="label label label-horizontal label-type">
            Разрешение на работу
          </legend>
        </div>
        <div className="column">
          <PersonalDForeignEmployeeWorkPermit
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
