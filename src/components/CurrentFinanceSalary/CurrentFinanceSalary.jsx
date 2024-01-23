export default function CurrentFinanceSalary() {
  return (
    <div className="columns is-margin-top">
      <div className="control">
        <legend className="label label-horizontal label-type label-margin">
          Оклад (gross)
        </legend>
        <div className="field  field-cell">
          <div className="control ">80 000 p.</div>
        </div>
      </div>
      <div className="control is-one-third field-cell">
        <legend className="label label-horizontal label-type label-margin">
          Надбавка
        </legend>
        <div className="field  field-cell">
          <div className="control career-development__control">20 000 p.</div>
        </div>
      </div>
    </div>
  );
}
