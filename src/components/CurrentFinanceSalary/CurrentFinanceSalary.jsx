export default function CurrentFinanceSalary() {
  return (
    <div className="columns is-gapless">
      <div className="column is-one-third field-cell">
        <legend className="label label-horizontal">Оклад (gross)</legend>
        <div className="field  field-cell">
          <div className="control ">80 000 p.</div>
        </div>
      </div>
      <div className="column is-one-third field-cell">
        <legend className="label label-horizontal">Надбавка</legend>
        <div className="field  field-cell">
          <div className="control career-development__control">20 000 p.</div>
        </div>
      </div>
    </div>
  );
}
