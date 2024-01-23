export default function CurrentFinanceCareerDevelopmentInput({
  isEdit,
  errors,
  register,
  field,
  index,
  remove,
}) {
  return (
    <fieldset className="columns" key={field.id}>
      <div className="control">
        <input
          className={`horizontal-wrapper__input-small${
            (!isEdit && ' horizontal-wrapper__input-type-disabled') || ''
          }`}
          type="text"
          placeholder=""
          disabled={!isEdit}
          {...register(`careerFieldSet.${index}.employeePosition`)}
        />
        <span className="profile__input-error">
          {errors?.careerFieldSet?.[index]?.employeePosition?.message}
        </span>
      </div>
      <div className="control">
        <input
          className={`horizontal-wrapper__input-small${
            (!isEdit && ' horizontal-wrapper__input-type-disabled') || ''
          }`}
          type="date"
          placeholder=""
          disabled={!isEdit}
          {...register(`careerFieldSet.${index}.employeePositionDateBeg`)}
        />
        <span className="profile__input-error">
          {errors?.careerFieldSet?.[index]?.employeePositionDateBeg?.message}
        </span>
      </div>
      <div className="control">
        <input
          className={`horizontal-wrapper__input-small${
            (!isEdit && ' horizontal-wrapper__input-type-disabled') || ''
          }`}
          type="date"
          placeholder=""
          disabled={!isEdit}
          {...register(`careerFieldSet.${index}.employeePositionDateEnd`)}
        />
        <span className="profile__input-error">
          {errors?.careerFieldSet?.[index]?.employeePositionDateEnd?.message}
        </span>
      </div>
      {isEdit && (
        <input
          type="button"
          className="button-trash button-trash-centre"
          onClick={() => remove(index)}
        />
      )}
    </fieldset>
  );
}
